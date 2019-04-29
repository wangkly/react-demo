import React,{Component} from 'react';
import {Upload, Icon, message,Form,Input} from 'antd';

import EditInfoForm from './componets/edit-info';

const FormItem = Form.Item;

export default class UserEdit extends Component{

    constructor(props){
        super(props);
        this.state={
            loading:false
        }
    }


    componentDidMount(){
        let {getUserInfo} = this.props;
        let {userId} =this.props.match.params;
        getUserInfo(userId);
    }


    render(){
        let {userInfo} = this.props;

        const uploadButton = (
            <div className="upload-tips">
              <Icon type={this.state.loading ? 'loading' : 'camera'} style={{ fontSize: '24px', }} />
              <div className="ant-upload-text">上传头像</div>
            </div>
          );

        return(
            <div className="user-edit-container">
                    <div className="head-img">
                        <Upload
                                name="file"
                                disabled={false}
                                listType="picture-card"
                                className="avatar-uploader"
                                showUploadList={false}
                                action="http://localhost:3001/upload"
                                beforeUpload={this.beforeUpload}
                                onChange={this.handleChange}
                            >
                                { uploadButton}
                            </Upload>
                            <img src={userInfo.headImg} alt="avatar" /> 
                    </div>

                    <div className="user-info-edit">
                        <EditInfoForm {...this.props}/>
                    </div>

            </div>
        )
    }


    beforeUpload =(file)=> {
        const isJPG = file.type === 'image/jpeg';
        if (!isJPG) {
          message.error('You can only upload JPG file!');
        }
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isLt2M) {
          message.error('Image must smaller than 2MB!');
        }
        return isJPG && isLt2M;
      }


    handleChange = (info) => {
        let {updateUserHeadImg,userInfo} = this.props;

        if (info.file.status === 'uploading') {
          this.setState({ loading: true });
          return;
        }


        if (info.file.status === 'done') {
            let response = info.file.response;
            if(response.success && response.data){
                this.setState({
                    imageUrl:response.data,
                    loading: false,
                },()=>{
                    updateUserHeadImg({userId:userInfo._id,headImg:response.data})
                })
            }
        }

      }



}
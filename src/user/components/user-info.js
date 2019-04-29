import React,{Component} from 'react';
import {Button,Upload, Icon, message} from 'antd';
import {Link} from 'react-router-dom';
import MyFetch from 'myfetch';
export default class UserInfo extends Component{

    constructor(props){
        super(props);
        this.state={
            loading:false,
            canOperate:false,//是否能在user页面进行操作，如上传头像，修改个人资料
        }
    }


    componentDidMount(){
        let {userId} =this.props;
        MyFetch({url:`checkCanOperate/${userId}`}).then((resp)=>{
            let {err,res} = resp;
            if(!err && res.success){
                //cookies对应的是当前操作的user
                this.setState({
                    canOperate:true
                })
            }else{
                this.setState({
                    canOperate:false
                })
            }
        })
    }


    render(){
        let {userInfo} = this.props;
        let {canOperate} = this.state;

        const uploadButton = (
            <div className="upload-tips">
              <Icon type={this.state.loading ? 'loading' : 'camera'} style={{ fontSize: '24px', }} />
              <div className="ant-upload-text">上传头像</div>
            </div>
          );

        return(
            <div className="user-top">
            <div className="user-headimg">
                {/* <img src ="https://pic.qianmi.com/qmui/v0.2/img/avatar-default.png" />    */}
                
                <Upload
                    name="file"
                    disabled={!canOperate}
                    listType="picture-card"
                    className="avatar-uploader"
                    showUploadList={false}
                    action="http://localhost:3001/upload"
                    beforeUpload={this.beforeUpload}
                    onChange={this.handleChange}
                >
                    {uploadButton}
                </Upload>
                <img src={userInfo.headImg} alt="avatar" />
            </div>

            <div className="user-info">
                <span className="user-name">{userInfo.nickName||''}</span>
                <br></br>
                <span className="user-desc">{userInfo.desc||''}</span>
            </div>
            
            <div className="user-opts">
                {
                    canOperate ?
                    <Link to={`/user/edit/${userInfo._id}`}><Button type="gohst" >编辑个人资料</Button></Link>
                    :
                    null
                }
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
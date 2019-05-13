import React,{Component} from 'react';
import BraftEditor from 'braft-editor'
import {Icon,Button,message} from 'antd';
import {Link} from 'react-router-dom';
import MyFetch from 'myfetch';
import Comments from './components/comments';

export default class Article extends Component{

    constructor(props){
        super(props);
        this.state={
            followed:false
        }
    }

    componentDidMount(){
        let {init,checkFollow} = this.props;
        let {aid} =this.props.match.params;
        init(aid)
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        let {checkFollow} = this.props;
        if(this.props.userInfo._id !=prevProps.userInfo._id){
            checkFollow({userId:this.props.userInfo._id,callback:this.checkfollowCallback})
        }
    }

    checkfollowCallback=(resp)=>{
        let {res,err} = resp;
        if(!err && res.success){
            this.setState({
                followed:true
            })
        }else{
            this.setState({
                followed:false
            })
        }
    }


    render(){

        let {article,userInfo,likefavo} = this.props;
        let  editorState = BraftEditor.createEditorState(article.content);
        let htmlString = editorState.toHTML()
        return(
            <div className="article-container">
                <div className="article-title"><h1>{article.title}</h1></div>
                <div className="article-user">
                    <div className="header">
                    <Link to={`/user/${userInfo._id}`}>
                        <img src ={userInfo.headImg}/>
                    </Link>
                    </div>
                    <div className="user-info">
                        <div className="user-top">
                            <span>{userInfo.nickName||userInfo.account}</span>
                            {
                                this.state.followed ?
                                <Button type="default"  size="small" onClick={()=>this.unfollowUser(userInfo._id)}>已关注</Button>
                                :
                                <Button type="primary" icon="plus" size="small" onClick={()=>this.followUser(userInfo._id)}>关注</Button>
                            }
                            {/* <Icon type="heart" className="user-follow" theme="twoTone" twoToneColor="#eb2f96" /> */}
                        </div>
                        <span>{userInfo.nickName||userInfo.account}</span>
                    </div>
                </div>
                <div  className="braft-output-content" dangerouslySetInnerHTML={{__html: htmlString }}></div>
                <div className="bottom-row">
                    <Button type="primary" size="large" onClick={this.like}>
                    {/* <Icon type="heart" theme="twoTone" twoToneColor="#eb2f96" /> */}
                    <Icon type="heart" theme="filled" style={{fontSize:18,'color':'#FF0000'}} />
                    { likefavo && likefavo.like ? '已赞': '点个赞'}</Button>
                    <Button type="default" className="bottom-btn" size="large" onClick={this._addFavorite}>
                    <Icon type="star" theme="filled" style={{fontSize:18,'color':'#DAA520'}} />
                    {likefavo && likefavo.favorite ? '已收藏':'收藏'}
                    </Button>
                </div>
                <Comments {...this.props}/>  
            </div>
        )

    }



    like=async ()=>{
        let {article,likeArticle} = this.props;
        let {err,res} = await MyFetch({url:'checkIfLogin'});
        if(!err && res.success){

           await likeArticle({articleId:article._id,callback:this._callback})

        }else{
            message.warning('请登录后操作');
        }
    }


    _addFavorite =()=>{
        let {addFavorite,article} = this.props;
        addFavorite({articleId:article._id,callback:this._callback})
    }

    _callback=(resp)=>{
        let {err,res} = resp;
        if(!res.success){
            message.warning(`${res.errMsg}`);
        }else{
            let {init} = this.props;
            let {aid} =this.props.match.params;
            init(aid)
        }
    }


    followUser=(userId)=>{
        // console.log('follow **',userId)
        let {follow,checkFollow} = this.props;
        follow({userId});
        setTimeout(() => {
            checkFollow({userId:userId,callback:this.checkfollowCallback})
        }, 800);
    }

    unfollowUser=(userId)=>{
        // console.log('follow **',userId)
        let {unfollow,checkFollow} = this.props;
        unfollow({userId})
        setTimeout(() => {
            checkFollow({userId:userId,callback:this.checkfollowCallback})
        }, 800);
    }




}
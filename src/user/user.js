import React,{Component} from 'react';
import Right from './components/right';
import Article from './components/article';
import UserInfo from './components/user-info';

export default class User extends Component{

    constructor(props){
        super(props)
    }

    
    componentDidMount(){
        let {getUserInfo,getUserArticle} = this.props;
        let {userId} =this.props.match.params;
        getUserInfo(userId);
        getUserArticle(userId);

        let reactContent = document.getElementById('react-content');
        reactContent && reactContent.addEventListener('scroll',this.reactContentScroll)
    }


    componentWillUnmount(){
        let reactContent = document.getElementById('react-content');
        reactContent && reactContent.removeEventListener('scroll',this.reactContentScroll)
    }


    reactContentScroll = ()=>{
        let {getUserArticle} = this.props;
        let {userId} =this.props.match.params;
        let reactContent = document.getElementById('react-content');
        if(reactContent.scrollTop+document.body.clientHeight + 1 > reactContent.scrollHeight){//滚动到距底部100
            getUserArticle(userId);
        }
    }



    render(){
        let {userInfo,articles,updateUserHeadImg} = this.props;

        return(
            <div className="user-container">
                <UserInfo userInfo={userInfo} updateUserHeadImg={updateUserHeadImg}/>

                <div className="user-bottom">
                    <div className="left-panel">
                        {
                            articles.map((item,index)=>{
                                return (<Article key={index} article={item}/>)
                            })    
                        }
                    </div>
                    <div className="right-panel">
                        <Right />
                    </div>
                </div>

            </div>
        )
    }


}
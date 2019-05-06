import React,{Component} from 'react';
import {Icon} from 'antd';
import {Link} from 'react-router-dom';

export default class Right extends Component{



    render(){

        return(
            <div>
                <div className="follow">
                    <div className="follow-panel">
                        <h3>关注了</h3>
                        <h4><Link to={'/follow'}>0</Link></h4>
                    </div>
                    <div className="split"></div>
                    <div className="follow-panel">
                        <h3>关注者</h3>
                        <h4>0</h4>
                    </div>

                </div>

                <div className="user-opt">
                    <div className="opt-panel">
                    <Icon type="file-add" className="icon-write"/>
                       <br/>
                       <span>写文章</span>
                    </div>

                </div>

            </div>
        )
    }




}
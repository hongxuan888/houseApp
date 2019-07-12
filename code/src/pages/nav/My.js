import React, { Component } from 'react'
import { List } from 'antd-mobile'

import './my.css'

const Item = List.Item


export default class My extends Component {
    constructor() {
        super()
        this.state = {
            account:'登陆/注册',
            list: [
                { id: '10' },
                { id: '1', icon: 'icon_1', title: '我的积分' },
                { id: '2', icon: 'icon_2', title: '我的订阅' },
                { id: '3', icon: 'icon_3', title: '微信联系人' },
                { id: '11' },
                { id: '4', icon: 'icon_ji', title: '房贷计算器' },
                { id: '5', icon: 'icon_4', title: '我的房子' },
                { id: '12' },
                { id: '6', icon: 'icon_5', title: '我的看房记录' },
                { id: '7', icon: 'icon_6', title: '我的问答' },
                { id: '13' },
                { id: '8', icon: 'icon_7', title: '设置' },
                { id: '9', icon: 'icon_8', title: '意见反馈' },]
        }
    }
    render() {
        return (
            <div className='my'>
                {/* 头部信息 */}
                <div className='my_top'>
                    <div className='top'>
                        <img className='img_left' src={require('../../assets/images/icon_01 (1).png')} />
                        <div className='middle'>
                            <h2>{this.state.account}</h2>
                            <label>可以与经纪人发起聊天</label>
                        </div>
                        <img className='img_right' src={require('../../assets/font/icon_shezhi.png')} />
                    </div>
                    <div className='bottom'>
                        <div>
                            <div>0</div>
                            <div className='bottom_div'><img src={require('../../assets/font/icon_qianbao.png')} />钱包</div>
                        </div>
                        <div>
                            <div>0</div>
                            <div className='bottom_div'><img src={require('../../assets/font/icpn_youhui.png')} />优惠</div>
                        </div>
                        <div>
                            <div>0</div>
                            <div className='bottom_div'><img src={require('../../assets/font/icon_jifen.png')} />积分</div>
                        </div>
                    </div>
                </div>
                {/* 下方列表 */}
                <List>
                    {
                        this.state.list.map(obj => {
                            //如果有src就返回Item组件，没有就返回div
                            if (obj.icon) {
                                return <Item
                                    style={{height:'48px'}}
                                    key={obj.id}
                                    // 相当于src
                                    thumb={require('../../assets/font/' + obj.icon + '.png')}
                                    //箭头的指向
                                    arrow="horizontal"
                                    onClick={() => { }}
                                >{obj.title}</Item>
                            } else {
                                return <div key={obj.id} style={{height:'10px',backgroundColor:'#F4F4F4'}}></div>
                            }
                        })
                    }
                </List>
            </div>
        )
    }

    componentDidMount(){
        //判断
        if(localStorage.getItem('acc')){
            this.setState({
                account:localStorage.getItem('acc')
            })
        }
    }
}

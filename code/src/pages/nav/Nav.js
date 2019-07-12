import React, { Component } from 'react'

import { TabBar } from 'antd-mobile'

import Main from './Main'
import Footprint from './Footprint'
import My from './My'
import Cecall from './Cecall'

export default class Nav extends Component {
    constructor() {
        super()
        this.state = {
            selectedTab: 'main',

            list: [{ id: 'main', title: '首页', icon: 'icon_main', selectedIcon: 'icon_main_m' },
            { id: 'cecall', title: '微聊', icon: 'icon_cecall', selectedIcon: 'icon_cecall_c' },
            { id: 'foot', title: '足迹', icon: 'icon_foot', selectedIcon: 'icon_foot_f' },
            { id: 'my', title: '我的', icon: 'icon_my', selectedIcon: 'icon_my_m' },]

        };
    }
    render() {
        return (
            <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0 }}>
                {/* 底部导航部分 */}
                <TabBar
                    unselectedTintColor="#949494"  //默认的字体颜色
                    tintColor="#E60012"     //选中的字体颜色
                    barTintColor="white"    //背景颜色
                >
                    {
                        this.state.list.map(obj => <TabBar.Item
                            title={obj.title}
                            key={obj.id}
                            onPress={() => {
                                this.setState({
                                    selectedTab: obj.id,
                                });
                            }}
                            //默认展示的图片
                            icon={<div style={{
                                width: '22px',
                                height: '22px',

                                background: `url(${require('../../assets/images/' + obj.icon + '.png')}) center center /  21px 21px no-repeat`
                            }}
                            />
                            }
                            //点击时展示的图片
                            selectedIcon={<div style={{
                                width: '22px',
                                height: '22px',
                                background: `url(${require('../../assets/images/' + obj.selectedIcon + '.png')}) center center /  21px 21px no-repeat`
                            }}
                            />
                            }
                            //是否选中
                            selected={this.state.selectedTab === obj.id}
                        >
                            {this.renderContent(obj.id)}
                        </TabBar.Item>)
                    }
                </TabBar>
            </div>
        );
    }

    renderContent(pageText) {
        // console.log(this.state.selectedTab)
        switch(this.state.selectedTab){
            case 'main': return <Main/>
            case 'cecall': return <Cecall/>
            case 'foot': return <Footprint/>
            case 'my': return <My/>
        }
    }
}

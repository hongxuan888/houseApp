import React, { Component } from 'react'
//引入json数据
import city from '../../json/city.json'
// 引入better-scroll
import BScroll from 'better-scroll'
//引入css样式
import './selectcity.css'


export default class Selectcity extends Component {
    render() {
        return (
            <div className='selectCity'>
                {/* 左侧列表 */}
                <div className='left-list' style={{width:'95%', position: 'fixed',height:'100%',overflow:'auto'}}>
                    <ul className='connent' style={{padding:0}}>
                        {/* 热门城市 */}
                        <div className='hotCity'>
                            <h3>热门城市</h3>
                            <div className='list'>
                                {
                                    city.hotcity.map(obj => <div key={obj}>{obj}</div>)
                                }
                            </div>
                        </div>
                        {/* 其他城市 */}
                        <div className='elseCity'>
                            <h3>其他城市</h3>
                            {
                                city.City.map(obj => <div id={obj.code} key={obj.code}>
                                    {/* 标题 */}
                                    <p>{obj.code}</p>
                                    {/* 子节点 */}
                                    <div className='cityname'>
                                        {
                                            obj.cityList.map(name => <div key={name}>{name}</div>)
                                        }
                                    </div>

                                </div>)
                            }
                        </div>
                    </ul>
                </div>
                {/* 右边滑动栏 */}
                <div onTouchMove={this.touchMove.bind(this)} className='searchBox' style={{width:'5%'}}>
                    {
                        city.City.map(obj => <label className='s_city_cls'  onClick={this.clicklist.bind(this, obj.code)} key={obj.code}>{obj.code}</label>)
                        // city.City.map(obj => <label className='s_city_cls' key={obj.code}>{obj.code}</label>)
                    }
                </div>
            </div>

        )
    }
    // H5新增移动端事件： 监听的是手指按压屏幕后，连续移动
    touchMove(e){
        // console.log(e.touches[0].clientX)
        // console.log(e.touches[0].clientY)

        //elementFromPoint: 根据坐标点，获取当前坐标的元素对象
        let curElt = document.elementFromPoint(e.touches[0].clientX, e.touches[0].clientY)
        // console.log(curElt.innerHTML)   //当前对象的内容

        //只有在右侧列表范围内有效，超出无效
        if (curElt && curElt.className == 's_city_cls') {
            // console.log(curElt.innerHTML) //等于右侧的元素，才进行处理

            //让左侧面板滚动到指定DIV上
            this.leftScroll.scrollToElement(document.getElementById(curElt.innerHTML), 300)
        }
    }

    // 右边列表点击事件
    clicklist(val) {
        // console.log(val)
        //让左侧城市列表滚到相应的地方
        this.leftScroll.scrollToElement(document.getElementById(val), 300);
    }

    componentDidMount() {
        this.leftScroll = new BScroll('.left-list')
    }
}



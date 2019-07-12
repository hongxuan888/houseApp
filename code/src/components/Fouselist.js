

//公共组件部分
import React, { Component } from 'react'
//props:  key为obj 房产列表信息
export default class Fouselist extends Component {

    //默认参数（防止使用组件没有传参，如果没有传参页面就会炸）
    static defaultProps = {
        obj: {
            src: require('../assets/images/banner01.jpg'),
            name: '房产名称',
            type: '房产类型',
            point: '房产面积',
            price: '房产价格'
        }
    }

    render() {
        let { obj } = this.props
        return (
            <li>
                <img src={obj.src} />
                <div className='center'>
                    <h2>{obj.name}</h2>
                    <p>{obj.area}</p>
                    <label>{obj.type} {obj.point}平</label>
                </div>
                <div className='right'>{obj.price}/平</div>
            </li>
        )
    }
}

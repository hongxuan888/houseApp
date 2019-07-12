import React, { Component } from 'react'

//引入connect函数
import { connect } from 'react-redux'

//引入css
// import './footprint.css'
//引入公共组件
import Fouselist from '../../components/Fouselist'

class Footprint extends Component {
    render() {
        // let { historylist } =this.props.fouselist
        let { fouselist } =this.props
        return (
            <div className='guessWhatYouLike'>
                <h2 style={{display:fouselist.length == 0 ? 'block' : 'none'}}>亲，您还没有历史足迹哟！！！！！</h2>
                <h2 style={{display:fouselist.length !== 0 ? 'block' : 'none'}}>历史记录</h2>
                <ul>
                    {fouselist.map(obj => <Fouselist obj={obj} key={obj.id}></Fouselist>)}
                </ul>
            </div>
        )
    }
}


export default connect((state) => {
    return {
        fouselist: state.fouselist
    }
})(Footprint)

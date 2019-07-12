import React, { Component } from 'react'


//注入数据函数connect
import { connect } from 'react-redux'
//connect函数可以把store中的数据注入到当前组件中

class Search extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                搜索页面
                <h1 onClick = { this.clicktitle.bind(this) }>{this.props.name}</h1>
            </div>
        )
    }

    clicktitle(){
        this.props.dispatch({
            type:'changename',
            name:'李四'
        })
    }
}

//注入数据的固定用法   
//connect接收的第一个函数是注入数据的函数
//第二个参数固定是组件的类名
export default connect((state) => {
    //state === store.getState()
    //return的值才会被注入到当前组件中
    return {
        name: state.name,
    }
})(Search)







/* 
()() 两个括号是闭包的用法  调用一个函数，得到返回值，然后再调用一次返回值

例如：function  a(){
    return function(){

    }
}

调用a函数里面的函数 ===> let b =a(),  b()  ===> a()()

*/
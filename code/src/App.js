import React, { Component } from 'react'

//router部分
import { HashRouter, Switch, Route } from 'react-router-dom'
// 引入组件
import Login from './pages/Login'
import Reg from './pages/Reg'
import Eorr from './pages/Eorr'
import Nav from './pages/nav/Nav'
import Map from './pages/nav/Map'
import Search from './pages/nav/Search'
import Selectcity from './pages/nav/Selectcity'

//redux部分
//引入注入函数store 和 Provider
import store from './store'
import { Provider } from 'react-redux'  //注意包！！是react-redux
//Provider是一个数据容器，必须绑定一个store属性
//使用
//<Provider store={store}>
//      只要使Provider内的子组件（子组件不管多少层）。都可以直接共享store    
//</Provider>


export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <HashRouter>
                    <Switch>
                        <Route exact path='/' component={Login}></Route>
                        <Route path='/reg' component={Reg}></Route>
                        <Route path='/reg' component={Reg}></Route>
                        <Route path='/nav' component={Nav}></Route>
                        <Route path='/map' component={Map}></Route>
                        <Route path='/search' component={Search}></Route>
                        <Route path='/selectcity' component={Selectcity}></Route>
                        {/* 错误页面 */}
                        <Route component={Eorr}></Route>
                    </Switch>
                </HashRouter>
            </Provider>
        )
    }
}

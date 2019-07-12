import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Flex, InputItem, WingBlank, WhiteSpace, Button } from 'antd-mobile'

//引入登陆请求
import { login } from '../apis/apis'

let footerDiv = {
    position:'absolute',
    bottom:'20px',
    left:'18%'
}

export default class Login extends Component {

    constructor() {
        super()
        this.state = {
            acc: '',
            pwd: ''
        }
    }

    render() {
        return (
            <div>
                <Flex justify="center">
                    <img style={{ marginTop: '100px' }} src={require('../assets/images/logo.png')} />
                </Flex>
                {/* 输入框 */}
                <WhiteSpace size="lg" />
                <WhiteSpace size="lg" />
                <WingBlank size="lg">
                    <InputItem
                        // {...getFieldProps('inputtitle2')}
                        placeholder="请输入用户名"
                        value={this.state.acc}
                        onChange={val => this.setState({ acc: val })}
                    >
                        <div style={{ backgroundImage: `url(${require('../assets/font/icon-acc.png')})`, backgroundSize: 'cover', height: '22px', width: '22px' }} />
                    </InputItem>
                    <InputItem
                        // {...getFieldProps('inputtitle2')}
                        placeholder="请输入密码"
                        value={this.state.pwd}
                        onChange={val => this.setState({ pwd: val })}
                    >
                        <div style={{ backgroundImage: `url(${require('../assets/font/icon-pwd.png')})`, backgroundSize: 'cover', height: '22px', width: '22px' }} />
                    </InputItem>
                    {/* 按钮 */}
                    <WhiteSpace size="lg" />
                    <Button type="warning" onClick={this.clickLogin.bind(this)}>登陆</Button>
                    <WhiteSpace size="sm" />
                    <Flex justify="between">
                        <Link to='/'>手机快速注册</Link>
                        <Link to='/'>忘记密码?</Link>
                    </Flex>
                    <Flex justify="center" style={ footerDiv }>
                        <Link to={'/'} style={ { color:'#ccc'}}>登陆/注册即代表同意《中环地产用户协议》</Link>
                    </Flex>
                </WingBlank>
            </div>
        )
    }


    async clickLogin(){
        let res = await login(this.state.acc, this.state.pwd)
        if(res.data === 'ok'){
            //把用户名保存到本地存储中,持久化保存数据
            localStorage.setItem('acc',this.state.acc)
            //跳转到首页
            window.location.href = '#/nav'
        } else {
            alert('亲，请核对账号和密码')
        }
    }
}

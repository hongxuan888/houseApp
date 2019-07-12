import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { InputItem, Flex, WingBlank, Checkbox, Button, WhiteSpace } from 'antd-mobile'

const AgreeItem = Checkbox.AgreeItem;


export default class Reg extends Component {
    render() {
        return (
            <div>
                <WingBlank size='lg' style={{ marginTop: '30px' }}>
                    <InputItem
                        // {...getFieldProps('input3')}
                        placeholder="请输入手机号"
                        maxLength='100px'
                    />
                    <InputItem
                        // {...getFieldProps('input3')}
                        placeholder="请输入密码"
                    />
                    <InputItem
                        // {...getFieldProps('input3')}
                        placeholder="请输入验证码"
                    />

                    <Flex>
                        <Flex.Item>
                            <AgreeItem data-seed="logId" onChange={e => console.log('checkbox', e)}>
                                我已同意<Link to='/'>《协议服务》</Link>及<Link to='/'>《隐私权政策》</Link>
                            </AgreeItem>
                        </Flex.Item>
                    </Flex>
                    {/* 按钮 */}
                    <WhiteSpace size="lg" />
                    <Button type="warning">注册</Button>
                    <WhiteSpace size="sm" />
                    <Link to='/'>已有账号</Link>
                </WingBlank>
            </div>
        )
    }
}

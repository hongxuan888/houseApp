
//引入axios
import axios from 'axios'
import qs from 'qs'

//定义路劲
const IP = 'http://127.0.0.1:80/'

//发送登陆请求
export function login(acc, pwd){
    return axios.post(IP+'login.php', qs.stringify({acc, pwd}))
}

//发送房产列表请求
export function getfouselist(){
    return axios.get(IP+'gethouselist.php')
}
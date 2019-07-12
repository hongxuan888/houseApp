

//store  是redux的核心应用，是一个状态容器，可以用来保存交互状态
         //store 只能有一个

//action 通知，发出一个通知是改变store中值的唯一方式（不区分同步异步） 
//reducer 计算者，接受通知，计算新的状态（改变状态）  一般有很多个reducer，便于维护就使用combineReducers


//引入redux
import { createStore } from 'redux'


//使用redux，    函数（reducer）中参数1 state： 表示当前store中存放的值   参数2 action:  表示本次通知的对象
const store = createStore(function(state='张三', action){

    switch(action.type){
        case 'test' : return '李四'
        default : return state
    }
}) 


//action其实就是一个对象，必须有一个属性type，表示本次通知的事情，必须唯一
//定义通知
let a = {
    type:'test'
}
//dispatch是发出通知的唯一方式
//发出通知
store.dispatch(a)
console.log(store)



//暴露store
export default store
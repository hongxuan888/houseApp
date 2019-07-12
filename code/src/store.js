

//store  是redux的核心应用，是一个状态容器，可以用来保存交互状态
         //store 只能有一个

//action 通知，发出一个通知是改变store中值的唯一方式（不区分同步异步） 
//reducer 计算者，接受通知，计算新的状态（改变状态）     一般有很多个reducer，便于维护就使用combineReducers



//引入redux
import { createStore, combineReducers } from 'redux'

// //创建小的reducer
//name
function name(state ='张三', action){
    switch(action.type){
        case 'changename' : return action.name
        default: return state
    }   
}

//sex
function sex(state=20, action){
    switch(action.type){
        case 'test' : return state + action.num
        default : return state
    }
}
//age
function age(state="男", action){
    switch(action.type){
        default : return state
    }
}

//添加房产列表
function fouselist(state=[], action){
    //遍历
    for(let i=0; i< state.length; i++){
        //判断（如果数组里已经有数据了，那么就删除老数据，再添加新数据）
        if(state[i].id == action.obj.id){
            state.splice(i,1)
            break
        }
    }
    switch(action.type){
        case 'addfocuse': return [action.obj,...state]   //扩展运算符的运用
        default : return state
    }
}

//把小的reducer集合成大的reducer
let reducers = combineReducers({
    name,
    age,
    sex,
    fouselist
})



//使用redux
const store = createStore(reducers)
// console.log(store)
let a = {
    type:'test',
    num :1
}
store.dispatch(a)



//暴露store
export default store

import {combineReducers} from 'redux'

// 模块reducer引入
import homeRoot from '../pages/home/root/store'
import messageRoot from '../pages/message/root/store'
import mineRoot from '../pages/mine/root/store'
import shopsRoot from '../pages/shops/root/store'


export default combineReducers({
    homeRoot,
})
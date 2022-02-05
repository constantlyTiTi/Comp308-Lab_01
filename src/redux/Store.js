import { configureStore } from '@reduxjs/toolkit'
import  userReducer  from '../redux/UserSlice'
import  courseReducer  from '../redux/EvaluateSlice'

export default configureStore({
    reducer:{
        user:userReducer,
        courseEve:courseReducer
    }
})
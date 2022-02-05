import { createSlice } from '@reduxjs/toolkit'

export const evaSlice = createSlice({
    name:'courseEvaInfor',
    initialState:{
        courseCode:"",
        courseName:"",
        comment:"",
        favoriteAssignment:"",
        favoriteTopic:""
    },

    reducers: {
        mapCourseEva :(state, action) =>{
            state.courseCode = action.payload.courseCode
            state.courseName = action.payload.courseName
            state.comment = action.payload.comment
            state.favoriteAssignment = action.payload.favoriteAssignment
            state.favoriteTopic = action.payload.favoriteTopic
        }
    }
})

export const {mapCourseEva} = evaSlice.actions
export default evaSlice.reducer
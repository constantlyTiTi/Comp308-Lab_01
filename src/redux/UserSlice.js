import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name:'userInfor',
    initialState:{
        email:""
    },

    reducers: {
        mapUser :(state, action) =>{
            state.email = action.payload.email
        }
    }
})

export const {mapUser} = userSlice.actions
export default userSlice.reducer
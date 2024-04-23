import { createSlice } from '@reduxjs/toolkit'

export const accountSlice = createSlice({
    name:"account",
    initialState:{
        isLoggedIn:false,
        token:null,
        userId:null,
    },
    reducers:{
        logInAction: (state, action) => {
            state.isLoggedIn = true
            state.token = action.payload.token
            state.userId = action.payload.id
        },

        logOutAction: (state, action) => {
            state.isLoggedIn = false
            state.token = null
            state.userId = null
        },
    },
})

export const { logInAction, logOutAction } = accountSlice.actions
export default accountSlice.reducer
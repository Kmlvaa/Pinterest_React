// import { createSlice } from "@reduxjs/toolkit";

// export const accountSlice = createSlice({
//     name: "account",
//     initialState: {
//         isLoggedIn : false,
//         token: null,
//         userId: null
//     },
//     reducers: {
//         logInAction: (state, action) => {
//             state.isLoggedIn = !state.isLoggedIn,
//             state.token = action.payload.token,
//             state.userId = action.payload.userId
//         },
//         logOutAction: (state, action) => {
//             state.isLoggedIn = !state.isLoggedIn,
//             state.token = null,
//             state.userId = null
//         }
//     }
// })

// export const {logInAction, logOutAction} = accountSlice.actions;
// export default accountSlice.reducer
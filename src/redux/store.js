import { configureStore } from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { combineReducers } from 'redux'
import AccountSlice from './accountSlice'

const reducers = combineReducers({
    account: AccountSlice
});

const persistConfig = {
    key: "root",
    storage,
    whitelist:["account"]
} 

const persistedReducer = persistReducer(persistConfig ,reducers);

export default configureStore({
    reducer: persistedReducer,
});
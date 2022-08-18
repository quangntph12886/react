import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cardSlice from "./slice/card.slice";
import cardReducer from "./slice/card.slice"
import userSlice from "./slice/user.slice";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    storage,
    whitelist:["user"]
  }
const rootReducer = combineReducers({
    card: cardSlice,
    user: userSlice
})
  
const persistedReducer = persistReducer(persistConfig, rootReducer)
export const store = configureStore({
    reducer: persistedReducer
})
export const persistor = persistStore(store)
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
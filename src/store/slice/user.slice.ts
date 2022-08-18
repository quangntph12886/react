import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import IUser from "../../model/auth"
import { signin } from '../../api/auth'

interface AuthState {
    isLogin: Boolean,
    userInfo: {
        accessToken: string,
        user: IUser
    } | undefined
}

interface IUserLogin{
    email:string,
    password: string
}

export const userLogin = createAsyncThunk(
    'users/login',
    async (userLogin: IUserLogin) => {
      const response = await signin(userLogin)
      return response
    }
  )

const initialState: AuthState = {
    isLogin: false,
    userInfo:  undefined
};


export const AuthSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(userLogin.fulfilled, (state, action) => {
            state.userInfo = action.payload.data
            state.isLogin = true
        })
      },
})


export default AuthSlice.reducer
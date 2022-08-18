import { Button, Checkbox, Form, Input } from 'antd';
import React, { useEffect } from 'react';
import logo from "../../assets/logo.png"
import "./signup.style.css"
import { useForm } from "react-hook-form";
import { signin, signup } from '../../api/auth';
import { Navigate,useNavigate } from 'react-router-dom';
import {useDispatch,useSelector} from "react-redux"
import { AppDispatch, RootState } from '../../store/store';
import { userLogin } from '../../store/slice/user.slice';

type FormData = {
    email: string;
    password: string;
};
export const Signin = () => {
    const dispatch: AppDispatch = useDispatch()

    const {isLogin,userInfo} = useSelector((state:RootState) => state.user)

    const { register, setValue, handleSubmit, formState: { errors } } = useForm<FormData>();
    
    const navigate = useNavigate()

    useEffect(() => {
        if(isLogin){
            if(userInfo?.user.id === 1){
                navigate("/admin/product/list")
            }else{
                navigate("/home")
            }        
        }
    }, [isLogin,userInfo])

    const onSubmit = handleSubmit(data => {
        dispatch(userLogin(data))
    
    });

    return (
        <div className=" signup">
            <div className="signup-container">
                <div className="form-group">
                    <form onSubmit={onSubmit}>
                        <p className="email">Email</p>
                        <input {...register("email")} className="form-control" type="text" />
                        <p className="password">Password</p>
                        <input {...register("password")} className="form-control" type="password" />
                        <p></p>
                        <button type="submit" onClick={() => { }} className="btn">Dang nhap</button>
                    </form>
                </div>
                <div className="right">
                    <img className="logo" src={logo} alt="" />
                </div>
            </div>
        </div>
    )
}

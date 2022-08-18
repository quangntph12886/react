import { Button, Checkbox, Form, Input } from 'antd';
import React from 'react';
import logo from "../../assets/logo.png"
import "./signup.style.css"
import { useForm } from "react-hook-form";
import { signup } from '../../api/auth';
import { Navigate,useNavigate } from 'react-router-dom';


type FormData = {
    email: string;
    phone: string;
    password: string;
};
export const Signup = () => {
    const { register, setValue, handleSubmit, formState: { errors } } = useForm<FormData>();
    const navigate = useNavigate()
    const onSubmit = handleSubmit(data => {
        signup(data)
        navigate("/signin")
    });

    return (
        <div className=" signup">
            <div className="signup-container">
                <div className="form-group">
                    <form onSubmit={onSubmit}>
                        <p className="email">Email</p>
                        <input {...register("email")} className="form-control" type="text" />
                        <p className="phone">So dien thoai</p>
                        <input {...register("phone")} className="form-control" type="number" />
                        <p className="password">Password</p>
                        <input {...register("password")} className="form-control" type="password" />
                        <p></p>
                        <button type="submit" onClick={() => { }} className="btn">Dang ky</button>
                    </form>
                </div>
                <div className="right">
                    <img className="logo" src={logo} alt="" />
                </div>
            </div>
        </div>
    )
}

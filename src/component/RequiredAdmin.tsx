import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate, Navigate } from 'react-router-dom'
import { RootState } from '../store/store'
const RequiredAdmin = ({children} : {children:any}) => {
    const {isLogin, userInfo} = useSelector((state:RootState) => state.user)
    if(isLogin && userInfo?.user.id === 1){
        return children
    }

    return <Navigate to="/signin"/>
}

export default RequiredAdmin

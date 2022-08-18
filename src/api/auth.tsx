import instance from './instance';

export const signup = (data:any)=>{
    const url = `/users/register`;
    return instance.post(url,data);
}

export const signin = (data:any)=>{
    const url = `/login`;
    return instance.post(url,data);
}
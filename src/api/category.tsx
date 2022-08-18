import instance from './instance';

export const listCategory = () => {
    const url = `/categories`;
    return instance.get(url)
}
export const add = (data)=>{
    const url = `/categories`;
    return instance.post(url,data);
}
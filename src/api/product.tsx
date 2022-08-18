import instance from './instance';

export const list = () => {
    const url = `/products?_expand=category`;
    return instance.get(url)
}
export const remove = (id) =>{
    const url = `/products/${id}`;
    const token = localStorage.getItem("token")
    return instance.delete(url,{
        headers:{
            Authorization: `bearer ${token}` 
        }
    });
}
export const add = (data)=>{
    const url = `/products`;
    return instance.post(url,data);
}
export const update = (id,data) =>{
    const url = `/products/${id}`;
    return instance.patch(url,data);
}
export const getProductById = (id) =>{
    const url = `/products/${id}`;
    return instance.get(url)
}
export const getRelatedProduct = (id) =>{
    const url = `/products?categoryId=${id}`;
    return instance.get(url)
}
export const getProductShop = () =>{
    const url = `/products?isVisible=true`;
    return instance.get(url)
}
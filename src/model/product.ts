interface Icategory{
  id:number;
  name:string;

}
export default interface IProduct {
    id: number;
    name: string;
    price: number;
    saleOffPrice: number;
    image:string;
    desc: string;
    longDesc: string;
    categoryId: number;
    isVisible:boolean;
    category?:Icategory
  }

import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import IProduct from '../../model/product';

export interface CardState {
    card: ICardItem[],
    amount:number,
    total:number
}
export interface ICardItem{
    product:IProduct;
    quantity:number
}

const initialState: CardState = {
    card:[],
    amount:0,
    total:0
};


export const counterSlice = createSlice({
    name: 'card',
    initialState,
    reducers: {
        addCard: (state,action:PayloadAction<ICardItem>)=>{
            const index = state.card.findIndex(item => item.product.id === action.payload.product.id)
            if (index >= 0){
                state.card[index].quantity += action.payload.quantity
            }else{
                state.card = [...state.card, action.payload]
            }
            state.amount += action.payload.quantity
            state.total += action.payload.product.price * state.amount
        },
        increase:(state,action:PayloadAction<ICardItem>) =>{
            const index = state.card.findIndex(item => item.product.id === action.payload.product.id)
            if (index >= 0){
                state.card[index].quantity += action.payload.quantity
            }else{
                state.card = [...state.card, action.payload]
            }
            state.amount += action.payload.quantity
            state.total += action.payload.product.price * state.amount
        },
        decrease:(state,action:PayloadAction<ICardItem>) =>{
            const index = state.card.findIndex(item => item.product.id === action.payload.product.id)
            if (index >= 0){
                state.card[index].quantity -= 1
            }else{
                state.card = [...state.card, action.payload]
            }
            state.amount -= action.payload.quantity
            state.total -= action.payload.product.price * state.amount
        }
    },
})

export const { addCard,increase,decrease } = counterSlice.actions


export default counterSlice.reducer
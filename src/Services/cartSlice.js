

import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name:'cart',
    initialState:{
        items:[]
    },
    reducers:{
        addToCart(state,action){
            let item=state.items.find(item=> item.id===action.payload.id);
            if(item){
                item.quantity++;
            }else{
                item={
                    ...action.payload,quantity:1
                }
                state.items.push(item);
            }
        },
        removeFromCart(state,action){
            let item=state.items.find(item=>item.id===action.payload.id)
            if(item.quantity>1){
                item.quantity--;
            }
            else{
                state.items=state.items(item=>item.id!==action.payload.id)
            }
        },
        deleteFromCart(state,action){
            state.items=state.items.filter(item => item.id !== action.payload.id)
        }
    }

    
})

export const { addToCart, removeFromCart,deleteFromCart}= cartSlice.actions;

export default cartSlice.reducer;
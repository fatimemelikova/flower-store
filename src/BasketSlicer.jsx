import { createSlice } from "@reduxjs/toolkit";
import { useEffect } from "react";

const items = JSON.parse(localStorage.getItem("basket"))


const initialState = {
    basketItems : items ? items :  [],
    openCart : false

}

export const BasketSlicer = createSlice({
    name : "basket",
    initialState,
    reducers :{ 
        changeOpencart : (state)=>{
            state.openCart=!state.openCart
        },
        addItemToBasket : (state , action)=>{
         const item =  state.basketItems.find((item)=>item.id==action.payload.id)
         if(item){
            if(item.count<item.stok){
            item.count++

            }
         }
         else{
            state.basketItems.push({...action.payload , count : 1})
         }
        },
        increasecount :(state , action)=>{
            const item = state.basketItems.find((item)=>item.id==action.payload)
            if(item){
                if(item.count < item.stok){
                item.count++

                }
            }
        },
        decreasecount :(state , action)=>{
            const item = state.basketItems.find((item)=>item.id==action.payload)
            if(item){
                if(item.count>0){
                item.count=item.count-1

                }
            }
        },
        deleteItem : (state , action)=>{
           state.basketItems = state.basketItems.filter((item)=>item.id!==action.payload)
        }

    }
})

export const {changeOpencart , addItemToBasket , increasecount , decreasecount , deleteItem } = BasketSlicer.actions

export default BasketSlicer.reducer
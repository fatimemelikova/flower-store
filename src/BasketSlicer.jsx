import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    basketItems = [],
    openCart : false

}
export const BasketSlicer = createSlice({
    name : "basket",
    initialState,
    reducers :{ 

    }
})

export const {  } = BasketSlicer.actions

export default BasketSlicer.reducer
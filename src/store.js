import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Services/cartSlice"
 export const store=configureStore({
    reducer:{cart:cartReducer}
})
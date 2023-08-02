import { configureStore } from "@reduxjs/toolkit";
import { ingredientsSlice } from "./ingredients.slice";
import { ordersSlice } from "./orders.slice";


export const store = configureStore({
    reducer: {
        ingredients: ingredientsSlice.reducer,
        orders: ordersSlice.reducer
    },
    devTools: true
})
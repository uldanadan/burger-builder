import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apiBurger } from "../api/apiBurger";

const namespace = 'orders'

export const getOrders = createAsyncThunk(
    `${namespace}/getOrders`,
    async () => {
        return await apiBurger.getOrders()
    }
)

export const ordersSlice = createSlice({
    name: namespace,
    initialState: {
        orders: [],
        loading: false
    },
    extraReducers: builder => {
        builder
        .addCase(getOrders.pending, (state) => {
            state.loading = true
        })
        .addCase(getOrders.rejected, (state) => {
            state.loading = false
        })
        .addCase(getOrders.fulfilled, (state, action) => {
            state.loading = false
            state.orders = action.payload
        })
    }
})

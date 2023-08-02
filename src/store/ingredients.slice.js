import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apiBurger } from "../api/apiBurger";

const namespace = 'ingredients'

export const getIngredients = createAsyncThunk(
    `${namespace}/getIngredients`,
    async () => {
        return await apiBurger.getIngredients()
    }
)

export const addNewIngredient = createAsyncThunk(
    `${namespace}/addIngredient`,
    async (ingredient) => {
        await apiBurger.addIngredient(ingredient)
    }
)

export const updateIngredient = createAsyncThunk(
    `${namespace}/updateIngredient`,
    async (data, {dispatch}) => {
        await apiBurger.updateIngredient(data.id, data.ingredient)
        dispatch(getIngredients())
    }
)

export const ingredientsSlice = createSlice({
    name: namespace,
    initialState: {
        ingredients: {},
        basket: {},
        totalPrice: 200,
        loading: false,
        prices: {},
        styles: {}
    },
    reducers: {
        addIngredient(state, action) {
            try {
                state.basket = {
                    ...state.basket, 
                    [action.payload]: state.basket[action.payload] + 1 || 1
                }
                state.totalPrice += parseInt(state.prices[action.payload])
            } catch (err) {
                console.log(err);
            }
        },
        removeIngredient(state, action) {
            try {
                state.basket = {
                    ...state.basket, 
                    [action.payload]: state.basket[action.payload] > 0 
                    ? state.basket[action.payload] - 1 
                    : 0
                }
                state.totalPrice -= state.prices[action.payload]
            } catch (err) {
                console.log(err)
            }
        }
    },
    extraReducers: builder => {
        builder
        .addCase(getIngredients.pending, (state) => {
            state.loading = true
        })
        .addCase(getIngredients.rejected, (state) => {
            state.loading = false
        })
        .addCase(getIngredients.fulfilled, (state, action) => {
            state.loading = false
            state.ingredients = action.payload
            action.payload && Object.keys(action.payload).forEach(key => {
                state.basket[action.payload[key].name] = 0
            })
            action.payload && Object.keys(action.payload).forEach(key => {
                state.prices[action.payload[key].name] = action.payload[key].price
            })
            action.payload && Object.keys(action.payload).forEach(key => {
                state.styles[action.payload[key].name] = action.payload[key].style
            })
        })
        .addCase(addNewIngredient.pending, (state) => {
            state.loading = true
        })
        .addCase(addNewIngredient.rejected, (state) => {
            state.loading = false
        })
        .addCase(addNewIngredient.fulfilled, (state) => {
            state.loading = false
        })
        .addCase(updateIngredient.pending, (state) => {
            state.loading = true
        })
        .addCase(updateIngredient.rejected, (state) => {
            state.loading = false
        })
        .addCase(updateIngredient.fulfilled, (state) => {
            state.loading = false
        })
    }
})

export const {
    addIngredient,
    removeIngredient
} = ingredientsSlice.actions
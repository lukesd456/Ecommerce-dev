import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    title: 'Intencion de compra',
    items: []
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
        addItem: (state, action) => {
            state.items = [...state.items, action.payload]
        }
    }
})

export const { addItem } = cartSlice.actions

export default cartSlice.reducer
import { createSlice } from "@reduxjs/toolkit";

const initialState = []

export const listproductSlice = createSlice({
    name: 'listproduct',
    initialState: initialState,
    reducers: {
    }
})

// export const { addProduct, addTag, deleteTag } = listproductSlice.actions

export default listproductSlice.reducer
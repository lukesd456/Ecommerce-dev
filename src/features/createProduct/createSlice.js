import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    titulo: undefined,
    descripcion: undefined,
    tags: [],
    precio: 0,
}

export const productSlice = createSlice({
    name: 'product',
    initialState: initialState,
    reducers: {
        addProduct: (state, action) => {
            state.titulo = action.payload.titulo;
            state.descripcion=action.payload.descripcion;
            state.precio=action.payload.precio
        },
        addTag: (state, action) => {
            state.tags=[...state.tags, action.payload]
        },
        deleteTag: (state,action) => {
            state.tags=action.payload
        }
    }
})

export const { addProduct, addTag, deleteTag } = productSlice.actions

export default productSlice.reducer
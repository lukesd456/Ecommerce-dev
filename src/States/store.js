import {configureStore} from '@reduxjs/toolkit'

import cartReducer from '../features/cart/cartSlice'
import createReducer from '../features/createProduct/createSlice'
import listproductReducer  from '../features/Products/productSlice'

export const store = configureStore ({
    reducer: {
        cart: cartReducer,
        product: createReducer,
        listproduct: listproductReducer
    },
})
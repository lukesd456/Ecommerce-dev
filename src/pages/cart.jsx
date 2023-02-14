import { useRef } from "react"
import { useSelector, useDispatch } from 'react-redux'

import { addItem } from "../features/cart/cartSlice"

import uuid from "react-uuid"

function Cart() {
    const dispatch = useDispatch()
    const carrito = useSelector(state=>state.cart)
    const title = useRef()
    const precio = useRef()

    return (
        <div>
            <input ref={title} type='text'></input>
            <input ref={precio} type='text'></input>
            <button onClick={()=>dispatch(addItem({id: uuid(),titulo: title.current.value, price: precio.current.value}))} >Añadir Item</button>
            {carrito.items.map((e)=>(<p key={e.id}>{e.titulo}</p>))}
        </div>
    )
}

export default Cart
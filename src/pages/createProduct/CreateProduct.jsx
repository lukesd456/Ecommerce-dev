import { useSelector, useDispatch } from "react-redux"
import Tags from "./Tags"
import { addProduct } from "../../features/createProduct/createSlice"
import './style.css'

export default function CreateProduct() {
    const dispatch = useDispatch()
    const product = useSelector(state=>state.product)
    const handleProduct = (e) => {
        const Listitem = {...product,[e.target.name]:e.target.value}
        dispatch(addProduct(Listitem))
    }

    const postData = async (obj) => {
        const response = await fetch('/data/', {
            method: 'POST',
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(obj)
        })
        const jsonResponse = await response.json()
    
        console.log(jsonResponse)
    }
    

    return (
    <div className="Create">
        <h1>Crear Producto</h1>
        <form onSubmit={(e)=>e.preventDefault()}>
            <input placeholder="Nombre del producto" type='text' onChange={e=>handleProduct(e)} name="titulo" ></input>
            <input placeholder="Descripcion del producto" onChange={e=>handleProduct(e)} type='text' name="descripcion" ></input>
            <Tags />
            <input placeholder="Añade el precio" onChange={e=>handleProduct(e)} type='number' name="precio"></input>
            <button onClick={()=>postData(product)} >Enviar producto</button>
        </form>
    </div>
  )
}

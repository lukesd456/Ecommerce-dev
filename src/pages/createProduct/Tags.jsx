import { useRef } from "react"
import { useSelector, useDispatch } from "react-redux"
import uuid from "react-uuid"
import { addTag, deleteTag } from "../../features/createProduct/createSlice"


export default function Tags() {
    const dispatch = useDispatch()
    const allTags = useSelector(state=>state.product.tags)

    const tagInput = useRef()
    const handleTags = () => {
        const item = tagInput.current.value
        dispatch(addTag({tag: item, idTag: uuid()}))
    }

    const handleTagsDelete = (id) => {
        const listTags = allTags.filter((e)=>e.idTag!==id)
        dispatch(deleteTag(listTags))
    }

    return (
    <div>
        <input placeholder="Nombre de etiqueta" ref={tagInput} name='tag' type='text'></input>
        <button onClick={()=>handleTags()}>Añadir Etiqueta</button>
        <div>
            {allTags.map((e)=>(
                <div key={uuid()}>
                    <p>{e.tag}</p>
                    <button onClick={()=>handleTagsDelete(e.idTag)}>Eliminar etiqueta</button>
                </div>
            ))}
        </div>
    </div>
  )
}

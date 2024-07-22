import { useEffect,useState } from "react"
import ItemList from "./ItemList.jsx"
import { useParams } from "react-router-dom"
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/config";

const ItemListContainer = () => {
    const [productos, setProductos] = useState([])
    const [titulo, setTitulo] = useState([])
    const categoria = useParams().categoria

    useEffect(() => {
        const productosRef = collection(db, "productos");
        const q = categoria ? query(productosRef, where("categoria", "==", categoria)) : productosRef;

        getDocs(q)
            .then((resp) => {

            if(categoria) {
                setTitulo("Productos - " + categoria)
            } else {
                setTitulo("Productos")
            }

            setProductos(
                resp.docs.map((doc) => {
                    return { ...doc.data(), id: doc.id }
                    })
                )
            })
}, [categoria])

return (
    <ItemList productos={productos} titulo={titulo}/>
    )
}

export default ItemListContainer

import { useEffect,useState } from "react"
import ItemList from "./ItemList.jsx"
import { useParams } from "react-router-dom"
function ItemListContainer() {
    const [productos, setProductos] = useState([])
    const [titulo, setTitulo] = useState([])
    const categoria = useParams().categoria

    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then((res) => {
                return res.json()
            })
            .then((data) => {
                if(categoria) {
                    setProductos(data.products.filter((prod) => prod.category===categoria))
                    setTitulo("Productos - " + categoria)
                } else {
                    setProductos(data.products)
                    setTitulo("Productos")
                }
            })
    }, [categoria])

    return (
        <ItemList productos={productos} titulo={titulo}/>
        )
}

export default ItemListContainer

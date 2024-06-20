import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "./ItemDetail"

function ItemDetailContainer() {
    const [item, setItem] = useState([])
    const [titulo, setTitulo] = useState([])
    const id = useParams().id
    console.log(id)

    useEffect(() => {
        fetch('https://dummyjson.com/products/' + id)
            .then(res => {
                return res.json()
            })
            .then(data => {
                setItem(data)
                console.log(item)
                if(id) {
                    setTitulo("Producto - " + data.title)
                } else {
                    setTitulo("Producto Sin Stock")
                }
            })
    }, [id])

    return (
        <section className="grid grid-cols-1 gap-4">
            <h1 className="text-2xl font-bold">{titulo}</h1>
            <h2 className="text-2xl font-bold">{item.description}</h2>
            <p className="text-2xl text-blue-800">${item.price}</p>
            <p className="text-2xl font-bold text-blue-800">Stock {item.stock}</p>
            {/* <img src={item.images[0]} alt={item.title} className="object-contain aspect-square w-2/3 h-2/3" /> */}
        </section>

        //  <ItemDetail producto={item} titulo={titulo} />
        )
}

export default ItemDetailContainer
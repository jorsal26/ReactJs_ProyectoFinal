import { useEffect,useState } from "react"
import OrderList from "./OrderList.jsx"
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";

const ItemOrdersContainer = () => {
    const [pedidos, setPedidos] = useState([])
    const [titulo, setTitulo] = useState([])

    useEffect(() => {
        const pedidosRef = collection(db, "pedidos");

        getDocs(pedidosRef)
            .then((resp) => {

            setTitulo("Pedidos")

            setPedidos(
                resp.docs.map((doc) => {
                    return { ...doc.data(), id: doc.id }
                    })
                )
            })
}, [])

return (
        <OrderList pedidos={pedidos} titulo={titulo}/>
    )
}

export default ItemOrdersContainer

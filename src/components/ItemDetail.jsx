import { useContext, useState } from "react";
import ItemCount from "./ItemCount";
import { CartContext } from "../context/CartContext";

function ItemDetail({item, titulo}) {

    const { carrito, agregarAlCarrito } = useContext(CartContext);

    const [cantidad, setCantidad] = useState(1);

    const handleRestar = () => {
        cantidad > 1 && setCantidad(cantidad - 1)
    }

    const handleSumar = () => {
        cantidad < item.stock && setCantidad(cantidad + 1)
    }

    return (
        <section className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(300px,1fr))]">
            <article className="p-4 text-black transition-all bg-white rounded-md shadow-xl">
                <h1 className="text-2xl  text-blue-800 font-bold">{item.nombre}</h1>
                <img src={`/${item.imagen}`} alt={item.nombre} />
                <h2 className="text-2xl font-bold">{item.descripcion}</h2>
                <h3 className="text-2xl">Categoria: {(item.categoria)}</h3>
                <p className="text-2xl text-green-600">${item.precio}</p>
                <p className="text-2xl font-bold text-blue-800">Stock {item.stock}</p>
                    <div className="p-4 text-black transition-all bg-gray-500 rounded-md">
                        <ItemCount
                        cantidad={cantidad}
                        handleSumar={handleSumar}
                        handleRestar={handleRestar}
                        handleAgregar={() => { agregarAlCarrito(item, cantidad) }}
                        />
                    </div>
            </article>
        </section>
    )
}

export default ItemDetail

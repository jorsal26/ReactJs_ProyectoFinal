import { Link } from "react-router-dom"
import React from "react"

function Item({producto, indice}) {
    return (
        <section className="grid gap-10 grid-cols-[repeat(auto-fill,minmax(200px,1fr))]">
            <article className="p-4 text-black transition-all bg-white rounded-md shadow-xl hover:scale-105">
                <img src={`./src/images/${producto.imagen}`} alt={producto.nombre} className="object-contain aspect-square" />
                <h2 className="font-bold">{producto.nombre}</h2>
                <p className="text-green-400 font-bold" >${producto.precio}</p>
                <Link to={`/item/${producto.id}`} className="verdetalle">ver detalle</Link>
            </article>
        </section>
    )
}

export default Item
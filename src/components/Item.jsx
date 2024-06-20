import { Link } from "react-router-dom"
import React from "react"

function Item({producto, indice}) {
    return (
        <section className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(250px,1fr))]">
            <article key={indice} className="p-4 text-black transition-all bg-white rounded-md shadow-xl hover:scale-105">
                <img src={producto.images[0]} alt={producto.title} className="object-contain aspect-square" />
                <h2 className="font-bold truncate">{producto.title}</h2>
                <p className="text-gray-400">${producto.price}</p>
                <Link to={`./item/${producto.id}`} className="btn">ver detalle</Link>
            </article>
        </section>
    )
}

export default Item
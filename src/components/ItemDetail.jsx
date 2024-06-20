import React from "react"

function ItemDetail({producto, titulo}) {
    console.log('ItemDetail')
    console.log(producto)
    console.log(titulo)
    return (
        <section className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(250px,1fr))]">
            <article key={producto.id} className="p-4 text-black transition-all bg-white rounded-md shadow-xl hover:scale-105">
                <img src={producto.images[0]} alt={producto.title} className="object-contain aspect-square" />
                <h2 className="font-bold truncate">{producto.title}</h2>
                <p className="text-gray-400">${producto.price}</p>
            </article>
        </section>
    )
}

export default ItemDetail
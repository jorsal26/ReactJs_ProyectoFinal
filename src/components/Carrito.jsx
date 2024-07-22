import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom';

const Carrito = () => {

    const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);
    const handleVaciar = () => {
        vaciarCarrito();
        }

    return (
        <section className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(400px,1fr))]">
            <article className="p-4 text-black transition-all bg-white rounded-md shadow-xl">
                <h1 className="text-3xl p-2 font-bold">Carrito</h1>

                {
                    carrito.map((prod) => (
                        <section className="grid gap-4 grid-cols-2 p-2 text-block bg-blue-100 rounded-md m-2" key={prod.id}>
                                    <img className="w-50 h-50 rounded-md m-2 shadow-2xl" src={`/src/images/${prod.imagen}`} alt={prod.nombre} />
                                    <h2 className="p-2 font-bold">{prod.nombre}</h2>
                                    <p>Cantidad: {prod.cantidad}</p>
                                    <p>Precio unitario: $ {prod.precio}</p>
                                    <p>Precio total:    $ {prod.precio * prod.cantidad}</p>
                        </section>
                    ))
                }

                {  
                    carrito.length > 0 ?
                    <div>
                        <h2 className="text-2xl p-2 font-bold">Precio total: ${precioTotal()}</h2>
                        <button className="vaciarcarrito m-4" onClick={handleVaciar}>Vaciar Carrito</button>
                        <Link className="finalizarcompra m-4" to="/checkout">Finalizar compra</Link>
                    </div> :
                    <h2>El carrito está vacío!</h2>
                }
            </article>
        </section>
    )
}

export default Carrito
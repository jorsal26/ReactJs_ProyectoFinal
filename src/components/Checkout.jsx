import React, { useContext, useState } from 'react'
import { useForm } from 'react-hook-form';
import { CartContext } from '../context/CartContext';
import { db } from '../firebase/config';
import { collection, addDoc } from "firebase/firestore";

const Checkout = () => {
    
const [pedidoId, setPedidoId] = useState("");
const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);
const { register, handleSubmit } = useForm();

const now = new Date();

const comprar = (data) => {
    const pedido = {
        fecha: now,
        cliente: data,
        productos: carrito,
        total: precioTotal()
    }

    const pedidosRef = collection(db, "pedidos");

    addDoc(pedidosRef, pedido)
        .then((doc) => {
            setPedidoId(doc.id);
            vaciarCarrito();
        })

}

if (pedidoId) {
    return (
        <div className="max-w-6xl ps-6">
            <h1 className="mt-8 text-3xl font-bold p-4">Muchas gracias por tu compra!</h1>
            <p className="mt-2 text-3xl font-bold p-4">Tu número de pedido es: <span className='text-green-300'>{pedidoId}</span></p>
        </div>
    )
}

return (
    <div className="max-w-6xl ps-6">
        <h1 className="text-3xl font-bold p-4">Finalizar compra</h1>
        <form className="flex flex-col gap-4 p-4 align-items:flex-start" onSubmit={handleSubmit(comprar)}>

            <input className="p-2 w-72 " type="text" style={{ textTransform: 'uppercase' }} placeholder="Ingrese su Nombre" {...register("nombre")} />
            <input className="p-2 w-72 " type="email" placeholder="Ingrese su e-mail" {...register("email")} />
            <input className="p-2 w-72 "type="phone" placeholder="Ingrese su teléfono" {...register("telefono")} />

            <button className="comprar" type="submit">Comprar</button>

        </form>
    </div>
    )
}

export default Checkout
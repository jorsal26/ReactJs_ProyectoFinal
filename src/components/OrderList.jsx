function OrderList({pedidos, titulo}) {

    return (
    <div>
        <h1 className="text-3xl font-bold p-4 text-center border-b-2 border-black">{titulo} - {pedidos.length}</h1>
        <section className="flex flex-wrap justify-between">
            {pedidos.map((item) => 
                <article className="card">
                    <div className="face front">
                        <p className="font-bold text-2xl text-black p-2 bg-slate-400 m-2" style={{ textTransform: 'uppercase' }} >{item.cliente.nombre}</p>
                        <p className="font-bold text-2xl text-black p-2">Nro. de pedido: <span className="font-bold text-blue-800 p-2">{item.id}</span></p>
                    </div>

                    <div className="face back">
                        <p className="font-bold text-2xl text-black p-2">Cantidad de Productos: <span className="font-bold text-blue-800 p-2">{item.productos.length}</span></p>
                        <p className="font-bold text-2xl text-black p-2">Total del Pedido: <span className="font-bold text-blue-800 p-2">{item.total}</span></p>
                    </div>
                </article>
            )}
        </section>
    </div>
    )
}

export default OrderList
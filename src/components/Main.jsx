import ItemListContainer from "./ItemListContainer.jsx"
import Carrito from "./Carrito.jsx"
import { Routes, Route } from "react-router-dom"
import ItemDetailContainer from "./ItemDetailContainer.jsx"
import ItemOrdersContainer from "./ItemOrdersContainer.jsx"
import Nosotros from "./Nosotros.jsx"
import Checkout from "./Checkout.jsx"

function Main() {
  return (
    <main className="p-4 bg-[rgba(255,255,255,0.5)] grow">
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/productos/:categoria" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/pedidos" element={<ItemOrdersContainer />} />
        <Route path="/carrito" element={<Carrito />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </main>
  )
}

export default Main
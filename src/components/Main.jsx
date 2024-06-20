import ItemListContainer from "./ItemListContainer.jsx"
import Carrito from "./CartWidget.jsx"
import { Routes, Route } from "react-router-dom"
import ItemDetailContainer from "./ItemDetailContainer.jsx"
import Nosotros from "./Nosotros.jsx"

function Main() {
  return (
    <main className="p-4 bg-[rgba(255,255,255,0.5)] grow">
      <Routes>
        <Route path="/" element={<h1 className="text-3xl font-bold">Inicio</h1>} />
        <Route path="/productos" element={<ItemListContainer />} />
        <Route path="/productos/item/:id" element={<ItemDetailContainer />} />
        <Route path="/productos/:categoria" element={<ItemListContainer />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/carrito" element={<h1 className="text-3xl font-bold">Carrito</h1>} />
      </Routes>
    </main>
  )
}

export default Main
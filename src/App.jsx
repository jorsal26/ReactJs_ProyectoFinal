import {  useState } from "react"
import Header from "./components/Header.jsx"
import Footer from "./components/Footer.jsx"
import Main from "./components/Main.jsx"
import { BrowserRouter } from "react-router-dom"
import { CartProvider } from "./context/CartContext.jsx"

function App() {

  const [carrito, setCarrito] = useState([])

  const agregarAlCarrito = (...[item, cantidad]) => {
    const itemAgregado = { ...item, cantidad }
    
    const nuevoCarrito = [...carrito]
    const estaEnElCarrito = nuevoCarrito.find((producto) => producto.id === itemAgregado.id) 

    if (estaEnElCarrito) {
      estaEnElCarrito.cantidad += cantidad
    } else {
      nuevoCarrito.push(itemAgregado)
    }
    setCarrito(nuevoCarrito)
  }

const cantidadEnCarrito = () => {
    return carrito.reduce((acc, prod) => acc + prod.cantidad, 0);
}

const precioTotal = () => {
  return carrito.reduce((acc, prod) => acc + prod.precio * prod.cantidad, 0);
}

const vaciarCarrito = () => {
  setCarrito([])
}

  return (
    <CartProvider value={{ carrito, agregarAlCarrito, cantidadEnCarrito }}>
      <BrowserRouter>
        <Header />
        <Main />
        <Footer />
      </BrowserRouter>
    </CartProvider>
  )
}

export default App

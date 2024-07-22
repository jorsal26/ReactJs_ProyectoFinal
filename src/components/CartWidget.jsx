import cart from '/cart.svg'
import { useContext, useState } from "react"
import { CartContext } from "../context/CartContext"
import { Link } from "react-router-dom"

function CartWidget() {
    const { cantidadEnCarrito } = useContext(CartContext);

    return (
      <div>
          <Link to="/carrito"><img className = "menu-link carrito" src={cart} alt="carrito" /><span className="numerito"> {cantidadEnCarrito()}</span></Link>
      </div>
    )
  
}

export default CartWidget

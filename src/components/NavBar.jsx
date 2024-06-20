import { Link, NavLink } from "react-router-dom"
import CartWidget from "./CartWidget"

function NavBar(props) {
  if (props.isHeader == true) {
    return (
      <nav className="flex justify-between items-center p-2 gap-4">
        <img className="logo" href="/" src="/logo.svg" alt="logo" />
        <ul className="flex p-2 gap-4 align-items-center list-style-type-none">
          <li><NavLink className="menu-link" to="/">Inicio</NavLink></li>
          <li><NavLink className="menu-link" to="/Productos">Productos</NavLink></li>
          <li><NavLink className="menu-link" to="/Productos/beauty">beauty</NavLink></li>
          <li><NavLink className="menu-link" to="/Productos/fragrances">fragrances</NavLink></li>
          <li><NavLink className="menu-link" to="/Productos/furniture">furniture</NavLink></li>
          <li><NavLink className="menu-link" to="/Productos/groceries">groceries</NavLink></li>
          <li><NavLink className="menu-link" to="/Nosotros">Nosotros</NavLink></li>
          <li><NavLink className="flex items-center gap-2" to="/Carrito">Carrito</NavLink></li>
          <CartWidget />
        </ul>
      </nav>
    )
  } else {
    return (
      <nav className="flex justify-center gap-4 text-xs">
        <a href="#">terminos y condiciones</a>
        <a href="#">F.A.Q</a>
        <a href="#">contacto</a>
      </nav>
    )
  }
}

export default NavBar

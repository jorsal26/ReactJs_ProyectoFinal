import { Link, NavLink } from "react-router-dom"
import CartWidget from "./CartWidget"

function NavBar(props) {
  if (props.isHeader == true) {
    return (
      <nav className="flex justify-between items-center p-2 gap-4">
        <img className="logo" href="/" src="/logo.svg" alt="logo" />
        <ul className="flex p-2 gap-4 align-items-center list-style-type-none">
          <li><NavLink className="menu-link" to="/">Inicio</NavLink></li>
          <li><NavLink className="menu-link" to="/Productos/Tortas">Tortas</NavLink></li>
          <li><NavLink className="menu-link" to="/Productos/Tartas">Tartas</NavLink></li>
          <li><NavLink className="menu-link" to="/Productos/Panaderia">Panaderia</NavLink></li>
          <li><NavLink className="menu-link" to="/Productos/Pasteleria">Pasteleria</NavLink></li>
          <li><NavLink className="menu-link" to="/Nosotros">Nosotros</NavLink></li>
          <li><NavLink className="menu-link" to="/Pedidos">Pedidos</NavLink></li>
          <CartWidget />
        </ul>
      </nav>
    )
  } else {
    return (
      <nav>
        <div className="flex justify-center align-items-center gap-4">
          <a href="#">terminos y condiciones</a>
          <a href="#">F.A.Q</a>
          <a href="#">contacto</a>
        </div>
        <div className="flex justify-center align-items-center gap-4">
          <img className="w-12 hover:scale-150" href="/" src="/w_logo_color.svg" alt="w_logo_color" />
          <a className="w-12 hover:scale-150" href="https://www.facebook.com/nonacalidulzuras" target="_blank" rel="noopener noreferrer">
            <img src="/f_logo_color.svg" alt="/f_logo_color" />
          </a>
          <a className="w-12 hover:scale-150" href="https://www.instagram.com/nonacalidulzuras" target="_blank" rel="noopener noreferrer">
            <img src="/i_logo_color.svg" alt="/i_logo_color" />
          </a>
        </div>
      </nav>
    )
  }
}

export default NavBar

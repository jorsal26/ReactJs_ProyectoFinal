import CartWidget from "./CartWidget"

function NavBar(props) {
  if (props.isHeader == true) {
    return (
      <nav>
        <a href="#">Inicio</a>
        <a href="#">Pedidos</a>
        <a href="#">Consultas</a>
        <CartWidget />
      </nav>
    )
  } else {
    return (
      <nav>
        <a href="#">terminos y condiciones</a>
        <a href="#">F.A.Q</a>
        <a href="#">contacto</a>
      </nav>
    )
  }
}

export default NavBar

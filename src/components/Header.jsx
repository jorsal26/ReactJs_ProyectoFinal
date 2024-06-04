import NavBar from "./NavBar"

function Header() {
  return (
    <header>
      <img className="logo" src="/logo.svg" alt="logo" />
      <NavBar isHeader={true} />
      <h1>Gestión de Pedidos</h1>
    </header>
  )
}

export default Header
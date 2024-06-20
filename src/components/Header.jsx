import NavBar from "./NavBar"

function Header() {
  return (
    <header className="flex justify-between p-4">
      <NavBar isHeader={true} />
    </header>
  )
}

export default Header
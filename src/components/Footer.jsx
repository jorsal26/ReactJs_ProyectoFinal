import NavBar from "./NavBar"

function Footer() {
  return (
    <footer className="p-4 text-center">
      <p className="text-xs">Copyright &copy; - Jorge Luis Salinas</p>
      <NavBar isHeader={false} />
    </footer>
  )
}

export default Footer
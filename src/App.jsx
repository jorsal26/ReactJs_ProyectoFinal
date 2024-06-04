import Header from "./components/Header.jsx"
import Footer from "./components/Footer.jsx"
import Main from "./components/Main.jsx"
import ItemLisContainer from "./components/ItemListContainer.jsx"

function App() {
  return (
    <>
      <Header />
      <ItemLisContainer greeting="Bienvenido a la Gestion de Pedidos"/>
      <Main />
      <Footer />
    </>
  )
}

export default App

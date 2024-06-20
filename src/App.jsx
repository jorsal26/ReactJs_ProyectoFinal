import Header from "./components/Header.jsx"
import Footer from "./components/Footer.jsx"
import Main from "./components/Main.jsx"
import { BrowserRouter } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Main />
      <Footer />
    </BrowserRouter>
  )
}

export default App

import cart from '/cart.svg'
import { useParams } from "react-router-dom"

function CartWidget() {
    const params = useParams()
    return (
        <>
        <img className = "carrito" src={cart} alt="carrito" />0
        </>
    )
}

export default CartWidget

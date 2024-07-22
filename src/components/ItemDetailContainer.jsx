import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "./ItemDetail"
import { db } from "../firebase/config";
import { doc, getDoc } from "firebase/firestore";

function ItemDetailContainer() {
    const [item, setItem] = useState([])
    const id = useParams().id

    useEffect(() => {

        const docRef = doc(db, "productos", id);
        getDoc(docRef)
            .then((resp) => {
            setItem(
                { ...resp.data(), id: resp.id }
            );
        })

    }, [id])

    return (
        <section className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(400px,1fr))]">
            {item && <ItemDetail item={item} />}
        </section>

        )
}

export default ItemDetailContainer
import Item from "./Item.jsx"
function ItemList({productos, titulo}) {
    return (
    <div>
        <h1 className="text-3xl font-bold">{titulo}</h1>
        <section className="grid grid-cols-1 gap-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
            {productos.map((item) => 
                <Item producto={item} key={item.id}/>
            )}
        </section>
    </div>
  )
}

export default ItemList
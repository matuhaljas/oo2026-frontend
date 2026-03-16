import { useEffect, useState } from "react"

//renderdamine --> esmakordne componendi peale tulek
//re-renderdamine --> componendi HTML muutmine

function HomePage() {
    const [products, setProducts] = useState([{name: "Coca-Cola", price: "10"}]);

    //uef --> 
    useEffect(() => {
        fetch("http://localhost:8090/products") // URL kuhu läheb päring
            .then(res => res.json())
            .then(json => setProducts(json))
    }, []);


  return (
    <div>
        {products.map(product => <div> {product.name} - {product.price}€ </div> )}
        </div>
  )
}

export default HomePage
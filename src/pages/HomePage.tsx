import { useEffect, useState } from "react"
import type { Product } from "../models/Product";




//renderdamine --> esmakordne componendi peale tulek
//re-renderdamine --> componendi HTML muutmine

function HomePage() {
    const [products, setProducts] = useState<Product[]>([]);

    //uef --> enter
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
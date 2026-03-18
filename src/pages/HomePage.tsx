import { useEffect, useState } from "react"
import type { Product } from "../models/Product";




//renderdamine --> esmakordne componendi peale tulek
//re-renderdamine --> componendi HTML muutmine

function HomePage() {
    const [products, setProducts] = useState<Product[]>([]);

    //uef --> enter
    useEffect(() => {
        fetch(import.meta.env.VITE_BACK_URL + "/products") // URL kuhu läheb päring
            .then(res => res.json())
            .then(json => setProducts(json))
    }, []);


  return (
    <div>
        {products.map(product =>
            <div key={product.id}> 
                {product.name} - {product.price}€ 
            </div> )}
        </div>
  )
}

export default HomePage
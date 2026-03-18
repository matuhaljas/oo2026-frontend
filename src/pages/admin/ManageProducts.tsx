import { useEffect, useState } from "react"
import type { Product } from "../../models/Product";

function ManageProducts() {
    const [products, setProducts] = useState<Product[]>([]);

    //uef --> enter
    useEffect(() => {
        fetch(import.meta.env.VITE_BACK_URL + "/products") // URL kuhu läheb päring
            .then(res => res.json())
            .then(json => setProducts(json))
    }, []);

    const deleteProduct = (productId: number) => {
      fetch(import.meta.env.VITE_BACK_URL + "/products/" + productId, {
        method: "DELETE"
      }).then(res => res.json())
      .then(json => setProducts(json));
    }


  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>description</th>
            <th>price</th>
            <th>active</th>
            <th>stock</th>
            <th>category</th>
            <th>edit</th>
            <th>delete</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => 
            <tr key = {product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.description}</td>
              <td>{product.price}</td>
              <td>{product.active}</td>
              <td>{product.stock}</td>
              <td>{product.category?.name}</td>
              <td><button>Edit</button></td>
              <td><button onClick={() => deleteProduct(Number(product.id))}>X</button></td>
            </tr>)}
        </tbody>
      </table>
    </div>
    )
}

export default ManageProducts
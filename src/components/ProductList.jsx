// Dieser Code rendert eine Liste von Produkten und bietet die Möglichkeit, Produkte 
// in den Warenkorb zu legen. Die Produkte werden in einem flexiblen Raster angezeigt, 
// das sich je nach Bildschirmgröße anpasst.

import React from 'react'
import { Link } from 'react-router-dom'
import Product from './Product'

const ProductList = ({ products, addToCart }) => {
  return (
    <div className="container w-full  mx-auto px-4 py-8 grid gap-x-6 gap-y-20 xl:w-8/12 sm:grid-cols-2 xl:grid-cols-3">
      {products.map(product => (
        <div key={product.id}>
          <Product product={product} addToCart={addToCart} />
        </div>
      ))}
    </div>
  )
}

export default ProductList

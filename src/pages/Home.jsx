import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import ProductList from '../components/ProductList'
import productsData from '../products.json'

const Home = ({ addToCart }) => {
	const [products, setProducts] = useState([])

	useEffect(() => {
		setProducts(productsData)
	}, [])

	return (
		<div>
			<Header />
			<ProductList products={products} addToCart={addToCart} />
		</div>
	)
}

export default Home

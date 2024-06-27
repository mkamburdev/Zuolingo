import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import ProductList from '../components/ProductList'
import productsData from '../products.json'

// Die Home-Komponente stellt die Startseite der Anwendung dar.
// Sie akzeptiert die Prop addToCart (Funktion zum Hinzufügen von Produkten zum Warenkorb).

const Home = ({ addToCart }) => {
	const [products, setProducts] = useState([])

		// useEffect-Hook zum Laden der Produktliste aus einer JSON-Datei beim ersten Rendern der Komponente
	useEffect(() => {
		setProducts(productsData) // Setzen der Produktliste aus der JSON-Datenquelle
	}, [])

	return (
		<div>
			<Header />
			<ProductList products={products} addToCart={addToCart} />
		</div>
	)
}

export default Home

import React, { useState } from 'react'
import { Link } from 'react-router-dom'

// Diese Komponente rendert ein einzelnes Produkt.
// Sie akzeptiert zwei Props: product (ein Objekt mit Produktinformationen) und addToCart (eine Funktion zum Hinzufügen des Produkts zum Warenkorb).

const Product = ({ product, addToCart }) => {
	const [added, setAdded] = useState(false)

	// Funktion, die aufgerufen wird, wenn der "Add to Cart" Button geklickt wird.
	const handleAddToCart = () => {
		addToCart(product) // Fügt das Produkt zum Warenkorb hinzu
		setAdded(true) // Setzt den Zustand 'added' auf true, um den Button auf "Added to Cart" zu ändern
	}

	return (
		<div>
			<div className="relative group">
				<img
					src={product.image}
					alt={product.name}
					className="w-full h-[30rem] object-cover rounded-3xl"
				/>
				<div className="absolute inset-0 flex items-end justify-center gap-2">
					<Link to={`/product/${product.id}`}>
						<button className="bg-lime-500 text-white px-8 py-3 mb-7 shadow border-b-4 border-lime-600 rounded-xl opacity-0 group-hover:opacity-100">
							Details
						</button>
					</Link>
					{!added ? (
						<button
							onClick={handleAddToCart}
							className="bg-lime-500 text-white px-8 py-3 mb-7 shadow border-b-4 border-lime-600 rounded-xl opacity-0 group-hover:opacity-100"
						>
							Add to Cart
						</button>
					) : (
						<button className="bg-purple-500 text-white px-8 py-3 mb-7 shadow border-b-4 border-purple-700 rounded-xl opacity-0 group-hover:opacity-100">
							Added to Cart
						</button>
					)}
				</div>
			</div>
			<div className="mt-4">
				<h2 className="text-[1.4em] text-slate-600 font-extrabold">
					{product.name}
				</h2>
				<p className="text-[1.4em] text-slate-600 font-semibold">
					${product.price}
				</p>
			</div>
		</div>
	)
}

export default Product

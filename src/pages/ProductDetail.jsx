import React, { useState } from 'react'
import { FaMinus, FaPlus } from 'react-icons/fa'
import { Link, useParams } from 'react-router-dom'
import productsData from '../products.json'

// Diese Komponente rendert die Produkt-Detailseite.
const ProductDetail = () => {
	const { id } = useParams() // Die ID des Produkts aus den URL-Parametern abrufen
	const product = productsData.find(p => p.id === parseInt(id)) // Das Produkt aus den Produktdaten finden

	const [activeImage, setActiveImage] = useState(product.image) // Aktives Bild des Produkts verwalten

	// Funktion zum Aktualisieren des aktiven Bildes
	const updateActiveImage = imageSrc => {
		setActiveImage(imageSrc)
	}

	return (
		<div className="w-11/12 mx-auto">
			<div className="mx-auto my-3 w-8/12 flex flex-row text-gray-500 font-semibold">
				<Link to={`/`}>
					<p>Home</p>
				</Link>
				<span className="px-2">{' > '}</span>
				<p>{product.name}</p>
			</div>
			<div className="mx-auto my-12 flex flex-col gap-14 md:flex-row xl:w-8/12 ">
				<div className="container-left md:w-full">
					<div>
						<img
							src={activeImage}
							alt={product.name}
							className="w-full h-[25rem] object-cover rounded-3xl md:h-[34rem]"
						/>
					</div>
					<div className="py-3 flex gap-2">
						<img
							src={product.image}
							alt={product.name}
							className={`w-28 h-28 object-cover rounded-2xl ${
								activeImage === product.image ? 'border-2 border-hgreen' : ''
							}`}
							onClick={() => updateActiveImage(product.image)}
						/>

						{product.image2 && (
							<img
								src={product.image2}
								alt={product.name}
								className={`w-28 h-28 object-cover rounded-2xl ${
									activeImage === product.image2 ? 'border-2 border-hgreen' : ''
								}`}
								onClick={() => updateActiveImage(product.image2)}
							/>
						)}
						{product.image3 && (
							<img
								src={product.image3}
								alt={product.name}
								className={`w-28 h-28 object-cover rounded-2xl ${
									activeImage === product.image3 ? 'border-2 border-hgreen' : ''
								}`}
								onClick={() => updateActiveImage(product.image3)}
							/>
						)}
					</div>
				</div>
				<div className="container-right flex flex-col gap-4 md:w-full">
					<h1 className="text-3xl font-bold text-gray-700">{product.name}</h1>
					<p className="text-xl font-semibold text-gray-700">
						${product.price}
					</p>
					<div className="flex gap-4">
						<div className="flex items-center justify-center border-2 border-b-[0.4rem] w-28 h-14 rounded-xl">
							<button className="text-gray-500 text-[0.6em]">
								<FaMinus />
							</button>
							<span className="mx-4 font-bold">1</span>
							<button className="text-gray-500 text-[0.6em]">
								<FaPlus />
							</button>
						</div>
						<div>
							<button className="bg-lime-500 text-white px-8 py-3 mb-7 w-48 uppercase shadow border-b-[0.4rem] border-lime-600 rounded-xl">
								Add to Cart
							</button>
						</div>
					</div>
					<h2 className="text-base font-bold uppercase text-hgreen">Details</h2>
					<p className="text-lg font-semibold tracking-wide">
						{product.details}
					</p>
				</div>
			</div>
		</div>
	)
}

export default ProductDetail

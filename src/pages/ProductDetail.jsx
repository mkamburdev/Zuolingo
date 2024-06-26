import React from 'react'
import { Link, useParams } from 'react-router-dom'
import productsData from '../products.json'

const ProductDetail = () => {
	const { id } = useParams()
	const product = productsData.find(p => p.id === parseInt(id))
	return (
		<div className='w-11/12 mx-auto'>
			<div className="mx-auto my-3 w-8/12 flex flex-row text-gray-500 font-semibold">
				<Link to={`/`}>
					<p>Home</p>
				</Link>
				<span className="px-2">{' > '}</span>
				<p>{product.name}</p>
			</div>
			{/* GALLERY */}
			<div className="mx-auto my-12 flex flex-col gap-14 md:flex-row xl:w-8/12 ">
				<div className="container-left md:w-full">
					<div>
						<img
							src={product.image}
							alt={product.name}
							className="w-full h-[25rem] object-cover rounded-3xl md:h-[34rem]"
						/>
					</div>
					<div className="py-3 flex gap-2">
						<img
							src={product.image}
							alt={product.name}
							className="w-28 h-28 object-cover rounded-2xl border-2 border-lime-400 "
						/>
						{product.image2 && (
							<img
								src={product.image2}
								alt={product.name}
								className="w-28 h-28 object-cover rounded-2xl"
							/>
						)}
						{product.image3 && (
							<img
								src={product.image3}
								alt={product.name}
								className="w-28 h-28 object-cover rounded-2xl"
							/>
						)}
					</div>
				</div>
				<div className="container-right flex flex-col gap-4 md:w-full">
					<h1 className='text-3xl font-bold text-gray-700'>{product.name}</h1>
					<p className='text-xl font-semibold text-gray-700'>${product.price}</p>
					<h2 className='text-base font-bold uppercase text-hgreen'>Details</h2>
					<p className='text-lg font-semibold tracking-wide'>{product.details}</p>
				</div>
			</div>
		</div>
	)
}

export default ProductDetail

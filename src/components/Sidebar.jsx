import React from 'react'
import { FaMinus, FaPlus } from 'react-icons/fa'
import { HiOutlineXMark } from 'react-icons/hi2'
import { RiDeleteBin6Line } from 'react-icons/ri'

const Sidebar = ({
	cartItems,
	isOpen,
	toggleSidebar,
	removeFromCart,
	updateQuantity
}) => {
	const totalPrice = cartItems.reduce(
		(total, item) => total + item.price * item.quantity,
		0
	)

	return (
		<div
			className={`fixed top-0 right-0 w-[24rem] h-full z-20 bg-white shadow-md transform ${
				isOpen ? 'translate-x-0' : 'translate-x-full'
			} transition-transform duration-300`}
		>
			<div className="p-4 h-full flex flex-col">
				<div className="flex justify-between">
					<h2 className="text-[2em] font-black text-lime-500 mb-4">
						your cart
					</h2>
					<button onClick={toggleSidebar} className="text-lime-600 mb-4">
						<HiOutlineXMark className="text-[1.8em]" />
					</button>
				</div>
				<ul>
					{cartItems.map((item, index) => (
						<li key={index} className="mt-4 mb-4 flex items-center">
							<img
								src={item.image}
								alt={item.name}
								className="w-28 h-28 object-cover mr-4 rounded-2xl"
							/>
							<div className="flex-1">
								<h3 className="text-gray-800 text-lg font-black">{item.name}</h3>
								<p className="text-gray-800">${item.price.toFixed(2)}</p>
								<div className="flex">
									<div className="flex items-center border-2 border-b-[0.4rem] w-28 h-14 rounded-xl">
										<div className="w-full flex justify-center">
											<button
												onClick={() => updateQuantity(item, item.quantity - 1)}
												className="text-gray-500 text-[0.6em]"
											>
												<FaMinus />
											</button>
											<span className="mx-4 font-bold">{item.quantity}</span>
											<button
												onClick={() => updateQuantity(item, item.quantity + 1)}
												className="text-gray-500 text-[0.6em]"
											>
												<FaPlus />
											</button>
										</div>
									</div>
									<div className="flex justify-center">
										<button
											onClick={() => removeFromCart(item)}
											className="text-lime-500 ml-2"
										>
											<RiDeleteBin6Line className="text-base" />
										</button>
									</div>
								</div>
							</div>
						</li>
					))}
				</ul>
				<div className="w-full h-full mt-4 flex flex-col items-center justify-end gap-3">
					<h3 className="text-[1.5em] font-semibold text-slate-700">Subtotal: <span className='text-slate-900 font-bold'>${totalPrice.toFixed(2)}</span></h3>
					<p>Taxes & shipping calculated at checkout</p>
					<button className='bg-hgreen py-3 px-[8.2rem] rounded-xl border-b-4 border-lime-600 text-base uppercase font-bold text-white'>Checkout</button>
					<button className='uppercase text-sm font-black text-hgreen'>View Cart</button>
				</div>
			</div>
		</div>
	)
}

export default Sidebar

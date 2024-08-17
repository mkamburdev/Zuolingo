import React from 'react'
import { FiMenu, FiSearch, FiShoppingCart } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import logo from '../assets/images/logo.png'

const Navbar = ({ cartCount, setSidebarOpen }) => {
	return (
		<nav className="sticky top-0 z-10 w-full bg-white">
			<section className="py-[0.4rem] bg-[#58cc02]">
				<p className="text-[0.78rem] text-center text-white font-semibold">
					Orders over $50 include a FREE mystery Duo pin!
				</p>
			</section>
			<div className="mx-auto max-w-[30rem] py-2 my-2 flex justify-between items-center md:max-w-[40rem] lg:max-w-[58rem] xl:max-w-[77rem]">
				<FiMenu className="text-lime-500 text-[1.4em] cursor-pointer hover:text-lime-300 lg:hidden" />
				<Link to="/">
					<img src={logo} alt="Logo" width="220" />
				</Link>
				<div className="space-x-4 font-black text-lime-500 hidden lg:block xl:pr-40">
					<Link to="/plushies" className="hover:text-lime-300">
						PLUSHIES
					</Link>
					<Link to="/apparel" className="hover:text-lime-300">
						APPAREL
					</Link>
					<Link to="/accessories" className="hover:text-lime-300">
						ACCESSORIES
					</Link>
				</div>
				<div className="flex items-center space-x-4 text-lime-500">
					<FiSearch className="text-[1.4em] cursor-pointer hover:text-lime-300" />
					<div className="relative">
						<FiShoppingCart
							className="text-[1.4em] cursor-pointer hover:text-lime-300"
							onClick={() => setSidebarOpen(true)}
						/>
						{cartCount > 0 && (
							<span className="absolute -top-2 -right-2 bg-lime-500 text-white rounded-full text-sm px-1">
								{cartCount}
							</span>
						)}
					</div>
				</div>
			</div>
		</nav>
	)
}

export default Navbar

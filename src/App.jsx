import React, { useState } from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Category from './pages/Category'
import Home from './pages/Home'
import ProductDetail from './pages/ProductDetail'

const App = () => {
	const [cartItems, setCartItems] = useState([])
	const [isSidebarOpen, setSidebarOpen] = useState(false)

	const addToCart = product => {
		const existingProduct = cartItems.find(item => item.id === product.id)
		if (existingProduct) {
			const updatedCartItems = cartItems.map(item =>
				item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
			)
			setCartItems(updatedCartItems)
		} else {
			const updatedCartItems = [...cartItems, { ...product, quantity: 1 }]
			setCartItems(updatedCartItems)
		}
		setSidebarOpen(true)
	}

	const removeFromCart = product => {
		const updatedCartItems = cartItems.filter(item => item.id !== product.id)
		setCartItems(updatedCartItems)
	}

	const updateQuantity = (product, quantity) => {
		if (quantity <= 0) {
			removeFromCart(product)
		} else {
			const updatedCartItems = cartItems.map(item =>
				item.id === product.id ? { ...item, quantity } : item
			)
			setCartItems(updatedCartItems)
		}
	}

	const toggleSidebar = () => {
		setSidebarOpen(!isSidebarOpen)
	}

	return (
		<Router>
			<div className="flex flex-col min-h-screen">
				<Navbar cartCount={cartItems.length} setSidebarOpen={setSidebarOpen} />
				<div className="flex-1">
					<Routes>
						<Route path="/" element={<Home addToCart={addToCart} />} />
						<Route path="/plushies" element={<div>PLUSHIES</div>} />
						<Route path="/apparel" element={<div>APPAREL</div>} />
						<Route path="/accessories" element={<div>ACCESSORIES</div>} />
						<Route path="/product/:id" element={<ProductDetail />} />
					</Routes>
				</div>
				<Footer />
				<Sidebar
					cartItems={cartItems}
					isOpen={isSidebarOpen}
					toggleSidebar={toggleSidebar}
					removeFromCart={removeFromCart}
					updateQuantity={updateQuantity}
				/>
			</div>
		</Router>
	)
}

export default App

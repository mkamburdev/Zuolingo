// In diesem Projekt habe ich ein Einkaufswagensystem mit React und React Router erstellt.
// Ich verwalte den Zustand der Warenkorbelemente und der Sidebar-Verfügbarkeit mit useState-Hooks.
// Hauptkomponenten: Navbar, Sidebar, Footer, Home, ProductDetail.
// Navbar zeigt die Artikelanzahl im Warenkorb und öffnet die Sidebar.
// Sidebar zeigt die Warenkorbelemente und ermöglicht Mengenänderungen oder das Entfernen von Artikeln.
// Produkte können auf der Hauptseite dem Warenkorb hinzugefügt werden, wodurch die Sidebar automatisch geöffnet wird.

import React, { useState } from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Home from './pages/Home'
import ProductDetail from './pages/ProductDetail'

const App = () => {
	// useState-Hooks zur Verwaltung des Warenkorbs und der Sidebar-Verfügbarkeit
	const [cartItems, setCartItems] = useState([])
	const [isSidebarOpen, setSidebarOpen] = useState(false)

	// Funktion zum Hinzufügen eines Produkts zum Warenkorb
	const addToCart = product => {
		// Überprüfen, ob das Produkt bereits im Warenkorb ist
		const existingProduct = cartItems.find(item => item.id === product.id)
		if (existingProduct) {
			// Wenn ja, erhöhe die Menge
			const updatedCartItems = cartItems.map(item =>
				item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
			)
			setCartItems(updatedCartItems)
		} else {
			// Wenn nein, füge das Produkt dem Warenkorb hinzu
			const updatedCartItems = [...cartItems, { ...product, quantity: 1 }]
			setCartItems(updatedCartItems)
		}
		// Sidebar öffnen
		setSidebarOpen(true)
	}

	// Funktion zum Entfernen eines Produkts aus dem Warenkorb
	const removeFromCart = product => {
		const updatedCartItems = cartItems.filter(item => item.id !== product.id)
		setCartItems(updatedCartItems)
	}

	// Funktion zum Aktualisieren der Menge eines Produkts im Warenkorb
	const updateQuantity = (product, quantity) => {
		if (quantity <= 0) {
			// Wenn die Menge null oder negativ ist, entferne das Produkt aus dem Warenkorb
			removeFromCart(product)
		} else {
			// Ansonsten aktualisiere die Menge des Produkts
			const updatedCartItems = cartItems.map(item =>
				item.id === product.id ? { ...item, quantity } : item
			)
			setCartItems(updatedCartItems)
		}
	}
	// Funktion zum Umschalten der Sidebar
	const toggleSidebar = () => {
		setSidebarOpen(!isSidebarOpen)
	}

	return (
		// React Router für die Navigation zwischen den Seiten
		<Router>
			<div className="flex flex-col min-h-screen">
				<Navbar cartCount={cartItems.length} setSidebarOpen={setSidebarOpen} />
				<div className="flex-1">
					{/* Routing für die verschiedenen Seiten der Anwendung */}
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

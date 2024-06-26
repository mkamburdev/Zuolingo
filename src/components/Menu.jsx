import React from 'react'

function Menu() {
	return (
		<div
			className={`fixed top-0 right-0 w-[24rem] h-full z-20 bg-white shadow-md transform ${
				isOpen ? 'translate-x-0' : 'translate-x-full'
			} transition-transform duration-300`}
		>
			<div className="bg-red-500 h-svh">MENU TEST</div>
		</div>
	)
}

export default Menu

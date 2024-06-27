import React from 'react'
import banner from '../assets/images/banner.webp'
import banner2 from '../assets/images/mobile-banner.webp'

// Diese Komponente rendert den Header der Anwendung mit einem responsiven Hintergrundbild.

const Header = () => {
	return (
		<header>
			{/* Bildquelle abhängig von der Bildschirmbreite */}
			<picture>
				<source media="(max-width: 1024px)" srcSet={banner2} />
				<source media="(min-width: 1025px)" srcSet={banner} />
				<img
					src={banner}
					alt="Header Background Image"
					className="w-full object-cover h-[18.5rem] xl:h-[30rem]"
				/>
			</picture>
		</header>
	)
}

export default Header

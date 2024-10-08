import React from 'react'
import { FaFacebook, FaTiktok, FaTwitter } from 'react-icons/fa'
import { RiInstagramFill } from 'react-icons/ri'
import footer_duo from '../assets/images/footer_duo.avif'

const Footer = () => {
	return (
		<div>
			<div className="h-10 bg-[url('../src/assets/images/wave.svg')]"></div>
			<footer className="w-full bg-[#58cc02] text-white h-36 ">
				<div className="container w-8/12 h-full flex justify-center mx-auto text-center">
					<div className="footer-left flex flex-col gap-2 justify-center items-center">
						<img src={footer_duo} alt="Zuolingo Logo" className=" w-14 object-cover" />
						<div className='flex justify-center gap-4 text-2xl'>
							<FaFacebook />
							<RiInstagramFill />
							<FaTwitter />
							<FaTiktok />
						</div>
						<p className="text-sm">© 2024 Zuolingo | <a href="https://github.com/mkamburdev" target="blank">mkamburdev</a></p>
					</div>
					<div className="footer-right"></div>
				</div>
			</footer>
		</div>
	)
}

export default Footer

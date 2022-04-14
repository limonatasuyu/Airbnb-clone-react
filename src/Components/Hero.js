import React from 'react'
import photoGrid from '../img/photo-grid.png'

function Hero() {
	return(
		<section className="HeroSection">
			<img src={photoGrid} className="photoGrid" />
			<h1 className="HeroHeader">Online Experiences</h1>
			<p className="HeroP">Join unique interactive activities led by one-of-kind hosts--all without leaving home.</p>
		</section>
	)
}

export default Hero

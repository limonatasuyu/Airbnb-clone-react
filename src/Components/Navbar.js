import React from 'react'
import airbnb from '../img/airbnb-icon.png'

function Navbar() {
	return(
		<nav>
			<a href="#"><img src={airbnb} alt="logo" className="nav-logo" />
			<h1 className="logo-text" >airbnb</h1></a>
		</nav>
	)
}

export default Navbar

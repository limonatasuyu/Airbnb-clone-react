import React from 'react'
import ReactDOM from 'react-dom'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Cards from './Components/Cards'
import './index.css'
import data from './data.js' 

function App() {
	return(
		<>
			<Navbar />
			<Hero />
			<Cards />
		</>
	)
}




ReactDOM.render(<App />, document.querySelector("#root"))




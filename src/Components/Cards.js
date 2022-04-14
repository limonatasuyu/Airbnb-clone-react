import React from 'react'
import Card from './Card'
import data from '../data'


function Cards() {

	var CardComp = data.map(item => {
		return (
			<Card
				key = {item.id}
				{...item}
			/>
		)
	})
	console.log(CardComp)
	return (
		<div className="Cards-container">
			{CardComp}
		</div>
	)
}

export default Cards

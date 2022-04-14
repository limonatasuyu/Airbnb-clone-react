import React from 'react'
import Star from '../img/star.png'

function Card(props) {
	
	
	return (
		<div className="Card">
			<div>
				<img src={"./img/" + props.coverImg} className="card-image" alt="some-pic"/>
				{!(props.openSpots === undefined) && 
				<div className="card-stat">{props.openSpots === 0 ? <>SOLD OUT</> : <>ONLİNE</>}</div>}
			</div>
			<div className="card-description">
				<div> 
					<img src={Star} className="card-star" alt="star-icon"/>
					<div className="card--stats">
						<h5>{props.stats.rating}</h5>
						<h6><span>({props.stats.reviewCount})•</span><span>{props.location}</span></h6>
					</div>
				</div>
				<h5>{props.title}</h5>
				<div>
					<h4>From ${props.price} </h4>
					<h5 style={{marginLeft: "5px"}}>/ person</h5>
				</div>
			</div>
		</div>
	)
}

export default Card

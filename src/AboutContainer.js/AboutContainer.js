import React from 'react'
import Card from '../Card/Card'
import './aboutContainer-style.css'

const cardData = [
	{
		title: 'Bamboo Stand',
		pledge: 'Pledge $25 or more',
		description: "You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list.",
		pledgeLeft: 101,
		buttonTitle: 'Select Reward',
		outOfStock: false
	},
	{
		title: 'Black Edition Stand',
		pledge: 'Pledge $75 or more',
		description: "You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
		pledgeLeft: 64,
		buttonTitle: 'Select Reward',
		outOfStock: false
	},
	{
		title: 'Mahogany Special Edition',
		pledge: 'Pledge $200 or more',
		description: "You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
		pledgeLeft: 0,
		buttonTitle: 'Out of stock',
		outOfStock: true
	},
]

function AboutContainer() {

	return (
		<section className="about-wrapper">
			<div className="about-container">
				<h3>About this project</h3>
				<p>
					The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen
					to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve
					your posture and make you more comfortable while at work, helping you stay focused on the task at hand.
				</p>
				<br />
				<p>
					Featuring artisan craftsmanship,
					the simplicity of design creates extra desk space below your computer
					to allow notepads, pens, and USB sticks to be stored under the stand.
				</p>

				<Card data={cardData}/>

			</div>
		</section>
	)
}

export default AboutContainer

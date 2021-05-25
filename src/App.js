import React from 'react'
import AboutContainer from './AboutContainer.js/AboutContainer'
import './index.css'
import Modal from './Modal/Modal'
import Navbar from './Navbar/Navbar'
import PledgeContainer from './PledgeContainer/PledgeContainer'
import SubHeader from './SubHeader/SubHeader'

const modalOptionData = [
	{
		title: 'Pledge with no reward',
		description: "Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email.",
		buttonTitle: 'Select Reward',
		outOfStock: false
	},
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

function App() {
	const [showModal, setShowModal] = React.useState(false)

	return (
		<>
			<Navbar />
			<main>
				<SubHeader setShowModal={setShowModal} />
				<PledgeContainer />
				<AboutContainer />
			</main>
			{
				showModal &&
				< Modal data={modalOptionData} setShowModal={setShowModal} />
			}
		</>
	);
}

export default App;

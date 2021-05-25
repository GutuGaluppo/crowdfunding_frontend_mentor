import React from 'react'
import AboutContainer from './AboutContainer.js/AboutContainer'
import './index.css'
import Modal from './Modal/Modal'
import Navbar from './Navbar/Navbar'
import PledgeContainer from './PledgeContainer/PledgeContainer'
import SubHeader from './SubHeader/SubHeader'

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
				< Modal setShowModal={setShowModal} />
			}
		</>
	);
}

export default App;

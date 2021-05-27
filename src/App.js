import { useState } from 'react'
import './index.css'
import AboutContainer from './Components/AboutContainer.js/AboutContainer'
import Modal from './Components/Modal/Modal'
import Navbar from './Components/Navbar/Navbar'
import PledgeContainer from './Components/PledgeContainer/PledgeContainer'
import SubHeader from './Components/SubHeader/SubHeader'

function App() {
	const [backed, setBacked] = useState(89914)
	const [totalBackers, setTotalBackers] = useState(5007)
	const [daysLeft, setDaysLeft] = useState(56)
	const [showModal, setShowModal] = useState(false)

	const handleBacked = (n) => {
		console.log(backed)
		setBacked(backed + n)
		setTotalBackers(totalBackers + 1)
	}

	return (
		<>
			<Navbar />
			<main>
				<SubHeader setShowModal={setShowModal} />
				<PledgeContainer
					backed={backed}
					totalBackers={totalBackers}
					daysLeft={daysLeft}
				/>
				<AboutContainer handleBacked={handleBacked} />
			</main>
			{ showModal && < Modal setShowModal={setShowModal} />}
		</>
	);
}

export default App;

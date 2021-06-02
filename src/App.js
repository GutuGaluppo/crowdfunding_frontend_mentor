import { useState } from 'react'
import './index.css'
import AboutContainer from './Components/AboutContainer.js/AboutContainer'
import Modal from './Components/Modal/Modal'
import Navbar from './Components/Navbar/Navbar'
import PledgeContainer from './Components/PledgeContainer/PledgeContainer'
import SubHeader from './Components/SubHeader/SubHeader'
import ThanksPopUp from './Components/ThanksPopUp/ThanksPopUp'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fal } from '@fortawesome/pro-light-svg-icons'
import { far } from '@fortawesome/pro-regular-svg-icons'
import { fas } from '@fortawesome/pro-solid-svg-icons'

library.add(fal, far, fas)

function App() {
	const [backed, setBacked] = useState(89914)
	const [totalBackers, setTotalBackers] = useState(5007)
	const [daysLeft, setDaysLeft] = useState(56)
	const [showModal, setShowModal] = useState(false)
	const [showThanks, setShowThanks] = useState(false)

	function handleBacked(amount) {
		setBacked(backed + amount)
		setTotalBackers(totalBackers + 1)
	}

	return (
		<>
			<Navbar />
			<main>
				<SubHeader
					setShowModal={setShowModal}
				/>
				<PledgeContainer
					backed={backed}
					totalBackers={totalBackers}
					daysLeft={daysLeft}
				/>
				<AboutContainer handleBacked={handleBacked} />
			</main>
			{ showModal &&
				<Modal
					setShowModal={setShowModal}
					handleBacked={handleBacked}
					setShowThanks={setShowThanks}
				/>
			}
			{ showThanks && <ThanksPopUp setShowThanks={setShowThanks} />}
		</>
	);
}

export default App;

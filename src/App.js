import { useState } from 'react'
import './index.css'
import ProductSection from './Components/ProductSection/ProductSection'
import Modal from './Components/Modal/Modal'
import Navbar from './Components/Navbar/Navbar'
import PledgeContainer from './Components/PledgeContainer/PledgeContainer'
import Header from './Components/Header/Header'
import ThanksPopUp from './Components/ThanksPopUp/ThanksPopUp'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fal } from '@fortawesome/pro-light-svg-icons'
import { far } from '@fortawesome/pro-regular-svg-icons'
import { fas } from '@fortawesome/pro-solid-svg-icons'

library.add(fal, far, fas)

function App({ productData }) {

	const [data, setData] = useState(productData)
	const [isPledgeModalOpen, setPledgeModalOpen] = useState(false)
	const [showThanksModal, setShowThanksModal] = useState(false)
	const [selectedRewardId, setSelectedRewardId] = useState()

	function openPledgeModal(rewardId) {
		setSelectedRewardId(rewardId)
		setPledgeModalOpen(true)
	}

	function handlePledgeSubmition({ amount, rewardId }) {
		const newData = JSON.parse(JSON.stringify(data))
		newData.amountRaised = parseFloat(data.amountRaised) + parseFloat(amount)
		newData.totalBackers = data.totalBackers + 1
		const rewardPledged = newData.rewards.find((r) => r.id === rewardId)

		if (rewardPledged) rewardPledged.pledgeLeft = rewardPledged.pledgeLeft - 1
		setData(newData)
		setPledgeModalOpen(false)
		setShowThanksModal(true)
	}

	return (
		<>
			<Navbar />
			<main>
				<Header openPledgeModal={openPledgeModal} />
				<PledgeContainer
					backed={data.amountRaised}
					amountToRaise={data.amountToRaise}
					totalBackers={data.totalBackers}
					daysLeft={data.daysLeft}
				/>
				<ProductSection
					rewards={data.rewards}
					openPledgeModal={openPledgeModal}
				/>
			</main>
			{ isPledgeModalOpen &&
				<Modal
					rewards={data.rewards}
					setPledgeModalOpen={setPledgeModalOpen}
					selectedRewardId={selectedRewardId}
					onSubmitPledge={handlePledgeSubmition}
					setShowThanksModal={setShowThanksModal}
				/>
			}
			{ showThanksModal &&
				<ThanksPopUp setShowThanksModal={setShowThanksModal} />
			}
		</>
	);
}

export default App;

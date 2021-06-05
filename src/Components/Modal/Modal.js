import { useState, useEffect } from 'react';
import './modal-style.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import RewardsModal from '../RewardsModal/RewardsModal';

function Modal({ rewards, setPledgeModalOpen, selectedRewardId, onSubmitPledge }) {

	const pledges = rewards.map((r) => ({
		reward: r,
		id: r.id,
	}))

	const [selectedPledgeId, setSelectedPledgeId] = useState();
	useEffect(() => setSelectedPledgeId(selectedRewardId), [selectedRewardId])

	return (
		<div className="modal">
			<section className="modal_main">
				<div className="modal_header">
					<div className="modal_close_btn">
						<h1>Back this project</h1>
						<FontAwesomeIcon
							icon={['fas', 'times']}
							onClick={() => setPledgeModalOpen(false)}
							className="icon"
						/>
					</div>
					<p>Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?</p>
				</div>
				<div>
					{pledges.map((p) => (
						<RewardsModal
							key={p.id}
							pledge={p}
							isSelected={selectedPledgeId === p.id}
							onSelect={() => setSelectedPledgeId(p.id)}
							onSubmitPledge={onSubmitPledge}
						/>
					))}
				</div>
			</section>
		</div>
	)
}

export default Modal

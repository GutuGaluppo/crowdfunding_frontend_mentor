import { useEffect, useRef, useState } from 'react'
import './optionsModal-style.css'
import { faDollarSign } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import useWindowSize from '../../useWindowSize'

function CardModal({ pledge, isSelected, onSelect, onSubmitPledge }) {

	const isPledgeWithNoReward = pledge.reward.id === 0;
	const minimumPledge = isPledgeWithNoReward ? 5 : pledge.reward.minimumPledge;
	const isDisabled = isPledgeWithNoReward ? false : pledge.reward.outOfStock;

	const [enteredPledge, setEnteredPledge] = useState(minimumPledge)

	const handleSubmit = (e) => {
		e.preventDefault();
		onSubmitPledge({
			amount: enteredPledge,
			rewardId: pledge.id,
		});
	};

	const focusedDiv = useRef()

	useEffect(() => {
		if (isSelected) focusedDiv.current.focus()
	}, [isSelected])

	const size = useWindowSize() 

	return (
		<div className={`reward_modal ${isDisabled ? "out_of_stock" : ''}`}>

			<div className="reward_modal_wrapper">
				<label
					htmlFor={pledge.reward.title}
					className='radio radio_label'
					ref={focusedDiv}
					tabIndex="-1"
					onClick={onSelect}
				>
					{pledge.reward.title}
					{pledge.reward.pledge &&
						<span>{pledge.reward.pledge}</span>
					}
					<input
						type="radio"
						value={pledge.reward.title}
						checked={isSelected}
						onChange={onSelect}
						disabled={pledge.reward.outOfStock}
						className="radio_modal"
					/>
					<span className="checkmark"></span>

				</label>

				{!isPledgeWithNoReward && size.width > 830 ?
					(<div className="reward_modal_pledge_left">
						<h3>{pledge.reward.pledgeLeft}<span>left</span></h3>
					</div>) : null
				}
			</div>

			<p className='description_modal'>{pledge.reward.description}</p>

			{!isPledgeWithNoReward && size.width <= 830 ?
				(<div className="reward_modal_pledge_left">
					<h3>{pledge.reward.pledgeLeft}<span>left</span></h3>
				</div>) : null
			}

			{isSelected &&
				<div className="pledge_input_container">
					<p>Enter your pledge</p>
					<div className="input_wrapper">
						<div className="input_container">
							<FontAwesomeIcon icon={faDollarSign} id="input_img" />
							<input
								type="text"
								id="input"
								value={enteredPledge}
								onChange={(e) => setEnteredPledge(e.target.value)}
							/>
						</div>
						<button onClick={handleSubmit}>Continue</button>
					</div>
				</div>
			}
		</div>
	)
}

export default CardModal

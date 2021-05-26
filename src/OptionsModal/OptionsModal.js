import React from 'react'
import './optionsModal-style.css'

function CardModal({ data }) {
	const [isChecked, setIsChecked] = React.useState('')

	return (
		<>
			{
				data.map(option => {
					return <div key={option.title} className={`card ${option.outOfStock ? "out-of-stock" : ''}`}>

						<div className="card-modal-wrapper">
							<input
								type="radio"
								value={option.title}
								checked={isChecked === option.title}
								onChange={() => setIsChecked(option.title)}
							/>

							<div className="card-title-container">
								<h3>{option.title}</h3>
								{option.pledge &&
									<p>{option.pledge}</p>
								}
							</div>
							{option.pledgeLeft &&
								<div className="card-modal-pledge-left">
									<h3>{option.pledgeLeft}<span>left</span></h3>
								</div>
							}
						</div>

						<p>{option.description}</p>
						{option.title === isChecked &&
							<div className="pledge-input-container">
								<p>Enter your pledge</p>
								<div>
									<input type="text" />
									<button>Continue</button>
								</div>
							</div>
						}
					</div>
				})
			}

		</>
	)
}

export default CardModal

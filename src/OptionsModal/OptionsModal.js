import React from 'react'
import './optionsModal-style.css'

function CardModal({ data }) {
	const [isChecked, setIsChecked] = React.useState(false)

	return (
		<>
			{
				data.map(card => {
					return <div key={card.title} className={`card ${card.outOfStock ? "out-of-stock" : ''}`}>

						<div className="card-modal-wrapper">
							<input
								type="radio"
								value={card.title}
								checked={isChecked}
								onChange={() => setIsChecked(true)}
							/>

							<div className="card-title-container">
								<h3>{card.title}</h3>
								{card.pledge &&
									<p>{card.pledge}</p>
								}
							</div>
							{card.pledgeLeft &&
								<div className="card-modal-pledge-left">
									<h3>{card.pledgeLeft}<span>left</span></h3>
								</div>
							}
						</div>

						<p>{card.description}</p>
						{isChecked &&
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

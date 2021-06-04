import './reward-style.css'

const Reward = ({ data, handleBacked, setShowModal }) => {
	return (
		<>
			{
				data
					.slice(1)
					.map(card => {
						return <div key={card.title} className={`card ${card.outOfStock ? "out_of_stock" : ''}`}>
							<div className="card_header">
								<h3>{card.title}</h3>
								<p>{card.pledge}</p>
							</div>

							<p>{card.description}</p>

							<div className="card_footer">
								<h2>{card.pledgeLeft}<span>left</span></h2>
								<button
									className={`${card.outOfStock ? "out_of_stock-btn" : ''}`}
									onClick={() => setShowModal(true)}
								>
									{card.buttonTitle}
								</button>
							</div>
						</div>
					})
			}
		</>
	)
}

export default Reward

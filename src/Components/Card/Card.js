import './card-style.css'

const Card = ({ data, handleBacked }) => {
	return (
		<>
			{
				data
				.slice(1)
				.map(card => {
					return <div key={card.title} className={`card ${card.outOfStock ? "out-of-stock" : ''}`}>
						<div className="card-header">
							<h3>{card.title}</h3>
							<p>{card.pledge}</p>
						</div>

						<p>{card.description}</p>

						<div className="card-footer">
							<h2>{card.pledgeLeft}<span>left</span></h2>
							<button className={`${card.outOfStock ? "out-of-stock-btn" : ''}`} onClick={() => handleBacked(card.pledgeAmount)}>
								{card.buttonTitle}
							</button>
						</div>
					</div>
				})
			}

		</>
	)
}

export default Card
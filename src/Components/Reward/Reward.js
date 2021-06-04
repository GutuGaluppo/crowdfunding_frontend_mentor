import './reward-style.css'

const Reward = ({ data, handleBacked, setShowModal }) => {
	return (
		<>
			{
				data
					.slice(1)
					.map(item => {
						return <div key={item.title} className={`reward ${item.outOfStock ? "out_of_stock" : ''}`}>
							<div className="reward_header">
								<h3>{item.title}</h3>
								<p>{item.pledge}</p>
							</div>

							<p>{item.description}</p>

							<div className="reward_footer">
								<h2>{item.pledgeLeft}<span>left</span></h2>
								<button
									className={`${item.outOfStock ? "out_of_stock-btn" : ''}`}
									onClick={() => setShowModal(true)}
								>
									{item.buttonTitle}
								</button>
							</div>
						</div>
					})
			}
		</>
	)
}

export default Reward

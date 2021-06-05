import './reward-style.css'

const Reward = ({ data, openPledgeModal }) => {
	const { title, pledge, description, outOfStock, pledgeLeft, buttonTitle } = data;

	return <div key={title} className={`reward ${outOfStock ? "out_of_stock" : ''}`}>
		<div className="reward_header">
			<h3>{title}</h3>
			<p>{pledge}</p>
		</div>

		<p>{description}</p>

		<div className="reward_footer">
			<h2>{pledgeLeft}<span>left</span></h2>
			<button
				className={`${outOfStock ? "out_of_stock-btn" : ''}`}
				onClick={openPledgeModal}
			>
				{buttonTitle}
			</button>
		</div>
	</div>

}

export default Reward

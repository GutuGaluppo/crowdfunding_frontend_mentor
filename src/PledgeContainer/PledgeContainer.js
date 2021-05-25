import * as React from 'react'
import './pledgeContainer-style.css'
import ProgressBar from '../ProgressBar/ProgressBar'

function PledgeContainer() {
	const [backed, setBacked] = React.useState(89.914)
	const [totalBacked, setTotalBacked] = React.useState(5.007)
	const [daysLeft, setDaysLeft] = React.useState(56)

	return (
		<section className="pledge-wrapper">
			<div className="pledge-container">
				<div>
					<h2>${backed}</h2>
					<p>of $100,000 backed</p>
				</div>
				<div>
					<h2>{totalBacked}</h2>
					<p>total backers</p>
				</div>
				<div>
					<h2>{daysLeft}</h2>
					<p>days left</p>
				</div>
			</div>

			<div className="progress-bar">
				<ProgressBar completed={backed} />
			</div>
		</section>
	)
}

export default PledgeContainer

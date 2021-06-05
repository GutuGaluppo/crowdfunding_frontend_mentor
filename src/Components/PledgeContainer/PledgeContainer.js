import './pledgeContainer-style.css'
import ProgressBar from '../ProgressBar/ProgressBar'

function PledgeContainer({ backed, totalBackers, daysLeft, amountToRaise }) {

	var formatAmount = new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD',
		maximumFractionDigits: 0
	})

	function formatNumber(num) {
		return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
	}

	function progressBarPorcentage(num) {
		if (num >= amountToRaise) return
		return num / 1000
	}

	return (
		<section className="pledge_wrapper">
			<div className="pledge_container">
				<div>
					<h2>{formatAmount.format(backed)}</h2>
					<p>of $100,000 backed</p>
				</div>
				<hr />
				<div>
					<h2>{formatNumber(totalBackers)}</h2>
					<p>total backers</p>
				</div>
				<hr />
				<div>
					<h2>{daysLeft}</h2>
					<p>days left</p>
				</div>
			</div>
			<div>
				<ProgressBar completed={progressBarPorcentage(backed)} />
			</div>
		</section>
	)
}

export default PledgeContainer

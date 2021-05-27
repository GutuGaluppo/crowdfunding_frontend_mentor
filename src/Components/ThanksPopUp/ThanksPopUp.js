import './thanksPopUp-style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function ThanksPopUp({ setShowThanks }) {
	return (
		<div className="popup_container">
			<div className="pop_content">
				<div className="check_logo">
					<FontAwesomeIcon icon={['far', 'check']} />
				</div>
				<h2>Thanks for your support!</h2>
	
				<p>
					Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. You will get
					an email once our campaign is completed.
				</p>
				<button
					onClick={() => setShowThanks(false)}
					className="tnk_btn"
				>
					Got it!
					</button>
			</div>
		</div>
	)
}

export default ThanksPopUp
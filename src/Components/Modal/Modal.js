import './modal-style.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import OptionsModal from '../OptionsModal/OptionsModal';
import { crowdfundData } from '../../Utils'

function Modal({ setShowModal, handleBacked, setShowThanks }) {
	return (
		<div className="modal">
			<section className="modal_main">
				<div className="modal_close_btn">
					<FontAwesomeIcon
						icon={['far', 'times']}
						onClick={() => setShowModal(false)}
						className="icon"
					/>
				</div>
				<h1>Back this project</h1>
				<p>Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?</p>

				<div>
					<OptionsModal
						data={crowdfundData}
						handleBacked={handleBacked}
						setShowThanks={setShowThanks}
						setShowModal={setShowModal}
					/>
				</div>
			</section>
		</div>
	)
}

export default Modal

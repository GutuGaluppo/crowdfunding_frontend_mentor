import './modal-style.css'
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import OptionsModal from '../OptionsModal/OptionsModal';
import { crowdfundData } from '../../Utils'

function Modal({ setShowModal }) {
	return (
		<div className="modal">
			<section className="modal_main">
				<div onClick={() => setShowModal(false)} className="modal_close_btn">
					<FontAwesomeIcon icon={faTimes} />
				</div>
				<h1>Back this project</h1>
				<p>Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?</p>

				<div className="cards_container">
					<OptionsModal data={crowdfundData} />
				</div>
			</section>
		</div>
	)
}

export default Modal

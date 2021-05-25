import React from 'react'
import './modal-style.css'
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import OptionsModal from '../OptionsModal/OptionsModal';

function Modal({ setShowModal, data }) {
	return (
		<div className="modal">
			<section className="modal-main">
				<div onClick={() => setShowModal(false)} className="modal-close-btn">
					<FontAwesomeIcon icon={faTimes} />
				</div>
				<h1>Back this project</h1>
				<p>Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?</p>

				<div className="cards-container">
					<OptionsModal data={data} />
				</div>
			</section>
		</div>
	)
}

export default Modal

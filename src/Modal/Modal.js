import React from 'react'
import './modal-style.css'
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Modal({ setShowModal }) {
	return (
		<div className="modal">
			<section className="modal-main">
				<div onClick={() => setShowModal(false)}><FontAwesomeIcon icon={faTimes} /></div>
				<h1>Back this project</h1>
				<p>Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?</p>

				
			</section>
		</div>
	)
}

export default Modal

import React from 'react'
import "./subHeader-style.css"
import useToggle from '../useToggle'
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SubHeader = ({ setShowModal }) => {
	const [bookmarked, setBookmarked] = useToggle()

	return (
		<section className="sub-header">
			<div className="master-logo">
				<span>
					M
				</span>
			</div>
			<h2>Mastercraft Bamboo Monitor Riser</h2>
			<p>A beautiful & handcrafted monitor stand to reduce neck and eye strain.</p>
			<div className="call-to-action">
				<button className="btn-back-project" onClick={setShowModal}>Back this project</button>
				<div className="bookmark-container">
					<button className={`btn-bookmark ${bookmarked ? 'bookmarked' : ''}`} onClick={setBookmarked}>
						<FontAwesomeIcon icon={faBookmark} />
					</button>
					<span className={`${bookmarked ? 'bookmarked-text' : ''}`}>
						{bookmarked ? 'Bookmarked' : 'Bookmark'}
					</span>
				</div>
			</div>
		</section>
	)
}

export default SubHeader

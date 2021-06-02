import React from 'react'
import "./subHeader-style.css"
import useToggle from '../../useToggle'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SubHeader = ({ setShowModal }) => {
	const [bookmarked, setBookmarked] = useToggle()

	return (
		<section className="sub_header">
			<div className="master_logo">
				<span>
					M
				</span>
			</div>
			<h2>Mastercraft Bamboo Monitor Riser</h2>
			<p>A beautiful & handcrafted monitor stand to reduce neck and eye strain.</p>
			<div className="call_to_action">
				<button onClick={setShowModal}>Back this project</button>
				<div className="bookmark_container">
					<button className={`btn_bookmark ${bookmarked ? 'bookmarked' : ''}`} onClick={setBookmarked}>
						<FontAwesomeIcon icon={['fas', 'bookmark']} />
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

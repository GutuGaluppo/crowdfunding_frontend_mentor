import React from 'react'
import "./subHeader-style.css"

import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SubHeader = () => {
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
				<button className="btn-back-project">Back this project</button>
				<div className="bookmark-container">
					<button className="btn-bookmark">
						<FontAwesomeIcon icon={faBookmark} />
					</button>
					<span>Bookmarked</span>
				</div>
			</div>
		</section>
	)
}

export default SubHeader

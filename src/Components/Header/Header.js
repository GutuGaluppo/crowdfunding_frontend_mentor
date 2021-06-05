import React from 'react'
import "./header-style.css"
import useToggle from '../../useToggle'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const logo = "https://raw.githubusercontent.com/pjazanes/crowdfunding-product-page-main/6a4f9a295a6d0c6e4e2fe6ef6b93a3dcf50481d6/images/logo-mastercraft.svg"

const Header = ({ openPledgeModal }) => {
	const [bookmarked, setBookmarked] = useToggle()

	return (
		<section className="sub_header">
			<div className="master_logo">
				<img src={logo} alt="MasterCraft Logo" />
			</div>
			<h2>Mastercraft Bamboo Monitor Riser</h2>
			<p>A beautiful & handcrafted monitor stand to reduce neck and eye strain.</p>
			<div className="call_to_action">
				<button onClick={() => openPledgeModal(0)}>Back this project</button>
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

export default Header

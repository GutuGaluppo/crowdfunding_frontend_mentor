import './navbar.css'
import { ReactComponent as Logo } from '../../images/logo.svg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import useToggle from '../../useToggle'
import NavMobile from './NavMobile/NavMobile'

export default function Navbar() {
	const [showMenu, setShowMenu] = useToggle(false)

	return (
		<div className="hero">
			<nav>
				<div className="nav_conteiner">
					<div id="logo">
						<Logo />
					</div>
					<ul>
						<li>
							<a href="about">About</a>
						</li>
						<li>
							<a href="disover">Disover</a>
						</li>
						<li>
							<a href="getstarted">Get Started</a>
						</li>
					</ul>
					<div className="menu" onClick={setShowMenu}>
						{!showMenu ? (
							<FontAwesomeIcon icon={['fas', 'bars']} style={{ color: 'white' }} />
						) : (
							<>
								<FontAwesomeIcon icon={['fas', 'times']} style={{ color: 'white' }} />
								<NavMobile/>
							</>
						)}
					</div>
				</div>
			</nav>
		</div>
	)
}

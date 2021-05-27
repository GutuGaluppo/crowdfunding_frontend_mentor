import './navbar.css'
import { ReactComponent as Logo } from '../../images/logo.svg'

export default function Navbar() {
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
				</div>
			</nav>
		</div>
	)
}

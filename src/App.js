import AboutContainer from './AboutContainer.js/AboutContainer'
import './index.css'
import Navbar from './Navbar/Navbar'
import PledgeContainer from './PledgeContainer/PledgeContainer'
import SubHeader from './SubHeader/SubHeader'

function App() {
	return (
		<>
			<Navbar />
			<main>
				<SubHeader />
				<PledgeContainer />
				<AboutContainer />
			</main>
		</>
	);
}

export default App;

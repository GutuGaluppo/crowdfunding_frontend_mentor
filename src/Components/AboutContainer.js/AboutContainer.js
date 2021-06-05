import Reward from '../Reward/Reward'
import './aboutContainer-style.css'

function AboutContainer({ rewards, openPledgeModal }) {
	return (
		<section className="about_wrapper">
			<div className="about_container">
				<h3>About this project</h3>
				<p>
					The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen
					to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve
					your posture and make you more comfortable while at work, helping you stay focused on the task at hand.
				</p>
				<br />
				<p>
					Featuring artisan craftsmanship,
					the simplicity of design creates extra desk space below your computer
					to allow notepads, pens, and USB sticks to be stored under the stand.
				</p>
				{rewards.slice(1).map(reward => {
					return (
						<Reward
							key={reward.id}
							data={reward}
							openPledgeModal={() => openPledgeModal(reward.id)}
						/>
					)
				})}

			</div>
		</section>
	)
}

export default AboutContainer

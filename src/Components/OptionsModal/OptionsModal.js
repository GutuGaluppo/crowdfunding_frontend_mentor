import { useEffect, useRef, useState } from 'react'
import './optionsModal-style.css'
import { faDollarSign } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function CardModal({ data, handleBacked, setShowThanks, setShowModal }) {
	const [isChecked, setIsChecked] = useState('')
	const [amount, setAmount] = useState(0)

	const handleChange = e => {
		setAmount(Number(e.target.value))
	}

	const handleOnClick = () => {
		handleBacked(amount)
		setShowThanks(true)
		setShowModal(false)
	}

	const focusedDiv = useRef()

	useEffect(() => {
		focusedDiv.current.focus()
	}, [focusedDiv])

	return (
		<>
			{
				data.map(option => {
					return <div key={option.title} className={`card_modal ${option.outOfStock ? "out_of_stock" : ''}`}>

						<div className="card_modal_wrapper">
							<div style={{ display: 'flex' }}>
								<div className="radio" onClick={() => setIsChecked(option.title)}>
									<input
										type="radio"
										value={option.title}
										checked={isChecked === option.title}
										onChange={() => setIsChecked(option.title)}
										disabled={option.outOfStock}
										className="radio_modal"
									/>
									<label htmlFor={option.title} className='radio_label' ref={focusedDiv} tabIndex="-1">
										{option.title}
									</label>
								</div>

								{option.pledge &&
									<p className="card_modal_pledge">{option.pledge}</p>
								}
							</div>

							{option.pledgeLeft &&
								<div className="card_modal_pledge_left">
									<h3>{option.pledgeLeft}<span>left</span></h3>
								</div>
							}
						</div>

						<p className='description_modal'>{option.description}</p>

						{option.title === isChecked &&
							<div className="pledge_input_container">
								<p>Enter your pledge</p>
								<div className="input_wrapper">
									<div className="input_container">
										<FontAwesomeIcon icon={faDollarSign} id="input_img" />
										<input
											type="text"
											id="input"
											defaultValue={option.pledgeAmount}
											onChange={handleChange}
										/>
									</div>
									<button onClick={handleOnClick}>Continue</button>
								</div>
							</div>
						}
					</div>
				})
			}

		</>
	)
}

export default CardModal

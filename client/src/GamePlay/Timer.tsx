import { FC, useState } from 'react'

const Timer: FC = () => {
	const [timer, setTimer] = useState(60)
	const [showStart, setShowStart] = useState(true)
	const [stressState, setStressState] = useState<string>('')
	const [stress] = useState(() => new Audio('./RunAmok.mp3'))
	const [driveAway] = useState(() => new Audio('./driveAway.mp3'))
	const startTimer = () => {
		setShowStart(false)
		setStressState('')
		playAudio()
		const timerInterval = setInterval(() => {
			setTimer((prevTime) => {
				if (prevTime <= 30) {
					stress.volume = 0.6
					setStressState('stress')
				}
				if (prevTime <= 20) {
					stress.volume = 1
					setStressState('stress fucksake-darling')
				}
				if (prevTime <= 0) {
					clearInterval(timerInterval)
					stress.volume = 0
					driveAway.currentTime = 0
					driveAway.volume = 1
					driveAway.play()
					alert('Trev drove off')
					return 0
				}
				return prevTime - 1
			})
		}, 1000)
	}

	const reset = (): void => {
		setTimer(60)
		startTimer()
	}

	const playAudio = () => {
		stress.currentTime = 0
		stress.volume = 0.3
		stress.play()
	}

	return (
		<>
			{showStart && (
				<div className="start-wrapper">
					<p>
						Collect as many mushrooms as you can before Big Trev drives off!{' '}
					</p>
					<div
						aria-roledescription="button"
						className="start"
						onClick={startTimer}
					>
						Start
					</div>
				</div>
			)}
			{!showStart && timer === 0 && (
				<div
					className="start"
					onClick={reset}
				>
					Reset
				</div>
			)}

			<div className={`timer ${stressState}`}>{timer}</div>
		</>
	)
}

export default Timer

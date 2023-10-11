import { FC } from 'react'
import Menu from './Menu'
import { Points } from './Points'
import Timer from './Timer'

const GamePlayOverlay: FC = () => {
	return (
		<>
			<div className="gamePlayOverlay">
				<Menu />
				<Points />
				<Timer />
			</div>
		</>
	)
}

export default GamePlayOverlay

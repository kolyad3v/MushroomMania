import { FC } from 'react'
import { usePoints } from '../context/Points/PointsState'

export const Points: FC = () => {
	const [pointsState] = usePoints()
	// @ts-ignore
	const { count } = pointsState
	return <div className="points">🍄 {count}</div>
}

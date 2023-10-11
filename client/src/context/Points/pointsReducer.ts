import { PointsActions } from '../types'
const { ADD_POINTS, RESET } = PointsActions

type Action = {
	type: PointsActions
	payload: number
}

const pointsReducer = (state: { count: number }, action: Action) => {
	switch (action.type) {
		case ADD_POINTS:
			return {
				...state,
				count: state.count + action.payload,
			}

		case RESET:
			return {
				...state,
				count: 0,
			}

		default:
			throw new Error(`Unsupported type of : ${action.type}`)
	}
}

export default pointsReducer

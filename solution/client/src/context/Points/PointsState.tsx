import { useReducer, useContext } from 'react'
import { PointsContext } from './pointsContext'

import { PointsActions } from '../types'
import pointsReducer from './pointsReducer'
const { ADD_POINTS, RESET } = PointsActions

export const usePoints = () => {
	const { state, dispatch } = useContext(PointsContext)
	return [state, dispatch]
}

export const addPoints = (dispatch: any, pointsToAdd: number): void => {
	dispatch({
		type: ADD_POINTS,
		payload: pointsToAdd,
	})
}

export const reset = (dispatch: any): void => {
	dispatch({
		type: RESET,
	})
}

export const PointsState = (props: any) => {
	const initialState = {
		count: 0,
	}

	const [state, dispatch] = useReducer(pointsReducer, initialState)

	return (
		<PointsContext.Provider value={{ state, dispatch }}>
			{props.children}
		</PointsContext.Provider>
	)
}

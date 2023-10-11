import { createContext } from 'react'

interface PointsState {
	count: number
}

interface PointsContextProps {
	state: PointsState
	dispatch: React.Dispatch<any>
}

export const PointsContext = createContext<PointsContextProps>({
	state: {
		count: 0,
	},
	dispatch: () => {},
})

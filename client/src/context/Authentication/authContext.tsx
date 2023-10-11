import { createContext } from 'react'

interface AuthState {
	token: string | null
	isAuthenticated: boolean
	loading: boolean
	player: any
	error: any
}

interface AuthContextProps {
	state: AuthState
	dispatch: React.Dispatch<any>
}

export const AuthContext = createContext<AuthContextProps>({
	state: {
		token: localStorage.getItem('token'),
		isAuthenticated: false,
		loading: false,
		player: null,
		error: null,
	},
	dispatch: () => {},
})

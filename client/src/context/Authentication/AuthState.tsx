import { useReducer, useContext, useEffect } from 'react'
import axios from 'axios'
import { AuthContext } from './authContext.tsx'
import authReducer from './authReducer.tsx'
import setAuthToken from '../../utils/setAuthToken'

import {
	REGISTER_SUCCESS,
	REGISTER_FAIL,
	PLAYER_LOADED,
	AUTH_ERROR,
	LOGIN_SUCCESS,
	LOGOUT,
	CLEAR_ERRORS,
} from '../types.ts'

export const useAuth = () => {
	const { state, dispatch } = useContext(AuthContext)
	return [state, dispatch]
}

// load player
export const loadPlayer = async (dispatch: any) => {
	try {
		console.log('try player load')
		let data = {
			headers: {
				'X-Auth-Token': localStorage.getItem('token'),
			},
		}
		const res = await axios.get('/api/auth', data)

		dispatch({ type: PLAYER_LOADED, payload: res.data })
		console.log('player loaded')
	} catch (err) {
		dispatch({ type: AUTH_ERROR })
	}
}

// register player
export const register = async (dispatch: any, formData: any) => {
	try {
		const res = await axios.post('/api/players', formData)

		dispatch({
			type: REGISTER_SUCCESS,
			payload: res.data,
		})
		localStorage.setItem('token', res.data.token)
		loadPlayer(dispatch)
	} catch (err: any) {
		dispatch({
			type: REGISTER_FAIL,
			payload: err.response.data.msg,
		})
	}
}

// log in player
export const loginPlayer = async (dispatch: any, formData: any) => {
	try {
		const res = await axios.post('/api/auth', formData)

		dispatch({
			type: LOGIN_SUCCESS,
			payload: res.data,
		})
		console.log(res.data, "this is the action.payload we're tyring to spread")
		localStorage.setItem('token', res.data.token)
		loadPlayer(dispatch)
	} catch (err: any) {
		console.log(err)
	}
}
// logout player
export const logoutPlayer = (dispatch: any) => {
	localStorage.clear()
	dispatch({
		type: LOGOUT,
	})
}
// clear errors
export const clearErrors = (dispatch: any) => {
	dispatch({ type: CLEAR_ERRORS })
}

const AuthState = (props: any) => {
	const initialState = {
		token: localStorage.getItem('token'),
		isAuthenticated: false,
		loading: false,
		player: null,
		error: null,
	}

	const [state, dispatch] = useReducer(authReducer, initialState)

	// if (state.token) {
	// 	loadPlayer(dispatch)
	// }

	useEffect(() => {
		if (state.token) {
			loadPlayer(dispatch)
		}
	}, [])

	useEffect(() => {
		setAuthToken(state.token)
		console.log(state)
	}, [state.token])

	return (
		<AuthContext.Provider
			value={{
				state: state,
				dispatch,
			}}
		>
			{props.children}
		</AuthContext.Provider>
	)
}

export default AuthState

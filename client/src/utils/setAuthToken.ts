import axios, { AxiosHeaders } from 'axios'

const setAuthToken = (
	token: string | number | boolean | AxiosHeaders | string[] | null | undefined
) => {
	if (token) {
		console.log('set auth token ran ')
		axios.defaults.headers.common['x-auth-token'] = token
	} else {
		delete axios.defaults.headers.common['x-auth-token']
	}
}

export default setAuthToken

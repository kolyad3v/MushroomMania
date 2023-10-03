import UserAuth from './UserAuthenticationPages/UserAuth'
import setAuthToken from './utils/setAuthToken'
import AuthState from './context/Authentication/AuthState'
const App = () => {
	if (localStorage.token) {
		setAuthToken(localStorage.token)
	}
	return (
		<AuthState>
			<UserAuth />
		</AuthState>
	)
}

export default App

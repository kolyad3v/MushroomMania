import UserAuth from './UserAuthenticationPages/UserAuth'
import setAuthToken from './utils/setAuthToken'
import AuthState from './context/Authentication/AuthState'
import { PointsState } from './context/Points/PointsState'
const App = () => {
	if (localStorage.token) {
		setAuthToken(localStorage.token)
	}
	return (
		<AuthState>
			<PointsState>
				<UserAuth />
			</PointsState>
		</AuthState>
	)
}

export default App

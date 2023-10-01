import { useState } from 'react'
import { Canvas } from '@react-three/fiber'
import Experience from './ThreeJS/Experience'
import UserAuth from './UserAuthenticationPages/UserAuth'
import setAuthToken from './utils/setAuthToken'

const App = () => {
	const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false)

	if (localStorage.token) {
		setAuthToken(localStorage.token)
	}

	return (
		<>
			<Canvas
				camera={{
					fov: 45,
					near: 0.1,
					far: 2000,
					position: [-3, 1.5, 4],
				}}
				shadows
			>
				<Experience />
			</Canvas>

			<UserAuth />
		</>
	)
}

export default App

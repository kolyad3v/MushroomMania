import { FC, useState } from 'react'
import { logoutPlayer, useAuth } from '../context/Authentication/AuthState'

const Menu: FC = () => {
	const [, authDispatch] = useAuth()
	const [showMenu, setShowMenu] = useState(false)

	const handleLogout = (): void => {
		logoutPlayer(authDispatch)
	}
	return (
		<div className="menu">
			{showMenu ? (
				<ul>
					<li onClick={handleLogout}>Logout</li>
					<li>History</li>
					<li
						onClick={() => {
							setShowMenu(false)
						}}
					>
						Close
					</li>
				</ul>
			) : (
				<ul>
					<li
						onClick={() => {
							setShowMenu(true)
						}}
					>
						Menu
					</li>
				</ul>
			)}
		</div>
	)
}

export default Menu

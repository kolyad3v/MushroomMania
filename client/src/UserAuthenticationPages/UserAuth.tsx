import { ChangeEvent, FC, FormEvent, useState } from 'react'
import {
	loginPlayer,
	register,
	useAuth,
} from '../context/Authentication/AuthState'
import { Canvas } from '@react-three/fiber'
import Experience from '../ThreeJS/Experience'

const UserAuth: FC = () => {
	interface IForm {
		username: string
		email: string
		password: string
		passwordConfirm: string
	}

	const [userForm, setUserForm] = useState<IForm>({
		username: '',
		email: '',
		password: '',
		passwordConfirm: '',
	})
	const {
		username,
		email,
		password,
		passwordConfirm,
	}: {
		username: string
		email: string
		password: string
		passwordConfirm: string
	} = userForm

	const [showLogInPage, setShowLogInPage] = useState<boolean>(true)

	const [, authDispatch] = useAuth()

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setUserForm({ ...userForm, [e.target.name]: e.target.value })
	}

	const handleSubmit = (e: FormEvent): void => {
		e.preventDefault()
		if (email === '' || password === '') {
			alert('Please enter all fields')
			return
		}
		if (showLogInPage) {
			console.log(userForm)
			loginPlayer(authDispatch, {
				email,
				password,
			})
		} else {
			if (password !== passwordConfirm) {
				alert('Passwords do not match')
				return
			}
			console.log('register user')
			register(authDispatch, {
				username,
				email,
				password,
			})
		}
	}
	const [authState] = useAuth()
	const { isAuthenticated } = authState

	if (isAuthenticated) {
		return (
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
		)
	}

	return (
		<div id='auth-page'>
			<h1>BMMM</h1>
			<form action='POST'>
				{!showLogInPage && (
					<>
						<label htmlFor='username'>Username</label>
						<input
							type='text'
							name='username'
							value={username}
							onChange={handleChange}
						/>
					</>
				)}
				<label htmlFor='email'>Email</label>
				<input
					type='email'
					name='email'
					value={email}
					onChange={handleChange}
				/>
				<label htmlFor='password'>Password</label>

				<input
					type='password'
					name='password'
					value={password}
					onChange={handleChange}
				/>
				{!showLogInPage && (
					<>
						<label htmlFor='passwordConfirm'>Password Confirm</label>
						<input
							type='password'
							name='passwordConfirm'
							value={passwordConfirm}
							onChange={handleChange}
						/>
					</>
				)}
				<button onClick={handleSubmit}>
					{showLogInPage ? 'Sign In' : 'Register'}
				</button>
				{!showLogInPage && (
					<p className='change-auth-button'>
						Already been in the mania?{' '}
						<strong onClick={() => setShowLogInPage(true)}>Sign In</strong>
					</p>
				)}
				{showLogInPage && (
					<p className='change-auth-button'>
						No account?{' '}
						<strong onClick={() => setShowLogInPage(false)}>Register </strong>instead
					</p>
				)}

				<p
					style={{ cursor: 'pointer' }}
					onClick={() => {
						loginPlayer(authDispatch, {
							email: 'guest@gmail.com',
							password: '123123',
						})
					}}
				>
					Or play as guest
				</p>
			</form>
		</div>
	)
}

export default UserAuth

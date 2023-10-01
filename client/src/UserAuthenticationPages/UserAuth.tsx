import { ChangeEvent, FC, FormEvent, useState } from 'react'

const UserAuth: FC = () => {
	const [userForm, setUserForm] = useState({
		email: '',
		password: '',
		passwordConfirm: '',
	})
	const { email, password } = userForm

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setUserForm({ ...userForm, [e.target.name]: e.target.value })
	}

	const [showLogInPage, setshowLogInPage] = useState<boolean>(true)

	const handleSubmit = (e: FormEvent): void => {
		e.preventDefault()
		if (email === '' || password === '') {
			alert('Please enter all fields')
			return
		}
		if (showLogInPage) {
		} else {
			console.log('register user')
		}
	}

	return (
		<div id='sign-in-form'>
			<h1>BMMM</h1>
			<form action='POST'>
				<label htmlFor='email'>Email</label>
				<input
					type='text'
					name='email'
					value={userForm.email}
					onChange={handleChange}
				/>
				<input
					type='text'
					name='password'
					value={userForm.password}
					onChange={handleChange}
				/>
				{!showLogInPage && (
					<input
						type='text'
						name='passwordConfirm'
						value={userForm.passwordConfirm}
						onChange={handleChange}
					/>
				)}
				<button onClick={handleSubmit}>Sign In</button>
			</form>
		</div>
	)
}

export default UserAuth

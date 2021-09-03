import s from './LoginViews.module.css'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { authOperations } from '../redux/auth'

export default function LoginViews() {
	const dispatch = useDispatch()
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const handleChange = ({ target: { name, value } }) => {
		switch (name) {
			case 'email':
				return setEmail(value)
			case 'password':
				return setPassword(value)

			default:
				return
		}
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		dispatch(authOperations.logIn({ email, password }))
		setEmail('')
		setPassword('')
	}

	return (
		<div>
			<h1>Страница логина</h1>
			<form className={s.form} onSubmit={handleSubmit}>
				<label className={s.label}>
					Почта
					<input
						type="email"
						name="email"
						value={email}
						placeholder="email"
						onChange={handleChange}
						className={s.input}
					></input>
				</label>
				<label className={s.label}>
					Пароль
					<input
						type="password"
						name="password"
						value={password}
						placeholder="password"
						onChange={handleChange}
						className={s.input}
					></input>
				</label>
				<button type="submit">Войти</button>
			</form>
		</div>
	)
}

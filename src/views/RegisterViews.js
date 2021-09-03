import s from './RegistersViews.module.css'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { authOperations } from '../redux/auth'

function RegisterViews() {
	const dispatch = useDispatch()
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const handleChange = ({ target: { name, value } }) => {
		switch (name) {
			case 'name':
				return setName(value)

			case 'email':
				return setEmail(value)

			case 'password':
				return setPassword(value)

			default:
				return
		}
	}
	console.log(name)

	const handleSubmit = (e) => {
		e.preventDefault()
		dispatch(authOperations.register({ name, email, password }))
		setName('')
		setEmail('')
		setPassword('')
	}

	return (
		<div className={s.container}>
			<h1> Страница регистрации</h1>
			<form onSubmit={handleSubmit} className={s.form}>
				<label className={s.label}>
					Имя
					<input
						type="text"
						name="name"
						value={name}
						placeholder="name"
						onChange={handleChange}
						className={s.input}
					></input>
				</label>
				<label className={s.label}>
					Почта
					<input
						type="email"
						name="email"
						value={email}
						placeholder="mail"
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
				<button type="submit">
					<span>Зарегистрироваться</span>
				</button>
			</form>
		</div>
	)
}

export default RegisterViews

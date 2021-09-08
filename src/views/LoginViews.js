import s from './LoginViews.module.css'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { authOperations } from '../redux/auth'
import { Button, Form } from 'react-bootstrap'
import { toast } from 'react-toastify'

export default function LoginViews() {
	const dispatch = useDispatch()
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const handlerChange = ({ target: { name, value } }) => {
		switch (name) {
			case 'email':
				return setEmail(value)
			case 'password':
				return setPassword(value)

			default:
				return
		}
	}

	const handlerSubmit = (e) => {
		e.preventDefault()

		email.length === 0 || password.length === 0
			? toast.error('Заполните все поля', {
					theme: 'colored',
			  })
			: dispatch(authOperations.logIn({ email, password }))
		setEmail('')
		setPassword('')
	}

	// return (
	// 	<div className={s.login}>
	// 		<h1>Страница логина</h1>
	// 		<Form className={s.form} onSubmit={handlerSubmit}>
	// 			<label className={s.label}>
	// 				Почта
	// 				<input
	// 					type="email"
	// 					name="email"
	// 					value={email}
	// 					placeholder="email"
	// 					onChange={handleChange}
	// 					className={s.input}
	// 				></input>
	// 			</label>
	// 			<label className={s.label}>
	// 				Пароль
	// 				<input
	// 					type="password"
	// 					name="password"
	// 					value={password}
	// 					placeholder="password"
	// 					onChange={handleChange}
	// 					className={s.input}
	// 				></input>
	// 			</label>
	// 			<Button variant="primary" width="100px" type="submit">
	// 				Войти
	// 			</Button>
	// 		</Form>
	// 	</div>
	// )
	return (
		<div className={s.login}>
			<h1>Log in</h1>
			<Form onSubmit={handlerSubmit}>
				<Form.Group className="mb-2" controlId="formBasicEmail">
					<Form.Label>Email address</Form.Label>
					<Form.Control
						type="email"
						placeholder="Enter email"
						name="email"
						value={email}
						onChange={handlerChange}
					/>
					<Form.Text className="text-muted">
						We'll never share your email with anyone else.
					</Form.Text>
				</Form.Group>

				<Form.Group className="mb-3" controlId="formBasicPassword">
					<Form.Label>Password</Form.Label>
					<Form.Control
						type="password"
						name="password"
						value={password}
						placeholder="Password"
						onChange={handlerChange}
					/>
				</Form.Group>

				<Button variant="primary" type="submit">
					Submit
				</Button>
			</Form>
		</div>
	)
}

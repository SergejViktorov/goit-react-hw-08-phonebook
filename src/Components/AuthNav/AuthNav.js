import { NavLink } from 'react-router-dom'

function AuthNav() {
	return (
		<div>
			<NavLink to="/register">Регистрация</NavLink>
			<NavLink to="/login">Логин</NavLink>
		</div>
	)
}
export default AuthNav

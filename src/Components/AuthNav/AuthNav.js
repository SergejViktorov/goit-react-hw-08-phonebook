import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './AuthNav.module.css'

function AuthNav() {
	return (
		<div>
			<NavLink
				to="/register"
				exact
				className={s.link}
				activeClassName={s.activelink}
			>
				Регистрация
			</NavLink>
			<NavLink
				to="/login"
				exact
				className={s.link}
				activeClassName={s.activelink}
			>
				Логин
			</NavLink>
		</div>
	)
}
export default AuthNav

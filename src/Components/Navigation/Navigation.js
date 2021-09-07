import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import s from './Navigation.module.css'
import { authSelectors } from '../../redux/auth'
function Navigation() {
	const isLoggedIn = useSelector(authSelectors.getIsLoggedIn)
	return (
		<nav>
			<NavLink to="/" className={s.link}>
				Главная
			</NavLink>
			{isLoggedIn && (
				<NavLink to="/contacts" className={s.link}>
					Контфкты
				</NavLink>
			)}
		</nav>
	)
}
export default Navigation

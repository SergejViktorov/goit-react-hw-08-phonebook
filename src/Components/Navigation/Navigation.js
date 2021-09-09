import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import s from './Navigation.module.css'
import { authSelectors } from '../../redux/auth'
function Navigation() {
	const isLoggedIn = useSelector(authSelectors.getIsLoggedIn)
	return (
		<nav>
			<NavLink to="/" exact className={s.link} activeClassName={s.activelink}>
				Главная
			</NavLink>
			{isLoggedIn && (
				<NavLink
					exact
					to="/contacts"
					className={s.link}
					activeClassName={s.activelink}
				>
					Контакты
				</NavLink>
			)}
		</nav>
	)
}
export default Navigation

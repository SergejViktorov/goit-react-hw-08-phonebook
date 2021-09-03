import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './Navigation.module.css'
function Navigation() {
	return (
		<nav>
			<NavLink to="/" className={s.link}>
				Главная
			</NavLink>
			{/* <NavLink>Контфкты</NavLink> */}
		</nav>
	)
}
export default Navigation

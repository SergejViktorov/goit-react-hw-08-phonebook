import { useSelector } from 'react-redux'
import Navigation from './Navigation/Navigation'
import UserMenu from './UserMenu/UserMenu'
import s from './AppBar.module.css'
import AuthNav from './AuthNav/AuthNav'
import { authSelectors } from '../redux/auth'

function AppBar() {
	const isLoggedIn = useSelector(authSelectors.getIsLoggedIn)
	return (
		<header className={s.heder}>
			<Navigation />
			{isLoggedIn ? <UserMenu /> : <AuthNav />}
		</header>
	)
}
export default AppBar

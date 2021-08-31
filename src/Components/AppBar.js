import Navigation from './Navigation/Navigation'
import s from './AppBar.module.css'
import AuthNav from './AuthNav/AuthNav'
import UserMenu from './UserMenu/UserMenu'
function AppBar() {
	return (
		<heder className={s.heder}>
			<Navigation />
			<AuthNav />
			<UserMenu />
		</heder>
	)
}
export default AppBar

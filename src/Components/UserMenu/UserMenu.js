import { useDispatch } from 'react-redux'
import { authOperations } from '../../redux/auth'
import defaultAvatar from './defaultImg/ava.svg'
import s from './UserMenu.module.css'
function UserMenu() {
	const dispatch = useDispatch()
	return (
		<div className={s.menu}>
			<img src={defaultAvatar} alt="avatar" className={s.img}></img>
			<p>Добро пожаловать</p>
			<button type="button" onClick={() => dispatch(authOperations.logOut())}>
				Выход
			</button>
		</div>
	)
}
export default UserMenu

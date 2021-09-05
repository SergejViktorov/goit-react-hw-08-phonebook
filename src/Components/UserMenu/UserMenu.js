import { useDispatch, useSelector } from 'react-redux'
import { authOperations, authSelectors } from '../../redux/auth'
import defaultAvatar from './defaultImg/ava.svg'
import s from './UserMenu.module.css'
function UserMenu() {
	const dispatch = useDispatch()
	const name = useSelector(authSelectors.getUserName)
	return (
		<div className={s.menu}>
			<img src={defaultAvatar} alt="avatar" className={s.img}></img>
			<p>Добро пожаловать</p>
			<span>{name}</span>
			<button type="button" onClick={() => dispatch(authOperations.logOut())}>
				Выход
			</button>
		</div>
	)
}
export default UserMenu

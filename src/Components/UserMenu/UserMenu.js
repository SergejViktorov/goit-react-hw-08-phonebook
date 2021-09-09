import { useDispatch, useSelector } from 'react-redux'
import { authOperations, authSelectors } from '../../redux/auth'
import defaultAvatar from './defaultImg/ava.svg'
import s from './UserMenu.module.css'
import { Button } from 'react-bootstrap'
function UserMenu() {
	const dispatch = useDispatch()
	const name = useSelector(authSelectors.getUserName)
	return (
		<div className={s.menu}>
			<img src={defaultAvatar} alt="avatar" className={s.img}></img>
			<span className={s.text}>Добро пожаловать {name}</span>
			<Button
				variant="primary"
				type="button"
				onClick={() => dispatch(authOperations.logOut())}
			>
				Выход
			</Button>
		</div>
	)
}
export default UserMenu

import { useEffect, Suspense, lazy } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Container from './Components/Container/Container'
import { Switch } from 'react-router-dom'
import AppBar from './Components/AppBar'
import { authOperations, authSelectors } from './redux/auth'
import PrivateRoute from './Components/PrivateRoute'
import PublicRoute from './Components/PublicRoute'

const RegisterViews = lazy(() => import('./views/RegisterViews.js'))
const HomeViews = lazy(() => import('./views/HomeViews.js'))
const LoginViews = lazy(() => import('./views/LoginViews.js'))
const ContactsViews = lazy(() => import('./views/ContactsViews.js'))

function App() {
	const dispatch = useDispatch()
	const isFetchingCurrent = useSelector(authSelectors.getIsFetchingCurrent)

	useEffect(() => {
		dispatch(authOperations.fetchCurrentUser())
	}, [dispatch])
	return (
		!isFetchingCurrent && (
			<Container>
				<AppBar />

				<Switch>
					<Suspense fallback={<p>...Загружаем</p>}>
						<PublicRoute exact path="/">
							<HomeViews />
						</PublicRoute>

						<PublicRoute exact path="/register" restricted>
							<RegisterViews />
						</PublicRoute>

						<PublicRoute exact path="/login" restricted redirectTo="/contacts">
							<LoginViews />
						</PublicRoute>

						<PrivateRoute path="/contacts" redirectTo="/login">
							<ContactsViews />
						</PrivateRoute>
					</Suspense>
				</Switch>
			</Container>
		)
	)
}

export default App

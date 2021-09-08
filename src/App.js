import { useEffect, Suspense, lazy } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Container from './Components/Container/Container'
import { Switch } from 'react-router-dom'
import AppBar from './Components/AppBar'
import { authOperations, authSelectors } from './redux/auth'
import PrivateRoute from './Components/PrivateRoute'
import PublicRoute from './Components/PublicRoute'
import 'bootstrap/dist/css/bootstrap.min.css'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const RegisterViews = lazy(() =>
	import('./views/RegisterViews.js' /* webpackChunkName: "RegisterViews" */)
)
const HomeViews = lazy(() =>
	import('./views/HomeViews.js' /* webpackChunkName: "HomeView" */)
)
const LoginViews = lazy(() =>
	import('./views/LoginViews.js' /* webpackChunkName: "LoginViews" */)
)
const ContactsViews = lazy(() =>
	import('./views/ContactsViews.js' /* webpackChunkName: "ContactsViews" */)
)

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
				<ToastContainer position="top-right" autoClose={4000} closeOnClick />
			</Container>
		)
	)
}

export default App

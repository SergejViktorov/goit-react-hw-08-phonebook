import { useEffect, Suspense, lazy } from 'react'
import { useDispatch } from 'react-redux'
import Container from './Components/Container/Container'
import { Switch, Route } from 'react-router-dom'
import AppBar from './Components/AppBar'
import { authOperations } from './redux/auth'
import PrivateRoute from './Components/PrivateRoute'

const RegisterViews = lazy(() => import('./views/RegisterViews.js'))
const HomeViews = lazy(() => import('./views/HomeViews.js'))
const LoginViews = lazy(() => import('./views/LoginViews.js'))
const ContactsViews = lazy(() => import('./views/ContactsViews.js'))

function App() {
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(authOperations.fetchCurrentUser())
	}, [dispatch])
	return (
		<Container>
			<AppBar />
			<Suspense fallback={<h1>Загружаем</h1>}>
				<Switch>
					<Route exact path="/" component={HomeViews} />
					<Route path="/register" component={RegisterViews} />
					<Route path="/login" component={LoginViews} />
					{/* <Route path="/contacts" component={ContactsViews} /> */}
					<PrivateRoute path="/contacts">
						<ContactsViews />
					</PrivateRoute>
				</Switch>
			</Suspense>
		</Container>
	)
}

export default App

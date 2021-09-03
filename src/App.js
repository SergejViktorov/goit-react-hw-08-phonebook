// import ContactForm from './Components/ContactForm/ContactForm'
// import ContactList from './Components/ContactList/ContactList'
// import Filter from './Components/Filter/Filter'
import Container from './Components/Container/Container'
// import s from './App.module.css'
import { Switch, Route } from 'react-router-dom'
import AppBar from './Components/AppBar'
import RegisterViews from './views/RegisterViews'
import HomeViews from './views/HomeViews'
import LoginViews from './views/LoginViews'

function App() {
	return (
		<Container>
			<AppBar />
			{/* <div>
				<h2 className={s.title}>Phonebook</h2>
				<ContactForm />

				<h2 className={s.title}>Contacts</h2>
				<Filter />
				<ContactList />
			</div> */}
			<Switch>
				<Route exact path="/" component={HomeViews} />
				<Route path="/register" component={RegisterViews} />
				<Route path="/login" component={LoginViews} />
				<Route path="/contacts" />
			</Switch>
		</Container>
	)
}

export default App

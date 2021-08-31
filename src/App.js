import AppBar from './Components/AppBar'
import ContactForm from './Components/ContactForm/ContactForm'
import ContactList from './Components/ContactList/ContactList'
import Filter from './Components/Filter/Filter'
import Container from './Components/Container/Container'
import s from './App.module.css'

function App() {
	return (
		<Container>
			<AppBar />
			<div>
				<h2 className={s.title}>Phonebook</h2>
				<ContactForm />

				<h2 className={s.title}>Contacts</h2>
				<Filter />
				<ContactList />
			</div>
		</Container>
	)
}

export default App

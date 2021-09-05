import s from './ContactsViews.module.css'
import ContactForm from '../Components/ContactForm/ContactForm'
import ContactList from '../Components/ContactList/ContactList'
import Filter from '../Components/Filter/Filter'

export default function ContactsViews() {
	return (
		<div>
			<h2 className={s.title}>Phonebook</h2>
			<ContactForm />

			<h2 className={s.title}>Contacts</h2>
			<Filter />
			<ContactList />
		</div>
	)
}

import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'
import { v4 as uuid } from 'uuid'
import { contactsOperations, contactsSelectors } from '../../redux'
import { Button, Form } from 'react-bootstrap'

import s from './ContactForm.module.css'

export default function ContactForm() {
	const [name, setName] = useState('')
	const [number, setNumber] = useState('')
	const contacts = useSelector((state) => contactsSelectors.getContacts(state))
	const dispatch = useDispatch()

	const handlerChange = ({ target }) => {
		const { name, value } = target

		switch (name) {
			case 'name':
				setName(value)
				break

			case 'number':
				setNumber(value)
				break

			default:
		}
	}

	const handlerSubmit = (e) => {
		e.preventDefault()
		const isExistContact = !!contacts.items.find(
			(contact) => contact.name === name
		)
		isExistContact && alert('Contact is already exist')
		return (
			!isExistContact &&
			dispatch(contactsOperations.addContacts({ id: uuid(), name, number })) &&
			reset()
		)
	}

	const reset = () => {
		setName('')
		setNumber('')
	}

	return (
		<div className={s.contacts}>
			<Form onSubmit={handlerSubmit}>
				<Form.Group className="mb-2" controlId="formBasicEmail">
					<Form.Label>Name</Form.Label>
					<Form.Control
						type="text"
						placeholder="Enter name"
						name="name"
						value={name}
						onChange={handlerChange}
					/>
				</Form.Group>

				<Form.Group className="mb-3" controlId="formBasicPassword">
					<Form.Label>Number</Form.Label>
					<Form.Control
						type="tel"
						name="number"
						value={number}
						placeholder="Enter Number"
						onChange={handlerChange}
					/>
				</Form.Group>

				<Button variant="primary" type="submit" classMame={s.button}>
					Add contact
				</Button>
			</Form>
		</div>
		// <form onSubmit={handleSubmit} className={s.form}>
		// 	<label>
		// 		Name
		// 		<input
		// 			value={name}
		// 			onChange={handleChange}
		// 			type="text"
		// 			name="name"
		// 			placeholder="Enter name"
		// 			pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
		// 			title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
		// 			required
		// 			className={s.input}
		// 		/>
		// 	</label>

		// 	<label>
		// 		Number
		// 		<input
		// 			value={number}
		// 			onChange={handleChange}
		// 			type="tel"
		// 			name="number"
		// 			placeholder="Enter number"
		// 			pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
		// 			title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
		// 			required
		// 			className={s.input}
		// 		/>
		// 	</label>
		// 	<Button variant="primary" type="submit">
		// 		Add contact
		// 	</Button>
		// </form>
	)
}

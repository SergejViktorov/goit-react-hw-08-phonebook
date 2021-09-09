import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { contactsSelectors, filter } from '../../redux'
import { Form } from 'react-bootstrap'
import s from './Filter.module.css'

const Filter = () => {
	const value = useSelector((state) => contactsSelectors.getFilter(state))
	const dispatch = useDispatch()
	return (
		<div className={s.filter}>
			<Form.Group className="mb-2" controlId="formBasicEmail">
				<Form.Label>Search</Form.Label>
				<Form.Control
					type="text"
					name="filter"
					value={value}
					onChange={(e) => dispatch(filter(e.currentTarget.value))}
					placeholder="Enter name for Search"
				/>
			</Form.Group>
		</div>
	)
}

export default Filter

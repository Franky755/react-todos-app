import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodoAsync } from '../redux/todoSlice';
import { v4 as uuid } from 'uuid';
import '../css/AddTodoForm.css';

const AddTodoForm = () => {
	const [value, setValue] = useState('');

	const todoID = uuid();
	const dispatch = useDispatch();

	const onSubmit = (event) => {
		event.preventDefault();
		if (value) {
			dispatch(
				addTodoAsync({
					title: value,
					id: uuid(),
					completed: false,
				})
			);
			setValue('')
		}
	};

	return (
		<form onSubmit={onSubmit} className='form-add-todo'>
			<label className='sr-only'></label>
			<input
				type='text'
				className='form-input-todo'
				placeholder='What is your plan...'
				value={value}
				onChange={(event) => setValue(event.target.value)}
				autoFocus
			></input>

			<button type='submit' className='btn btn-submit-input'>
				Submit
			</button>
		</form>
	);
};

export default AddTodoForm;

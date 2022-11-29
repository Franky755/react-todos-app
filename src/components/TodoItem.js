import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleCompleteAsync, deleteTodo } from '../redux/todoSlice';
import '../css/TodoItem.css'

const TodoItem = ({ id, title, completed }) => {


	const dispatch = useDispatch();

	const handleCheckboxClick = () => {
		dispatch(toggleCompleteAsync({ id, completed: !completed }));
	};

	const handleDeleteClick = () => {
		dispatch(deleteTodo({ id }));
	};

	return (
		<div className={`${completed && 'list-group-item-success'}`}>
			<div className='list-group-item'>
				<input
					type='checkbox'
					className='checkbox'
					onClick={handleCheckboxClick}
					checked={completed}
				></input>
				<span className='item'>

					{title}
				</span>
				<button onClick={handleDeleteClick} className='btn btn-delete'>
					Delete
				</button>
			</div>
		</div>
	);
};

export default TodoItem;
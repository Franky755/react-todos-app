import React, { useEffect } from 'react';
import TodoItem from './TodoItem';
import { useDispatch } from 'react-redux';
import { getTodosAsync } from '../redux/todoSlice';

const TodoList = ({ searchData }) => {

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getTodosAsync());
	}, [dispatch]);

	return (
		<div className='list-group' >
			{searchData.map((todo, index) => (
				<TodoItem key={index} id={todo.id} title={todo.title} completed={todo.completed} />
			))}
		</div>
	);
};

export default TodoList;

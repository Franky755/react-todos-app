import React from 'react';
import { useSelector } from 'react-redux';
import '../css/TodosSummary.css'

const TodoSummary = () => {

	const totalTodos = useSelector((state) =>
		state.todos.length
	);


	const todosCompleted = useSelector((state) =>
		state.todos.filter((todo) => todo.completed === true).length
	);


	const todosInCompleted = useSelector((state) =>
		state.todos.filter((todo) => todo.completed === false)
	);


	return (
		<div className='sum-todo'>
			<h4 className='sum-total'>Total: {totalTodos}</h4>
			<h4 className='sum-completed'>Completed: {todosCompleted}</h4>
			<h4 className='sum-in-completed'>In-completed: {todosInCompleted.length}</h4>
		</div>
	)
}

export default TodoSummary;

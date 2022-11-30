import React from 'react';
import { useSelector } from 'react-redux';
import '../css/TodosSummary.css'

const TodoSummary = ({ handleFilterTotal, handleFilterInCompleted, handleFilterCompleted }) => {

	const totalTodos = useSelector((state) =>
		state.todos.length
	);

	const todosCompleted = useSelector((state) =>
		state.todos.filter((todo) => todo.completed === true)
	);

	const todosInCompleted = useSelector((state) =>
		state.todos.filter((todo) => todo.completed === false)
	);


	return (
		<div className='sum-todo'>
			<button
				className='btn btn-sum-total'
			onClick={handleFilterTotal}
			>
				Total: <strong>{totalTodos}</strong>
			</button>
			<button
				className='btn btn-sum-completed'
				onClick={handleFilterCompleted}
			>
				Completed: <strong>{todosCompleted.length}</strong>
			</button>
			<button
				className='btn btn-sum-in-completed'
				onClick={handleFilterInCompleted}
			>
				In-completed: <strong>{todosInCompleted.length}</strong>
			</button>
		</div>
	)
}

export default TodoSummary;

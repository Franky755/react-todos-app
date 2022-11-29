import React from 'react';
import AddTodoForm from './components/AddTodoForm';
import TodoList from './components/TodoList';
import TodoSummary from './components/TodosSummary';
import '../src/css/TodosApp.css';
import SearchTodoForm from './components/SearchTodoForm';


const TodosApp = () => {
	return (
		<div className='container'>
			<h1 className='head-title'>My Todo List</h1>
			<AddTodoForm />
			<div className='split-line'></div>
			<SearchTodoForm />
			<TodoSummary />
			<TodoList />
		</div>
	)
}

export default TodosApp;

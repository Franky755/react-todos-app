import React, { useEffect, useState } from 'react';
import AddTodoForm from './components/AddTodoForm';
import TodoList from './components/TodoList';
import TodosSummary from './components/TodosSummary';
import '../src/css/TodosApp.css';
import SearchTodoForm from './components/SearchTodoForm';
import { useSelector } from 'react-redux';


const TodosApp = () => {

	const searchList = useSelector((state) => state.todos);

	const [searchText, setSearchText] = useState('');
	const [searchData, setSearchData] = useState([]);

	//thêm 1 hàm useEffect để set lại State của biến searchData theo dependances là "searchList"

	useEffect(() => {
		if (searchList && Array.isArray(searchList)) {
			setSearchData(searchList?.filter(x => x.title?.includes(searchText)))
		}
	}, [searchList]) // xử lý vấn đề dữ liệu khởi tạo là undefined => render ra rỗng

	const handleSearching = (e) => {
		e.preventDefault()
		setSearchData(searchList.filter(x => x.title?.includes(searchText)))
	}

	const handleFilterTotal = () => {
		setSearchData(searchList)
	}

	const handleFilterCompleted = () => {
		setSearchData(searchList.filter((todo) => todo.completed === true))
	}

	const handleFilterInCompleted = () => {
		setSearchData(searchList.filter((todo) => todo.completed === false))
	}


	return (
		<div className='container'>
			<h1 className='head-title'>My Todo List</h1>
			<AddTodoForm />
			<div className='split-line'></div>
			<SearchTodoForm
				handleSearching={handleSearching}
				setSearchText={setSearchText}
				searchText={searchText}

			/>
			<TodosSummary
				handleFilterCompleted={handleFilterCompleted}
				handleFilterInCompleted={handleFilterInCompleted}
				handleFilterTotal={handleFilterTotal}
			/>
			<TodoList searchData={searchData} />
		</div>
	)
}

export default TodosApp;

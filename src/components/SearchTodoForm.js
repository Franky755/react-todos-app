import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import '../css/SearchTodoForm.css';

const SearchTodoForm = () => {

	const searchList = useSelector((state) =>
	state.todos);

console.log('abcdcasd', searchList)
	const [searchText, setSearchText] = useState('');
	const [searchData, setSearchData] = useState([]);

	//thêm 1 hàm useEffect để set lại State của biến searchData theo dependances là "searchList"

	useEffect(() => {
		// console.log(searchList && Array.isArray(searchList) && searchList.length > 0)
		// console.log(searchData)
		if (searchList && Array.isArray(searchList))
			setSearchData(searchList?.filter(x => x.title?.includes(searchText)))
	}, [searchList]) // xử lý vấn đề dữ liệu khởi tạo là undefined => render ra rỗng

	const handleSearching = () => {
		setSearchData(searchList.filter(x => x.title?.includes(searchText)))
	}

	return (
		<form onSubmit={handleSearching} className='form-search-todo'>
			<label className='search-box'>Search box</label>
			<input
				type='text'
				className='search-input'
				placeholder='Find what..?'
				value={searchText}
				onChange={(event) => setSearchText(event.target.value)}
			></input>
			<button type='submit' className='btn btn-search'>
				Search
			</button>
		</form>
	);
};

export default SearchTodoForm;

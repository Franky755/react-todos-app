import React from 'react';
import '../css/SearchTodoForm.css';

const SearchTodoForm = ({ handleSearching, setSearchText, searchText, searchData }) => {
	return (
		<form onSubmit={handleSearching} className='form-search-todo'>
			<label className='search-box'>Search box</label>
			<input
				type='text'
				className='search-input'
				placeholder='Find what...?'
				value={searchText}
				onChange={e => setSearchText(e.target.value)}
			></input>
			<button type='submit' className='btn btn-search'>
				Search
			</button>
			<div className='search-result'>
				{searchText && searchText.length > 0 ? `There are ${searchData.length} results in the List!` : ''}
			</div>
		</form>
	);
};

export default SearchTodoForm;

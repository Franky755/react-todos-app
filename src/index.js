import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TodosApp from './TodosApp';
import store from './redux/store';
import { Provider } from 'react-redux';

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<TodosApp />
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);

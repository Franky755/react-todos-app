import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import './index.css';
import TodosApp from './TodosApp';
import store from './redux/store';
import { Provider } from 'react-redux';


const root = ReactDOMClient.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<TodosApp />
		</Provider>
	</React.StrictMode>
);

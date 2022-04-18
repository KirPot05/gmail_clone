import React from 'react';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import { Routes, Route } from 'react-router-dom';
import Mail from './components/Mail';
import EmailList from './components/EmailList';

function App() {
	return (
		<div className="app">

			<Header />

			<div class="app__body">
				<Sidebar />

				<Routes>
					<Route exact path='/' element={<EmailList></EmailList>} />
					<Route path='/mail' element={<Mail></Mail>} />
				</Routes>

			</div>



		</div>
	);
}

export default App;

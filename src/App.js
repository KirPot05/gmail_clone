import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import { Routes, Route } from 'react-router-dom';
import Mail from './components/Mail';
import EmailList from './components/EmailList';
import SendMail from './components/SendMail';
import { useDispatch, useSelector } from 'react-redux';
import { selectSendMessageIsOpen } from './features/mailSlice';
import { login, logout, selectUser } from './features/userSlice';
import Login from './components/Login';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';

function App() {

	const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);
	const user = useSelector(selectUser);
	const dispatch = useDispatch();

	useEffect(() => {

		const unsub = onAuthStateChanged(auth, (currentAuth) => {
			if(currentAuth){
				dispatch(login({
					displayName: currentAuth.displayName,
					email: currentAuth.email,
					photoUrl: currentAuth.photoURL
				}));

			} else{
				dispatch(logout());
			}
		})

		return () => unsub();

	}, [])

	return (
		<>
			{!user ? (<Login />)
				:
				(<div className="app">

					<Header />

					<div class="app__body">
						<Sidebar />

						<Routes>
							<Route exact path='/' element={<EmailList></EmailList>} />
							<Route path='/mail' element={<Mail></Mail>} />
						</Routes>

					</div>

					{sendMessageIsOpen && <SendMail />}

				</div>)}
		</>
	);
}

export default App;

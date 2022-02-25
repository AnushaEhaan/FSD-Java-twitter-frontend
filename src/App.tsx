import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { secureRoutes, publicRoutes } from './routes';
import renderRoutes from './config/renderRoutes.config';
import { useSelector, useDispatch } from 'react-redux';
import {authLoginSuccess} from "./store/actions/auth.action";
import Cookies from 'js-cookie'

const App = () => {
	const dispatch = useDispatch();
	const { isAuthenticated } = useSelector((state: any) => state.auth);

	React.useEffect(() => {
		const token = Cookies.get('token');
		const user = localStorage.getItem('user');
		if (token && user) {
			dispatch(authLoginSuccess(user));
		}
	}, [])


  	return (
			<Router>
				<Routes>
					{renderRoutes(isAuthenticated ? secureRoutes : publicRoutes)}
					<Route path='*' element={<h1>404</h1>} />
				</Routes>
			</Router>
		);
}

export default App
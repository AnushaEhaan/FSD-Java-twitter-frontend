import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { secureRoutes, authRoutes } from './routes';
import renderRoutes from './config/renderRoutes.config';
import { useSelector, useDispatch } from 'react-redux';
import { findCurrentUser } from './store/actions/user.action';
import Cookies from 'js-cookie'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
	const dispatch = useDispatch();
	const { isAuthenticated } = useSelector((state: any) => state.user);

	React.useEffect(() => {
		const token = Cookies.get('token');
		const userId = Cookies.get('user_Id');
		if (token && userId) {
			dispatch(findCurrentUser(userId))
		}
	}, [])


  	return (
			<>
				<Router>
					<Routes>
						{renderRoutes(isAuthenticated ? secureRoutes : authRoutes)}
						<Route path='*' element={<h1>404</h1>} />
					</Routes>
				</Router>
				<ToastContainer />
			</>
		);
}

export default App
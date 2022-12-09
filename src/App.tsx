import Cookies from 'js-cookie'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Spinner from './components/reusable/Spinner'
import renderRoutes from './config/renderRoutes.config'
import { authRoutes, secureRoutes } from './routes'
import { loggedInUser } from './store/actions/user.action'
import { IRootState } from './types/store/IRootState.type'

const App = () => {
	const dispatch = useDispatch()
	const { isAuthenticated, loading } = useSelector((state: IRootState) => state.user)

	React.useEffect(() => {
		const token = Cookies.get('token')
		console.log('token', token)
		const userId = Cookies.get('user_Id')
		if (token && userId) dispatch(loggedInUser())
	}, [])

	if (loading) return <Spinner height='80vh'></Spinner>

	return (
		<>
			<Router>
				<Routes>
					{renderRoutes(isAuthenticated ? secureRoutes : authRoutes)}
					<Route
						path='*'
						element={<h1>404</h1>}
					/>
				</Routes>
			</Router>
			<ToastContainer />
		</>
	)
}

export default App

import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { secureRoutes, publicRoutes } from './routes';
import renderRoutes from './config/renderRoutes.config';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);
  return (
		<Router>
			<Routes>
        {renderRoutes(isAuthenticated ? secureRoutes : publicRoutes)}
        <Route path="*" element={<h1>404</h1>} />
			</Routes>
		</Router>
	);
}

export default App
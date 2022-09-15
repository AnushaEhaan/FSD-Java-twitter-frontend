import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './assets/scss/bootstrap.scss'
import Spinner from './components/reusable/Spinner'
import { Provider } from 'react-redux'
import store from './store/store'

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<Suspense fallback={<Spinner height='80vh' />}>
				<App />
			</Suspense>
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
)

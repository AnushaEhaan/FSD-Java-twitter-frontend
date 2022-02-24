import React,{Suspense} from 'react'
import ReactDOM from 'react-dom'
import App from './App';
import './assets/scss/bootstrap.scss';

ReactDOM.render(
	<React.StrictMode>
		<Suspense fallback={<>....</>}>
			<App />
		</Suspense>
	</React.StrictMode>,
	document.getElementById('root'),
);

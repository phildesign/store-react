import { Route } from 'react-router';
import { Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';

const App = () => {
	return (
		<div className="wrapper">
			<div className="content">
				<div className="container">
					<Routes>
						<Route path="/" element={<Home />} />
					</Routes>
				</div>
			</div>
		</div>
	);
};

export default App;

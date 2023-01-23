import { Route } from 'react-router';
import { Routes } from 'react-router-dom';
import { Box } from '@mui/material';

import Header from './components/Header/Header';
import Home from './pages/Home';

import './App.css';

const App = () => {
	return (
		<Box>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
			</Routes>
		</Box>
	);
};

export default App;

// import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Admin from './pages/Admin';
import Page404 from './pages/Page404';
import { SnackbarProvider } from 'notistack';
import Login from './pages/Login';

function App() {
	return (
		<SnackbarProvider>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/admin" element={<Admin />} />
					{/* <Route path="/admin" element={<Navigate to={'/login'} /> } /> */}
					<Route path="/login" element={<Login />} />
					<Route path="*" element={<Page404 />} />
				</Routes>
			</BrowserRouter>
		</SnackbarProvider>
	)
}
export default App;

import './App.css';
// import './scss/switcher.scss';
import ThemeOptions from './components/theme/ThemeOptions';
import { useEffect, useState } from 'react';
import Header from './components/header/Header';
import About from './components/about/About';
import Experience from './components/experience/Experience';
import Contact from './components/contact/Contact';
import Nav from './components/nav/Nav';
import Footer from './components/footer/Footer';

function App() {
	const [theme, setTheme] = useState('blue-theme');

	useEffect(() => {
		// check for selected Theme in local storage value
		const currentTheme = localStorage.getItem('theme');
		// if found set selected value in state
		if (currentTheme) {
			setTheme(currentTheme);
		}
	}, []);

	// set Theme function

	const handleTheme = (themeColor) => {
		setTheme(themeColor);
		localStorage.setItem('theme', themeColor);
	};

	return (
		<div className={`App`} data-theme={theme ? theme : 'blue-theme'}>
			<ThemeOptions handleTheme={handleTheme} />
			<Header />
			<Nav />
			<About />
			<Experience />
			<Contact />
			<Footer />
		</div>
	);
}

export default App;

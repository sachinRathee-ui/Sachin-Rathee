import React, { useEffect, useState } from 'react';
import './nav.scss';
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai';
import { BiBook, BiMessageSquareDots } from 'react-icons/bi';

const Nav = () => {
	const [activeNav, setActiveNav] = useState('#');

	useEffect(() => {
		window.addEventListener('scroll', () => {
			const scrolly = window.scrollY;

			if (scrolly < 763) {
				setActiveNav('#');
			} else if (scrolly > 764 && scrolly < 1500) {
				setActiveNav('#about');
			} else if (scrolly > 1501 && scrolly < 2000) {
				setActiveNav('#experience');
			} else if (scrolly > 2001) {
				setActiveNav('#contact');
			}
		});

		return () => {};
	}, []);

	return (
		<nav>
			<a
				href='#'
				className={activeNav === '#' ? 'active' : ''}
				onClick={() => setActiveNav('#')}>
				<AiOutlineHome />
			</a>
			<a
				href='#about'
				className={activeNav === '#about' ? 'active' : ''}
				onClick={() => setActiveNav('#about')}>
				<AiOutlineUser />
			</a>
			<a
				href='#experience'
				className={activeNav === '#experience' ? 'active' : ''}
				onClick={() => setActiveNav('#experience')}>
				<BiBook />
			</a>
			<a
				href='#contact'
				className={activeNav === '#contact' ? 'active' : ''}
				onClick={() => setActiveNav('#contact')}>
				<BiMessageSquareDots />
			</a>
		</nav>
	);
};

export default Nav;

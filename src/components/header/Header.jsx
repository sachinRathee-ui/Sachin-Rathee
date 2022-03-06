import React, { useEffect } from 'react';
import CTA from './CTA';
import './header.scss';
import ME from '../../assets/me.png';
import HeaderSocials from './HeaderSocials';
import { useRef } from 'react';

const Header = () => {
	const ref = useRef(null);
	useEffect(() => {
		console.log('width', ref.current ? ref.current.offsetWidth : 0);
	}, [ref.current]);

	return (
		<header ref={ref}>
			<div className='container header__container'>
				<h5>Hello I'm</h5>
				<h1>Sachin Rathee</h1>
				<h5 className='text-light'>React Frontend Developer</h5>
				<CTA />
				<HeaderSocials />
				<div className='me'>
					<img src={ME} alt='Sachin Rathee' />
				</div>

				<a href='#contact' className='scroll__down'>
					Scroll Down
				</a>
			</div>
		</header>
	);
};

export default Header;

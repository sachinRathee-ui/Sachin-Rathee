import React from 'react';
import './footer.scss';

import { FaFacebookF } from 'react-icons/fa';
import { FiInstagram } from 'react-icons/fi';

const Footer = () => {
	return (
		<footer>
			<a href='#' className='footer__logo'>
				Sachin Rathee
			</a>
			<ul className='footer__permalinks'>
				<li>
					<a href='#'>Home</a>
				</li>
				<li>
					<a href='#about'>About</a>
				</li>
				<li>
					<a href='#experience'>Experience</a>
				</li>
				<li>
					<a href='#contact'>Contact</a>
				</li>
			</ul>
			<div className='footer__socials'>
				<a href='https://facebook.com'>
					<FaFacebookF />
				</a>
				<a href='https://instagram.com'>
					<FiInstagram />
				</a>
			</div>

			<div className='footer__copyright'>
				<small>&copy; Sachin Rathee. All rights reserved.</small>
			</div>
		</footer>
	);
};

export default Footer;

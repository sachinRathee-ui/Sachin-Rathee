import React, { useEffect, useState } from 'react';
// import '../../scss/switcher.scss';
import './theme.scss';
import { FiSettings } from 'react-icons/fi';

const ThemeOptions = ({ handleTheme }) => {
	return (
		<div className='themes' id='themes'>
			<div className='setting__icon'>
				<FiSettings className='icon' />
			</div>
			<div className='theme-options'>
				<div
					className='theme__option'
					onClick={() => handleTheme('blue-theme')}>
					<div className='bg__color theme-blue-bg'></div>
					<div className='primary__color theme-blue-primary'></div>
				</div>
				<div
					className='theme__option'
					onClick={() => handleTheme('grey-theme')}>
					<div className='bg__color theme-grey-bg'></div>
					<div className='primary__color theme-grey-primary'></div>
				</div>
				<div
					className='theme__option'
					onClick={() => handleTheme('black-theme')}>
					<div className='bg__color theme-black-bg'></div>
					<div className='primary__color theme-black-primary'></div>
				</div>
			</div>
		</div>
	);
};

export default ThemeOptions;

import React, { useRef, useState } from 'react';
import './contact.scss';
import { contactOptions } from '../../data/data';
import emailjs from 'emailjs-com';

const Contact = () => {
	const formRef = useRef();
	const [isSent, setIsSent] = useState();
	const handleForm = (e) => {
		e.preventDefault();
		emailjs
			.sendForm(
				'service_g4mboww',
				'template_eryar4f',
				formRef.current,
				'user_GtFn4mVnFqioVeatbPmqv'
			)
			.then(
				(result) => {
					console.log(result.text);
					setIsSent(true);
				},
				(error) => {
					console.log(error.text);
					setIsSent(false);
				}
			);
	};
	return (
		<section id='contact'>
			<h5>Get In Touch</h5>
			<h2>Contact Me</h2>

			<div className='container contact__container'>
				<div className='contact__options'>
					{contactOptions.map((option) => (
						<article className='contact__option' key={option.id}>
							{option.icon}
							<h4>{option.via}</h4>
							<h5>{option.value}</h5>
							<a
								href={option.link}
								target={`${option.link ? '_blank' : ''}`}
								onClick={() =>
									option.link === ''
										? alert('Call on Mobile no. +918427514840, +917896735064')
										: ''
								}>
								{option.label}
							</a>
						</article>
					))}
				</div>
				{/* END OF CONTACT OPTIONS */}
				<form ref={formRef} onSubmit={handleForm}>
					<input
						type='text'
						name='user_name'
						placeholder='Your Full Name'
						required
					/>
					<input
						type='email'
						name='user_email'
						placeholder='Your Email'
						required
					/>

					<textarea
						name='message'
						rows='7'
						placeholder='Your Message'
						required></textarea>

					<button type='submit' className='btn btn-primary'>
						{' '}
						Send Message{' '}
					</button>
				</form>
			</div>
		</section>
	);
};

export default Contact;

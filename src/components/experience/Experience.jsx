import React from 'react';
import './experience.scss';
import { BsPatchCheckFill } from 'react-icons/bs';
import { frontendExperience, devopsExperience } from '../../data/data';

const Experience = () => {
	return (
		<section id='experience'>
			<h5>Skills I Have</h5>
			<h2>My Experience</h2>
			<div className='container experience__container'>
				<div className='experience__frontend'>
					<h3>Frontend Developer</h3>
					<div className='experience__content'>
						{frontendExperience.map((item) => (
							<article className='experience__details' key={item.id}>
								<BsPatchCheckFill className='experience__details-icon' />
								<div>
									<h4>{item.skill}</h4>
									<small className='text-light'>{item.status}</small>
								</div>
							</article>
						))}
					</div>
				</div>
				<div className='experience__devops'>
					<h3>DevOps</h3>
					<div className='experience__content'>
						{devopsExperience.map((item) => (
							<article className='experience__details' key={item.id}>
								<BsPatchCheckFill className='experience__details-icon' />
								<div>
									<h4>{item.skill}</h4>
									<small className='text-light'>{item.status}</small>
								</div>
							</article>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Experience;

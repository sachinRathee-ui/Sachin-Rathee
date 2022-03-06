import React from 'react';
import './about.scss';
import AboutME from '../../assets/a-me.jpg';
import { about } from '../../data/data';

const About = () => {
	return (
		<section id='about'>
			<h5>Get To Know</h5>
			<h2>About Me</h2>
			<div className='container about__container'>
				<div className='about__me'>
					<div className='about__me-image'>
						<img src={AboutME} alt='Sachin Rathee' />
					</div>
				</div>
				<div className='about__content'>
					<div className='about__cards'>
						{about.map((data) => (
							<article className='about__card' key={data.id}>
								{data.icon}
								<h5>{data.title}</h5>
								<small>{data.details}</small>
							</article>
						))}
					</div>
					<p>
						I'm passionate about implementing and launching new projects with
						the ability to translate business requirements into technical
						solution. I'm having 2.5+ years of experince in this industry. I
						recently began to be fascinated by DevOps, e.g. deploying apps and
						building infrastructure. Proficient in HTML, CSS, JavaScript, React
						JS and React Native.
					</p>
					<a href='#contact' className='btn btn-primary'>
						Let's Talk
					</a>
				</div>
			</div>
		</section>
	);
};

export default About;

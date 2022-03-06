import { FaAward } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { VscFolderOpened } from 'react-icons/vsc';
import { MdOutlineEmail } from 'react-icons/md';
import { BsWhatsapp } from 'react-icons/bs';
import { IoCallOutline } from 'react-icons/io5';

export const about = [
	{
		id: 1,
		title: 'Experience',
		details: '2.5+ Years Working',
		icon: <FaAward className='about__icon' />,
	},
	{
		id: 2,
		title: 'Certification',
		details: '1 certificate',
		icon: <FiUsers className='about__icon' />,
	},
	// {
	// 	id: 3,
	// 	title: 'Projects',
	// 	details: '3+ completed',
	// 	icon: <VscFolderOpened className='about__icon' />,
	// },
];

export const frontendExperience = [
	{
		id: 1,
		skill: 'HTML',
		status: 'Experienced',
	},
	{
		id: 2,
		skill: 'CSS',
		status: 'Intermediate',
	},
	{
		id: 3,
		skill: 'JavaScript',
		status: 'Experienced',
	},
	{
		id: 4,
		skill: 'React Js',
		status: 'Experienced',
	},
	{
		id: 5,
		skill: 'React Native',
		status: 'Intermediate	',
	},
];

export const devopsExperience = [
	{
		id: 1,
		skill: 'Jenkins',
		status: 'Intermediate',
	},
	{
		id: 2,
		skill: 'Ansible',
		status: 'Intermediate',
	},
	{
		id: 3,
		skill: 'Docker',
		status: 'Experienced',
	},
	{
		id: 4,
		skill: 'Kubernetes',
		status: 'Intermediate',
	},
	{
		id: 5,
		skill: 'Grafana',
		status: 'Intermediate',
	},
	{
		id: 6,
		skill: 'Azure DevOps',
		status: 'Experienced',
	},
];

export const contactOptions = [
	{
		id: 1,
		via: 'Email',
		value: 'sachin.rathee.mail@gmail.com',
		link: 'mailto:sachin.rathee.mail@gmail.com',
		icon: <MdOutlineEmail className='contact__option-icon' />,
		label: 'Send a message',
	},
	{
		id: 2,
		via: 'Whatsapp',
		value: '+91 8427514840',
		link: 'https://api.whatsapp.com/send/?phone=918427514840&text&app_absent=0',
		icon: <BsWhatsapp className='contact__option-icon' />,
		label: 'Send a message',
	},
	{
		id: 3,
		via: 'Call',
		value: '+91 8427514840, +91 7896735064',
		link: '',
		icon: <IoCallOutline className='contact__option-icon' />,
		label: 'Call Me',
	},
];

import {
	mobile,
	backend,
	creator,
	web,
	javascript,
	typescript,
	html,
	css,
	reactjs,
	redux,
	tailwind,
	nodejs,
	mongodb,
	git,
	figma,
	docker,
	meta,
	starbucks,
	tesla,
	shopify,
	carrent,
	jobit,
	tripguide,
	threejs,
} from "../assets";

export const navLinks = [
	{
		id: "about",
		title: "About",
	},
	{
		id: "work",
		title: "Work",
	},
	{
		id: "contact",
		title: "Contact",
	},
];

const services = [
	{
		title: "Frontend Developer",
		icon: web,
	},
	{
		title: "Content Creator",
		icon: creator,
	},
	{
		title: "Tackling Challenges Byte by Byte",
		icon: backend,
	},
	{
		title: "Place for future skill:)",
		icon: mobile,
	},
];

const technologies = [
	{
		name: "HTML 5",
		icon: html,
	},
	{
		name: "CSS 3",
		icon: css,
	},
	{
		name: "JavaScript",
		icon: javascript,
	},
	{
		name: "TypeScript",
		icon: typescript,
	},
	{
		name: "React JS",
		icon: reactjs,
	},
	{
		name: "Redux Toolkit",
		icon: redux,
	},
	{
		name: "Tailwind CSS",
		icon: tailwind,
	},
	{
		name: "Node JS",
		icon: nodejs,
	},
	{
		name: "MongoDB",
		icon: mongodb,
	},

	{
		name: "git",
		icon: git,
	},
	{
		name: "figma",
		icon: figma,
	},
];

const experiences = [
	{
		title: "Frontend Developer",
		company_name: "Phare Technologies",
		icon: "https://i.postimg.cc/3rq9px1Y/logo.webp",
		iconBg: "#E6DEDD",
		date: "Jan 2023 - Nov 2023",
		points: [
			"I started a brand new project all by myself, learning how to create a big project from the very beginning",
			"I used TypeScript to make the project faster and catch errors easily",
			"I got really good at using Tailwind CSS for styling",
			"Developed the project's UI and integrated real-time data from the backend using server-sent events",
			"Utilized the Ant Charts library to create dynamic charts that updated over time",
			"Worked with the Google Maps API to track user locations and movements",
			"Implemented browser storage for saving user action history",
			"Collaborated on the development of a weather app that fetched forecasts for specific locations",
			"Employed Redux for state management",
		],
	},
	{
		title: "Frontend Developer",
		company_name: "HelmDA Systems",
		icon: "https://i.postimg.cc/Dm3ZhhPR/Screenshot-664-removebg-preview-2.png",
		iconBg: "#383E56",
		date: "Mar 2022 - Jan 2023",
		points: [
			"Design, development, and deployment of a NextJS-based website using TypeScript and Tailwind",
			"Utilizing Redux-Toolkit for effective state management for the platform",
			"Consistently monitoring and troubleshooting code to ensure optimal performance and fixing bugs as needed",
			"Collaborating cross-functionally with designers and backend developers to enhance platform and website functionality",
		],
	},
];

const testimonials = [
	{
		testimonial:
			"I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
		name: "Sara Lee",
		designation: "CFO",
		company: "Acme Co",
		image: "https://randomuser.me/api/portraits/women/4.jpg",
	},
	{
		testimonial:
			"I've never met a web developer who truly cares about their clients' success like Rick does.",
		name: "Chris Brown",
		designation: "COO",
		company: "DEF Corp",
		image: "https://randomuser.me/api/portraits/men/5.jpg",
	},
	{
		testimonial:
			"After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
		name: "Lisa Wang",
		designation: "CTO",
		company: "456 Enterprises",
		image: "https://randomuser.me/api/portraits/women/6.jpg",
	},
];

const projects = [
	{
		name: "Phare Technologies",
		description:
			"Developed a sleek, responsive company site with modern design and user-friendly features. Integrated Google Analytics for insights and improved user experience. Committed to ongoing enhancements for an optimal online presence",
		tags: [
			{
				name: "nextJs",
				color: "blue-text-gradient",
			},
			{
				name: "figma",
				color: "green-text-gradient",
			},
			{
				name: "tailwind",
				color: "pink-text-gradient",
			},
			{
				name: "swiperJs",
				color: "light-blue-text-gradient",
			},
			{
				name: "antdDesign",
				color: "pink-text-gradient",
			},
		],
		image: "https://i.postimg.cc/jjv8NHd2/phare.webp",
		source_code_link: "https://www.phare-ts.com/",
	},

	{
		name: "Apple Shop",
		description:
			"Built a responsive Apple-inspired website using NextJS for easy shopping via Stripe API. Managed data with Sanity and implemented Redux Toolkit for smooth state control. Rest assured, no accidental purchases at the end! 😁",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "mongodb",
				color: "green-text-gradient",
			},
			{
				name: "tailwind",
				color: "pink-text-gradient",
			},
			{
				name: "stripe",
				color: "pink-text-gradient",
			},

			{
				name: "sanityIo",
				color: "pink-text-gradient",
			},
		],
		image: "https://i.postimg.cc/Njd67rPn/apple.png",
		source_code_link: "https://apple-clone-gray.vercel.app",
	},
	{
		name: "Magnus Platform",
		description:
			"Platform was gathering real-time-data  from smart helmets, displaying temperature, air quality, humidity, and more. Our system includes dynamic charts, efficient task management with kanban, and seamless worker tracking.",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "redux",
				color: "green-text-gradient",
			},
			{
				name: "tailwind",
				color: "pink-text-gradient",
			},
			{
				name: "antdCharts",
				color: "light-blue-text-gradient",
			},
			{
				name: "googleMapsApi",
				color: "light-blue-text-gradient",
			},
		],
		image: "https://i.postimg.cc/KvMyvjm6/magnus.webp",
		source_code_link: "",
	},
];

export { services, technologies, experiences, testimonials, projects };

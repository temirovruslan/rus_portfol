import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const projects = [
	{
		img: "https://i.postimg.cc/3JvnwLxZ/30-2.png",
		link: "https://www.phare-ts.com",
		className: "milk",
		title: "Phare Technologies",
		description:
			"It is a website that i created for the company i work in.In this project i used sidebar, swiper-slider and other reusable components. Website is totally responsive. There can be some bags, still working on it.",
		tags: "nextjs#tailwind#javascript",
		btnColor: "#e4ff00",
		readmebtncolor: "yellow",
	},
	{
		img: "https://i.postimg.cc/Njd67rPn/apple.png",
		link: "https://apple-clone-gray.vercel.app",
		className: "white",
		title: "Apple shop",

		description:
			"Made an apple-clone website fully responsive in NextJS, where you can purchase apple devices throw Stripe API. Stored date in Sanity. Used Redux-Toolkit for state management. Dont purchase the selected items in the end😁",
		tags: "typescript#nextjs#tailwind#redux#stripe-payments#senety-io",

		// btnColor: "#284f87",
		btnColor: "#8e96a1",
	},
	{
		messageToUser: "Platform under development. No link available yet",
		img: "https://i.postimg.cc/9Fz1GRkf/magnus-Mobile.png",
		link: "",
		className: "blue",
		title: "Magnus Platform",

		description: `Our company began a new project from the beginning, and i build the platform from scratch as the only frontend developer. In this project, I learned how to fetch real-time data from the backend using server-sent events and connect it to individual users by their IDs. I also created charts using the Ant Charts library, and these charts would update as time passed. To build the UI, I used components from the Ant Design library and customized them to fit our requirements. For sate mangment was using Redux. We developed a weather app that fetched forecast data for specific locations and saved user's action history in their browser's storage. Additionally, I implemented sorting and filtering functionality. Worked with the Google Maps API to track user locations and movements. Platform was build using TypeScript.`,
		tags: "reactjs#typescript#tailwind#ant-charts#real-time-data",
		// btnColor: "#284f87",
		btnColor: "#8e96a1",
	},
];
// import required modules
import { Navigation, Mousewheel, Keyboard } from "swiper/modules";
// import { projects } from "../constants";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { SectionWrapper } from "../hoc";

const AnimatedCardMobile = () => {
	const [expandedCards, setExpandedCards] = useState([]);
	const maxChar = 200;
	const toggleReadMore = (index) => {
		setExpandedCards((prevExpandedCards) => {
			const newExpandedCards = [...prevExpandedCards];
			newExpandedCards[index] = !newExpandedCards[index];
			return newExpandedCards;
		});
	};
	const navigationPrevRef = useRef(null);
	const navigationNextRef = useRef(null);

	const truncatedText = (text) =>
		text.length > maxChar ? `${text.slice(0, maxChar)}...` : text;

	return (
		
		<Swiper
			slidesPerView={1}
			loop={true}
			spaceBetween={30}
			breakpoints={{
				0: {
					// width: 576,
					slidesPerView: 1,
				},
				1200: {
					// width: 768,
					slidesPerView: 2,
				},
			}}
			navigation={{
				prevEl: navigationPrevRef.current,
				nextEl: navigationNextRef.current,
			}}
			onBeforeInit={(swiper) => {
				(swiper.params.navigation.prevEl = navigationPrevRef.current),
					(swiper.params.navigation.nextEl =
						navigationNextRef.current);
			}}
			mousewheel={true}
			keyboard={true}
			modules={[Navigation, Mousewheel, Keyboard]}
			className="mySwiper w-[1000px]"
		>
			{projects.map((project, index) => {
				const isExpanded = expandedCards[index] || false;

				return (
					<SwiperSlide key={index} className="card">
						<div className={`poster ${project.className}`}>
							<img src={project.img} alt="dsda" />
						</div>
						<div className={isExpanded ? "expanded" : "details"}>
							{project.messageToUser && (
								<p className="text-[#1a1b36] italic text-base font-bold">
									{project.messageToUser}
								</p>
							)}
							{project.link && (
								<a target="_blank" href={project.link}>
									<button
										style={{
											background: project.btnColor,
											fontFamily: "Ubuntu",
											fontWeight: 500,
										}}
										className={`cssbuttons-io-button mb-2 bg-[${project.btnColor}]`}
									>
										Visit
										<div className="icon">
											<svg
												style={{ color: "black" }}
												height="24"
												width="24"
												viewBox="0 0 24 24"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													d="M0 0h24v24H0z"
													fill="none"
												></path>
												<path
													d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
													fill="currentColor"
												></path>
											</svg>
										</div>
									</button>
								</a>
							)}

							<h3
								style={{
									color: "white",
									fontFamily: "Roboto+Mono",
								}}
								className="text-2xl mb-2"
							>
								{project.title}
							</h3>

							{!isExpanded ? (
								<div className="info text-lg">
									{project.description.length > maxChar ? (
										<p>
											{truncatedText(project.description)}
											...
										</p>
									) : (
										project.description
									)}
								</div>
							) : (
								<div className="info text-lg">
									<p>{project.description}</p>
								</div>
							)}
							{project.description.length >= maxChar &&
								!isExpanded && (
									<button
										onClick={() => toggleReadMore(index)}
										className={`button my-2 ${project.readmebtncolor}`}
									>
										Read More
									</button>
								)}

							<div className="cast">
								<ul className="text-base">{project.tags}</ul>
							</div>
						</div>
					</SwiperSlide>
				);
			})}

			<div className="center mt-10 pb-4">
				<button
					ref={navigationPrevRef}
					className="z-50 mr-3 text-[grey] bg-[white] w-12 h-7 rounded-md  duration-300 center hover:text-[black] "
				>
					<ArrowLeft />
				</button>
				<button
					ref={navigationNextRef}
					className="z-50 text-[grey] bg-[white] w-12 h-7 rounded-md  duration-300 center hover:text-[black] "
				>
					<ArrowRight />
				</button>
			</div>
		</Swiper>
	);
};

export default SectionWrapper(AnimatedCardMobile, "");

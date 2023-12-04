import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
	index,
	name,
	description,
	tags,
	image,
	source_code_link,
}) => {
	return (
		<motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
			<Tilt
				options={{
					max: 45,
					scale: 1,
					speed: 450,
				}}
				className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
			>
				<div className="relative w-full h-[230px]">
					<img
						src={image}
						alt="project_image"
						className="w-full h-full object-cover rounded-2xl"
					/>
					{/* <div className="tooltip black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer ">
						<img
							src={github}
							alt="source code"
							className="w-1/2 h-1/2 object-contain"
						/>
						<div className="tooltiptext">
							Platform under development. No link available yet
						</div>
					</div> */}
					<div className="absolute inset-0 flex justify-end m-3 card-img_hover">
						{source_code_link.length === 0 ? (
							<div className="tooltip bg-[#294e8d] opacity-70 w-[70px] h-10 rounded-xl flex justify-center items-center cursor-pointer ">
								{/* <img
									src={github}
									alt="source code"
									className="w-1/2 h-1/2 object-contain"
								/> */}
								<div className="tooltiptext w-[120px] text-[12px] md:text-[14px] md:w-[200px]">
									Platform under development. No link
									available yet
								</div>
							</div>
						) : (
							<a target="_blank" href={source_code_link}>
								<button
									style={{
										fontFamily: "Ubuntu",
										fontWeight: 500,
									}}
									className={`cssbuttons-io-button mb-2 bg-tertiary`}
								>
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
					</div>
				</div>

				<div className="mt-5">
					<h3 className="text-white font-bold text-[24px]">{name}</h3>
					<p className="mt-2 text-secondary text-[14px]">
						{description}
					</p>
				</div>

				<div className="mt-4 flex flex-wrap gap-2">
					{tags.map((tag) => (
						<p
							key={`${name}-${tag.name}`}
							className={`text-[14px] ${tag.color}`}
						>
							#{tag.name}
						</p>
					))}
				</div>
			</Tilt>
		</motion.div>
	);
};

const Works = () => {
	return (
		<>
			<motion.div variants={textVariant()}>
				<p className={`${styles.sectionSubText} `}>My work</p>
				<h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
			</motion.div>

			<div className="w-full flex">
				<motion.p
					variants={fadeIn("", "", 0.1, 1)}
					className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
				>
					These are my latest projects, and you can access them
					through the provided project showcase link. Each project is
					briefly described, showcasing my problem-solving skills, use
					of various technologies, and effective project management.
					Feel free to check them out!
				</motion.p>
			</div>

			<div className="mt-20 flex flex-wrap gap-7">
				{projects.map((project, index) => (
					<ProjectCard
						key={`project-${index}`}
						index={index}
						{...project}
					/>
				))}
			</div>
		</>
	);
};

export default SectionWrapper(Works, "");

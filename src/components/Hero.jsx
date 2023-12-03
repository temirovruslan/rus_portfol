import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
// import ParticlesContainer from "./ParticlesContainer";
import { useTypingEffect } from "../hooks/useTypingEffect";
import { useEffect, useState } from "react";
// import useTypingEffect from '../hooks/useTypingEffect'
const Hero = () => {
	const text = useTypingEffect(
		"Hi there! I'm Ruslan, a creative mind dedicated to turning ideas into reality!",
		100
	);
	const [showUnderscore, setShowUnderscore] = useState(true);

	useEffect(() => {
		const intervalId = setInterval(() => {
			setShowUnderscore((prev) => !prev);
		}, 1000);

		return () => clearInterval(intervalId);
	}, []); // Runs once when component mounts
	return (
		<section className={`relative w-full h-screen mx-auto`}>
			<div className="flex items-center justify-center w-full h-full">
				<div className="z-50 text-4xl font-bold text-[#ffffff] w-[290px]  md:w-[500px] h-96">
					<p
						className={` ${styles.sectionHeadText} sm:leading-[50px] xl:leading-[60px]`}
					>
						{text}
						{showUnderscore && "|"}
					</p>
				</div>
			</div>

			<div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
				<a href="#about">
					<div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
						<motion.div
							animate={{
								y: [0, 24, 0],
							}}
							transition={{
								duration: 1.5,
								repeat: Infinity,
								repeatType: "loop",
							}}
							className="w-3 h-3 rounded-full bg-secondary mb-1"
						/>
					</div>
				</a>
			</div>
		</section>
	);
};

export default Hero;

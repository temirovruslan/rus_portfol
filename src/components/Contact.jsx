import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
	const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
	const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
	const EMAIL_PUBLIC_KEY = import.meta.env.VITE_EMAIL_PUBLIC_KEY;
	

	const form = useRef();
	const {
		register,
		reset,
		formState: { errors },
		handleSubmit,
	} = useForm();

	const sendEmail = () => {
    console.log(form.current)
		if (form.current) {
			emailjs
				.sendForm(
					SERVICE_ID,
					TEMPLATE_ID,
					form.current,
					EMAIL_PUBLIC_KEY
				)
				.then(
					() => {
						toast.success(
							"Received your message! Quick reply coming your way soon. 👍"
						);
						reset();
					},
					(error) => {
						toast.error(
							"Oops! Something went wrong. 😟 You can give it another shot or reach out to me on LinkedIn for assistance. 🚀"
						);

						console.log(error.text);
					}
				);
		}
	};

	return (
		<div
			className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
		>
			<motion.div
				variants={slideIn("left", "tween", 0.2, 1)}
				className="flex-[0.75] bg-[#3a89e444] p-8 rounded-2xl"
			>
				<p className={styles.sectionSubText}>Get in touch</p>
				<h3 className={styles.sectionHeadText}>Contact.</h3>

				<form
					className="mt-12 flex flex-col gap-8"
					ref={form}
					onSubmit={handleSubmit(sendEmail)}
				>
					<label htmlFor="user_name" className="flex flex-col">
						<span className="text-white font-medium mb-4">
							Your Name
						</span>
						<input
							placeholder="What's your good name?"
							className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
							{...register("user_name", { required: true })}
							aria-invalid={errors.user_name ? "true" : "false"}
						/>
						{errors.user_name?.type === "required" && (
							<p
								className="text-red-500 text-xs italic"
								role="alert"
							>
								Fill the name field please
							</p>
						)}
					</label>

					<label htmlFor="user_email" className="flex flex-col">
						<span className="text-white font-medium mb-4">
							Email
						</span>
						<input
							placeholder="What's your email address?"
							className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
							{...register("user_email", { required: true })}
							aria-invalid={errors.user_email ? "true" : "false"}
						/>
						{errors.user_email?.type === "required" && (
							<p
								className="text-red-500 text-xs italic"
								role="alert"
							>
								Fill the email field please
							</p>
						)}
					</label>

					<label htmlFor="message" className="flex flex-col">
						<span className="text-white font-medium mb-4">
							Email
						</span>
						<textarea
							rows={7}
							placeholder="What you want to say?"
							className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
							{...register("message", { required: true })}
							aria-invalid={errors.message ? "true" : "false"}
						/>
						{errors.message?.type === "required" && (
							<p
								className="text-red-500 text-xs italic"
								role="alert"
							>
								Fill the message field please
							</p>
						)}
					</label>
					<button
						onClick={sendEmail}
						type="submit"
						className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
					>
						Send
						{/* {loading ? "Sending..." : "Send"} */}
					</button>

					{/* <div className="flex items-center justify-center">
						<input
							className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
							type="submit"
							value="Send"
						/>
					</div> */}
					<Toaster />
				</form>
			</motion.div>

			<motion.div
				variants={slideIn("right", "tween", 0.2, 1)}
				className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px] "
			>
				<EarthCanvas />
			</motion.div>
		</div>
	);
};

export default SectionWrapper(Contact, "contact");

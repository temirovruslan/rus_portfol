import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";


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
	const [formData, setFormData] = useState({
		user_name: "",
		user_email: "",
		message: "",
	});
	const [loading, setLoading] = useState(false); // Added loading state
	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const sendEmail = (e) => {
		e.preventDefault();
		if (!formData.user_name || !formData.user_email || !formData.message) {
			toast("Fill in all the blanks to make the form happy!", {
				icon: "😋",
			});
			return;
		}

		// Set loading to true when starting the email sending process
		setLoading(true);

		emailjs
			.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, EMAIL_PUBLIC_KEY)
			.then(
				() => {
					toast.success(
						"Received your message! Quick reply coming your way soon. 👍"
					);
					setFormData({ user_name: "", user_email: "", message: "" });
				},
				(error) => {
					toast.error(
						"Oops! Something went wrong. 😟 You can give it another shot or reach out to me on LinkedIn for assistance. 🚀"
					);
					console.log(error.text);
				}
			)
			.finally(() => {
				// Set loading back to false after the email sending process is complete
				setLoading(false);
			});
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
					onSubmit={sendEmail}
				>
					<label htmlFor="user_name" className="flex flex-col">
						<span className="text-white font-medium mb-4">
							Your Name
						</span>
						<input
							name="user_name"
							value={formData.user_name}
							onChange={handleChange}
							required={true}
							placeholder="What's your good name?"
							className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
						/>
					</label>

					<label htmlFor="user_email" className="flex flex-col">
						<span className="text-white font-medium mb-4">
							Email
						</span>
						<input
							name="user_email"
							value={formData.user_email}
							onChange={handleChange}
							required={true}
							placeholder="What's your email address?"
							className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
						/>
					</label>

					<label htmlFor="message" className="flex flex-col">
						<span className="text-white font-medium mb-4">
							Message
						</span>
						<textarea
							name="message"
							value={formData.message}
							onChange={handleChange}
							required={true}
							rows={7}
							placeholder="What you want to say?"
							className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
						/>
					</label>
					<button
				disabled={loading} // Disable the button when loading is true
				onClick={sendEmail}
				type="submit"
				className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
			>
				{loading ? "Sending.." : "Send"}
			</button>
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

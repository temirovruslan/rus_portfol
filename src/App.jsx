import { BrowserRouter } from "react-router-dom";
import AnimatedCardMobile from "./components/AnimatedCardMobile";
import {
	About,
	Contact,
	Experience,
	Feedbacks,
	Hero,
	Navbar,
	Tech,
	// AnimatedCardMobile,
	Works,
	StarsCanvas,
} from "./components";
import { Toaster } from "react-hot-toast";

const App = () => {
	
	return (
		<BrowserRouter>
			<Toaster />
			<div className="relative z-0 bg-[#07121c]">
				{/* <div className="bg-hero-pattern bg-cover bg-no-repeat bg- bg-[#07121c]">"> */}
				<Navbar />
				<Hero />
			
				{/* </div> */}
				<About />
				<Experience />
				<Tech />
				<Works />
				
				{/* <AnimatedCardMobile /> */}
				{/* <Feedbacks /> */}
				<div className="relative z-0">
					<Contact />
					<StarsCanvas />
				</div>
			</div>
		</BrowserRouter>
	);
};

export default App;

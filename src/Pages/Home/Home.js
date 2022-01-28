import React from "react";
import ExperienceSec from "../../components/ExperienceSec/ExperienceSec";
import Footer from "../../components/Footer/Footer";
import HeroSec from "../../components/HeroSec/HeroSec";
import Navbar from "../../components/Navbar/Navbar";
import "./Home.css";

const Home = () => {
	return (
		<>
			<div>
				{/* Navbar section start */}
				<div>
					<Navbar />
				</div>
				{/* Navbar section end */}
				{/* Hero section start */}
				<div>
					<HeroSec />
				</div>
				{/* Hero section end */}
				{/* ExperienceSec section start */}
				<div>
					<ExperienceSec />
				</div>
				{/* ExperienceSec section end */}
				{/* Footer section start */}
				<div>
					<Footer />
				</div>
				{/* Footer section end */}
			</div>
		</>
	);
};

export default Home;

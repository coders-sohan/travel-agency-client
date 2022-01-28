import React from "react";
import ExperienceSec from "../../components/ExperienceSec/ExperienceSec";
import HeroSec from "../../components/HeroSec/HeroSec";
import "./Home.css";

const Home = () => {
	return (
		<>
			<div>
				{/* Hero section start */}
				<div>
					<HeroSec />
					<ExperienceSec />
				</div>
				{/* Hero section end */}
			</div>
		</>
	);
};

export default Home;

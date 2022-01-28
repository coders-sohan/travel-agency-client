import React from "react";
import { Link } from "react-router-dom";

const HeroSec = () => {
	return (
		<>
			<div>
				<div className="container py-12 lg:py-16 mx-auto px-4">
					<div className="heroSec-bg rounded-lg shadow-xl">
						<div className="grid lg:grid-cols-2 grid-cols-1">
							<div className="px-5 md:px-10 py-48">
								<h1 className="text-5xl my-3 font-bold">Travelers Home</h1>
								<p className="text-lg mt-3 mb-6">
									A trusted place to describe your travel details and share your
									travel experiences with others
								</p>
								<Link
									to="/"
									className="px-5 py-2 bg-sky-600 hover:bg-sky-500 transition duration-200 ease-linear text-white rounded-md"
								>
									Explore more
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default HeroSec;

import React, { useEffect, useState } from "react";
import ExperienceData from "../ExperienceData/ExperienceData";

const ExperienceSec = () => {
	const [experienceData, setExperienceData] = useState([]);

	useEffect(() => {
		fetch("expdata.JSON")
			.then((res) => res.json())
			.then((data) => setExperienceData(data));
	}, []);

	return (
		<>
			<div className="container py-10 lg:py-14 mx-auto px-4">
				<div>
					<div className="text-center">
						<h1 className="capitalize text-3xl mb-2 font-bold">
							Travelers experience
						</h1>
						<p className="mb-2 text-lg">
							Enjoy other travelers experience and fixed your destiny
						</p>
					</div>
					<div>
						<div className="py-10 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
							{experienceData.map((expData) => (
								<ExperienceData key={expData.name} data={expData} />
							))}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default ExperienceSec;

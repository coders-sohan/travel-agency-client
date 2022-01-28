import React from "react";
import { Link } from "react-router-dom";

const ExperienceData = (props) => {
	const { name, desc, author, imgURL, date } = props.data;
	return (
		<>
			<div className="rounded-t-xl shadow-md">
				<img className="w-full h-80 rounded-t-xl" src={imgURL} alt="games" />
				<div className="py-2 px-4 w-full flex justify-between items-center bg-sky-500">
					<p className="text-sm text-white font-semibold tracking-wide">
						{author}
					</p>
					<p className="text-sm text-white font-semibold tracking-wide flex items-center">
						<span className="mr-2">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
								/>
							</svg>
						</span>
						<span>{date}</span>
					</p>
				</div>
				<div className="bg-white py-5 rounded-bl-3xl rounded-br-3xl px-5">
					<h1 className="text-lg text-gray-900 font-semibold tracking-wider">
						{name}
					</h1>
					<p className="text-gray-700 text-sm text-justify lg:text-base lg:leading-8 tracking-wide mt-2">
						{desc.slice(0, 190)}.....{" "}
						<Link
							to="/"
							className="text-sky-500 font-semibold transition duration-300 ease-in-out hover:underline decoration-wavy decoration-1 underline-offset-2"
						>
							Learn more
						</Link>
					</p>
				</div>
			</div>
			{/* </div> */}
		</>
	);
};

export default ExperienceData;

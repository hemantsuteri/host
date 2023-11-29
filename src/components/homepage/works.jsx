import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Working Partners"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./cashify.png"
								alt="C"
								className="work-image"
							/>
							<div className="work-title">Cashify</div>
							<div className="work-subtitle">
								Video Editor
							</div>
							{/* <div className="work-duration">2019 - Present</div> */}
						</div>

						<div className="work">
							<img
								src="./unacademy.png"
								alt="Unacademy"
								className="work-image"
							/>
							<div className="work-title">Unacademy</div>
							<div className="work-subtitle">
								Freelance Video Editor
							</div>
						</div>
						<div className="work">
							<img
								src="./pw.png"
								alt="Physics Wallah"
								className="work-image"
							/>
							<div className="work-title">Physics Wallah</div>
							<div className="work-subtitle">
								Freelance Video Editor
							</div>
						</div>
						<div className="work">
							<img
								src="./mcb.png"
								alt="MCB"
								className="work-image"
							/>
							<div className="work-title">My College Buddy</div>
							<div className="work-subtitle">
								Freelance Video Editor
							</div>
						</div>
						<div className="work">
							<img
								// src="./twitter.png"
								// alt="twitter"
								className="work-image"
							/>
							<div className="work-title">And Many more</div>
							<div className="work-subtitle">
								Video Editor
							</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;

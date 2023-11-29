import React from "react";
import { Link } from "react-router-dom"

const buttonStyle = {
	justifyItem: 'center',
	backgroundColor: 'yellow',
	color: 'white',
	padding: '10px',
	borderRadius: '5px',
	cursor: 'pointer',
	border: 'none',
	fontSize: '16px',
};
function article_1() {
	return {
		img: "https://res.cloudinary.com/duivrjbfz/image/upload/v1701195236/myimages/course1_mkjkvt.png",
		title: "BASIC COURSE",
		description:
			"This is a basic course of video editing, generally preferred for beginners in the field of video editing.",
		keywords: [
			"Video Editing", "Post-production", "Content Creation", "Video Marketing"
		],
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.randImage {
					align-self: center;
					outline: 2px solid red;
				}
				`,
		body: (
			<React.Fragment>
			<button style={buttonStyle}>
				<Link to="/login">
				Login to Enroll
				</Link>	
			</button>
				{/* <div className="article-content">
					<div className="paragraph">Content of article 1</div>
					<img
						// src="https://picsum.photos/200/300"
						src="/src/pages/login.jsx"
						alt="random"
						className="randImage"
					/>
				</div> */}
			</React.Fragment>
		),
	};
}

function article_2() {
	return {
		img: "https://res.cloudinary.com/duivrjbfz/image/upload/v1701195236/myimages/course2_s8obto.png",
		title: "ADVANCED COURSE",
		description:
			"This is advance course on Video editing, prefferd for those who knows basics of editing already.",
		style: ``,
		keywords: [
			"Film Production",
			"Video Creation", 
			"Cinematography", 
			"Editing Process",
		],
		body: (
			<React.Fragment>
			{/* <button style={buttonStyle}>
				Login to Enroll
			</button> */}
			<button style={buttonStyle}>
				<Link to="/login">
				Login to Enroll
				</Link>	
			</button>
			</React.Fragment>
		),
	};
}

const myArticles = [article_1, article_2];

export default myArticles;

import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Socials from "../components/about/socials";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/contact.css";

const Contact = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "contact");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Contact | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="contact" />
				<div className="content-wrapper">
					<div className="contact-logo-container">
						<div className="contact-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="contact-container">
						<div className="title contact-title">
							Let's Get in Touch: Ways to Connect with Me
						</div>

						<div className="subtitle contact-subtitle">
							Thank you for reaching out! Your interest matters. Whether you have feedback,
							questions, or suggestions, I'm here for it all. For specific inquiries, don't
							hesitate to drop me an email directly at:{" "}
							<a href={`mailto:${INFO.main.email}`}>{INFO.main.email}</a>. I strive to respond
							promptly to all messages, typically within 24 hours, though it might take a
							bit longer during peak times. Another convenient option is to utilize the
							contact form on my website. Fill in the necessary fields, and I'll reach
							out to you at the earliest opportunity. Additionally, if you prefer social
							media, let's connect on:{" "}
							<a href={INFO.socials.instagram} target="_blank" rel="noreferrer">
							{INFO.socials.instagram}
							</a>
							. I post regular updates and engage with my followers there, so don't hesitate
							to reach out. Thanks again for your interest, and I look forward to hearing
							from you!
						</div>

						{/* Feedback Form */}
						<div className="feedback-form">
						<h2 className="form-heading">Send Feedback</h2>
						<form action={`mailto:aayushfreelancingservice@gmail.com`} method="post" encType="text/plain">
							<textarea
							className="feedback-textfield"
							rows="5"
							cols="50"
							name="feedback"
							placeholder="Type your feedback here..."
							></textarea>
							<br />
							<br />
							<button type="submit" className="send-button">Send Feedback</button>
						</form>
						</div>
						</div>


					<div className="socials-container">
						<div className="contact-socials">
							<Socials />
						</div>
					</div>

					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Contact;

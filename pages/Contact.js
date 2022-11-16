import React,{useEffect} from 'react'
import LandingPage from '../Components/LandingPage';
import Navbar from '../Components/Navbar';
import { BsLinkedin } from "react-icons/bs";
import Image from "next/image";
import Phone from "../styles/images/159832.png";
import Office from "../styles/images/535239.png";
import Email from "../styles/images/561127.png";
import Head from 'next/head';
import AOS from "aos";
import "aos/dist/aos.css";
const Contact = () => {
    useEffect(() => {
			AOS.init({
				duration: 2000,
			});
		}, []);
  return (
		<div>
			<Head>
				<title>Contact Us</title>
			</Head>
			<section
				className="u-align-center u-clearfix u-gradient u-section1"
				src=""
				id="sec-a2a2"
			>
				<Navbar />
				<LandingPage
					Name="Contact Us"
					desc="The company has staff in the professional, technical & administration categories. We are recognized as a supplier of Information & Communication Technology equipment, Softwares and associated products. "
				/>
			</section>
			<section
				className="u-clearfix u-valign-bottom-lg u-valign-bottom-md u-valign-bottom-xl u-white u-section-16"
				id="carousel_ee4d"
				data-aos="fade-in"
			>
				<div className="u-expanded-width u-palette-1-base u-shape u-shape-rectangle u-shape-1"></div>
				<div className="u-list u-list-1">
					<div className="u-repeater u-repeater-1">
						<div className="u-align-center u-container-style u-list-item u-radius-20 u-repeater-item u-shape-round u-white u-list-item-1">
							<a href="https://www.google.com/maps/place/Majid+Farms+and+Fruits+Suppliers/@34.5094906,72.0667648,17z/data=!3m1!4b1!4m5!3m4!1s0x38dea94e6d4f5971:0xce8c5b82129280ed!8m2!3d34.50952!4d72.0689749">
								<div className="u-container-layout u-similar-container u-valign-top u-container-layout-1">
									<span className="u-file-icon u-icon u-text-palette-1-base u-icon-1">
										<Image src={Office} alt="USS Enterprise ICT company" />
									</span>

									<h3 className="u-text u-text-1">our main office</h3>
									<p className="u-text u-text-2">
										Majid Farms and Fruits Suppliers, Plai, University of
										Malakand, Malakand, Khyber Pakhtunkhwa
									</p>
								</div>
							</a>
						</div>
						<a href="tel:+923459371589">
							<div className="u-align-center u-container-style u-list-item u-radius-20 u-repeater-item u-shape-round u-white u-list-item-2">
								<div className="u-container-layout u-similar-container u-valign-top u-container-layout-2">
									<span className="u-file-icon u-icon u-text-palette-1-base u-icon-2">
										<Image src={Phone} alt="USS Enterprise ICT company" />
									</span>
									<h3 className="u-text u-text-3">phone number</h3>
									<p className="u-text u-text-4">
										<b>+92-3459371589</b>
									</p>
								</div>
							</div>
						</a>
						<a href="mailto: info@majidfarms.com">
							<div className="u-align-center u-container-style u-list-item u-radius-20 u-repeater-item u-shape-round u-white u-list-item-3">
								<div className="u-container-layout u-similar-container u-valign-top u-container-layout-3">
									<span className="u-file-icon u-icon u-text-palette-1-base u-icon-3">
										<Image src={Email} alt="USS Enterprise ICT company" />
									</span>
									<h3 className="u-text u-text-5">Email</h3>
									<p className="u-text u-text-6">
										<a
											href="mailto:hello@theme.com"
											className="u-active-none u-border-1 u-border-palette-1-base u-btn u-button-link u-button-style u-hover-none u-none u-text-palette-1-base u-btn-1"
										>
											<b>info@majidfarms.com</b>
											<br />
										</a>
									</p>
								</div>
							</div>
						</a>
					</div>
				</div>
				<div className="u-clearfix u-layout-wrap u-layout-wrap-1">
					<div className="u-layout">
						<div className="u-layout-row">
							<div className="u-align-left u-container-style u-layout-cell u-left-cell u-size-30 u-layout-cell-1">
								<div className="u-container-layout u-container-layout-4">
									<div className="u-align-center-xs u-container-style u-expanded-width-sm u-expanded-width-xs u-group u-radius-50 u-shape-round u-similar-fill u-white u-group-1">
										<div className="u-container-layout u-padding-12 u-container-layout-5">
											<p className="u-text u-text-default-lg u-text-default-md u-text-default-xl u-text-7">
												For all enquiries, Please email us while using below
												form
											</p>
											<div className="u-align-left u-form u-form-1">
												<form
													className="u-clearfix u-form-spacing-28 u-form-vertical u-inner-form m-40"
													action="https://formsubmit.co/info@majidfarms.com"
													method="POST"
													target="_blank"
												>
													<div className="u-form-group u-form-name">
														<label
															forhtml="name-5a14"
															className="u-form-control-hidden u-label u-text-palette-1-base"
														>
															Name
														</label>
														<input
															type="text"
															placeholder="Enter your Name"
															id="Name"
															name="name"
															className="u-border-2 u-border-black u-border-no-left u-border-no-right u-border-no-top u-input u-input-rectangle u-white"
															required
														/>
													</div>
													<div className="u-form-email u-form-group">
														<label
															forhtml="email-5a14"
															className="u-form-control-hidden u-label u-text-palette-1-base"
														>
															Email
														</label>
														<input
															type="email"
															placeholder="Enter a valid email address"
															id="Email"
															name="email"
															className="u-border-2 u-border-black u-border-no-left u-border-no-right u-border-no-top u-input u-input-rectangle u-white"
															required
														/>
													</div>
													<div className="u-form-group u-form-message">
														<label
															forhtml="message-5a14"
															className="u-form-control-hidden u-label u-text-palette-1-base"
														>
															Message
														</label>
														<textarea
															placeholder="tour Message"
															rows="4"
															cols="50"
															id="Body"
															name="message"
															required
															className="u-border-2 u-border-black u-border-no-left u-border-no-right u-border-no-top u-input u-input-rectangle u-white"
														></textarea>
													</div>
													<div className="u-align-left u-form-group u-form-submit">
														<button
															type="submit"
															className="u-active-black u-border-none u-btn u-btn-round u-btn-submit u-button-style u-hover-black u-palette-1-base u-radius-50 u-btn-2"
														>
															Submit
														</button>
													</div>
												</form>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="u-align-left u-container-style u-layout-cell u-right-cell u-size-30 u-layout-cell-2">
								<div className="u-container-layout u-container-layout-6">
									<h2 className="u-text u-text-default u-text-8">
										Get in touch
									</h2>
									<h3 className="u-custom-font u-text u-text-font u-text-9">
										{" "}
										We believe sustainability is vitally important.
									</h3>
									<p className="u-text u-text-10">
										Please get in touch and our expert support team will answer
										all your question{" "}
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

export default Contact

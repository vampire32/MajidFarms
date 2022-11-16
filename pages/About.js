import React,{useEffect} from 'react'
import LandingPage from '../Components/LandingPage';
import Navbar from '../Components/Navbar';
import { AiFillPlayCircle } from "react-icons/ai";
import { FiPenTool } from "react-icons/fi";
import { FaHorseHead } from "react-icons/fa";
import { BiAnchor } from "react-icons/bi";
import Image from "next/image";
import BM from "../styles/images/about-business-man.jpg";
import Footer from '../Components/Footer';
import Smart1 from "../styles/images/orange-icon-removebg-preview.png";
import Smart2 from "../styles/images/peach-icon-removebg-preview.png";
import Smart3 from "../styles/images/guava-icon-removebg-preview.png";
import Smart4 from "../styles/images/loquat-icon-removebg-preview.png";
import F1 from "../styles/images/orange-service-removebg-preview.png";
import F2 from "../styles/images/peach-removebg-preview.png";
import F3 from "../styles/images/amrood-services-removebg-preview.png";
import F4 from "../styles/images/loquat-services-removebg-preview.png";
import icon1 from "../styles/images/icon1.png";
import icon2 from "../styles/images/icon2.png";
import icon3 from "../styles/images/icon3.png";
import icon4 from "../styles/images/icon4.png";
import food from "../styles/images/why.jpg";
import Product1 from "../styles/images/CaraNavelOgrange.jpg";
import Product2 from "../styles/images/SweetOrange.jpg";
import Product3 from "../styles/images/amrood.jpg";
import Product4 from "../styles/images/loquat.jpg";
import Product5 from "../styles/images/peach.jpg";
import Head from 'next/head';
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
	useEffect(() => {
		AOS.init({
			duration: 2000,
		});
	}, []);
  return (
		<div>
			<Head>
				<title>About Us</title>
			</Head>
			<section
				className="u-align-center u-clearfix u-gradient u-section1"
				src=""
				id="sec-a2a2"
			>
				<Navbar />
				<LandingPage
					Name="About Us"
					desc="The company has staff in the professional, technical & administration categories. We are recognized as a supplier of Information & Communication Technology equipment, Softwares and associated products. "
				/>
			</section>
			<section className=" about section">
				<div className="container">
					<div className="row" data-aos="fade-up">
						<div
							className="title text-center wow fadeIn"
							data-wow-duration="1500ms"
						>
							<h2 className="text-black">
								About <span className="color">Us</span>{" "}
							</h2>
							<div className="border"></div>
						</div>

						
					</div>
				</div>
			</section>
			
			<section
				className="u-clearfix u-white usection2"
				id="carousel_ad49"
				data-aos="zoom-in"
			>
				<div className="u-align-center u-list u-list-1">
					<div className="u-repeater u-repeater-1">
						<div className="u-container-style u-custom-item u-list-item u-palette-1-light-1 u-repeater-item u-shape-rectangle">
							<div className="u-container-layout u-similar-container u-valign-top u-container-layout-3">
								<h3 className="u-align-left u-custom-font u-custom-item u-font-montserrat u-text u-text-body-alt-color u-text-default u-text-3">
									Our Vision
								</h3>
								<p className="u-align-justify u-custom-item u-text u-text-4">
									<span>
										
									</span>
									<br />
								</p>
							</div>
						</div>
						<div className="u-container-style u-custom-item u-list-item u-palette-1-base u-repeater-item u-shape-rectangle">
							<div className="u-container-layout u-similar-container u-valign-top u-container-layout-4">
								<h3
									className="u-align-left u-custom-font u-custom-item u-font-montserrat u-text u-text-default u-text-5"
									style={{ color: "white" }}
								>
									Our Mission
								</h3>
								<p className="u-align-justify u-custom-item u-text u-text-palette-1-base u-text-6">
									<span className="u-text-body-alt-color">
										
									</span>
									<br />
								</p>
							</div>
						</div>
						<div className="u-container-style u-custom-item u-list-item u-palette-1-base u-repeater-item u-shape-rectangle">
							<div className="u-container-layout u-similar-container u-valign-top u-container-layout-5">
								<h3 className="u-align-left u-custom-font u-custom-item u-font-montserrat u-text u-text-body-alt-color u-text-default u-text-7">
									Our Core Values
								</h3>
								<p className="u-align-justify u-custom-item u-text u-text-8">
									<span>
										
									</span>
									<br />
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
			
			<div class="choose ">
				<div class="container">
					<div class="row" data-aos="zoom-in-up">
						<div class="col-md-8">
							<div class="titlepage">
								<h2>Why Choose Us? </h2>
								<p style={{ fontSize: "25px" }}>
									Since We Deliver More Than Organic Produce
								</p>
							</div>
						</div>
					</div>
				</div>
				<div class="container-fluid " data-aos="zoom-in-up">
					<div class="row d_flex">
						<div class="col-xl-7 col-lg-7 col-md-12 col-sm-12">
							<div class="padding_with">
								<div class="row">
									<div class="col-md-6 padding_bottom">
										<div class="choose_box">
											<i>
												<Image src={icon1} alt="#" />
											</i>
											<div class="choose_text">
												<h3>Excellent Service</h3>
												<p>
													You selected the fruit item, made payment, and it was
													delivered to the designated address.
												</p>
											</div>
										</div>
									</div>
									<div class="col-md-6 padding_bottom">
										<div class="choose_box">
											<i>
												<Image src={icon2} alt="#" />
											</i>
											<div class="choose_text">
												<h3>EAT MORE HEALTHILY</h3>
												<p>
													
												</p>
											</div>
										</div>
									</div>
									<div class="col-md-6 padding_bottom2">
										<div class="choose_box">
											<i>
												<Image src={icon3} alt="#" />
											</i>
											<div class="choose_text">
												<h3>Quality And Reliability</h3>
												<p>
													
												</p>
											</div>
										</div>
									</div>
									<div class="col-md-6">
										<div class="choose_box">
											<i>
												<Image src={icon4} alt="#" />
											</i>
											<div class="choose_text">
												<h3>Expert Farmer</h3>
												<p>
													
												</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="col-xl-5 col-lg-5 col-md-12 col-sm-12">
							<div class="choose_img">
								<figure>
									<Image src={food} alt="#" />
								</figure>
							</div>
						</div>
					</div>
				</div>
				<div class="container">
					<div class="row">
						<div class="col-md-5"></div>
					</div>
				</div>
			</div>
			<section
				className="u-clearfix u-section-10 mt-[5rem]"
				id="carousel_d06f"
				data-aos="fade-in"
			>
				<div className="u-clearfix u-expanded-width u-layout-wrap u-layout-wrap-1">
					<div className="u-gutter-0 u-layout">
						<div className="u-layout-row" data-aos="zoom-in">
							<div className="u-container-style u-layout-cell u-palette-1-base u-size-30 u-layout-cell-1">
								<div className="u-container-layout u-valign-middle u-container-layout-1">
									<span className="u-custom-font u-font-montserrat u-text u-text-body-alt-color u-text-1">
										What We Do
									</span>
									<p className="u-align-justify u-text u-text-body-alt-color u-text-2">
									
									</p>
								</div>
							</div>
							<div className="u-align-left u-container-style u-layout-cell u-size-30 u-layout-cell-2">
								<div className="u-container-layout u-valign-middle u-container-layout-2">
									<div
										className="u-align-center-sm u-align-center-xs u-image u-image-circle u-image-contain u-image-1"
										alt="USS Enterprise ICT company"
										data-image-width="241"
										data-image-height="192"
									></div>
									<p className="u-text u-text-black u-text-3 text-white"></p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<Footer />
		</div>
	);
}

export default About
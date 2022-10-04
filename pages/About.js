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

						<div
							className="col-md-4 text-center wow fadeInUp"
							data-wow-duration="500ms"
						>
							<div className="block font-weight-bold ">
								<div className="icon-box">
									<FiPenTool className="tf-tools  ml-[50px] icons"></FiPenTool>
								</div>

								<div className="content text-center">
									<h3 className="ddd ">Experience over 10 Year</h3>
									<p className="dddp">
										We are experience buyers in Abu dhabi & Al ain. We have a
										high knowledge of furnitures and appliances for buying and
										selling.
									</p>
								</div>
							</div>
						</div>

						<div
							className="col-md-4 text-center wow fadeInUp"
							data-wow-duration="500ms"
							data-wow-delay="250ms"
						>
							<div className="block drop-shadow-2xl">
								<div className="icon-box">
									<FaHorseHead className="tf-strategy ml-[50px] icons"></FaHorseHead>
								</div>

								<div className="content text-center">
									<h3 className="ddd">Were Professional</h3>
									<p className="dddp">
										We are professional buyers in Abu Dhabi over many years. We
										know what we sell and buy and We provide professional and
										reliable services to our customers.
									</p>
								</div>
							</div>
						</div>

						<div
							className="col-md-4 text-center wow fadeInUp"
							data-wow-duration="500ms"
							data-wow-delay="500ms"
						>
							<div className="block kill-margin-bottom drop-shadow-2xl">
								<div className="icon-box">
									<BiAnchor className="tf-anchor2 ml-[50px] icons"></BiAnchor>
								</div>

								<div className="content text-center">
									<h3 className="ddd">Customer Support</h3>
									<p className="dddp">
										We have a responsive team for your services and provide 24/7
										services. Star used furniture are here to take care of your
										problems.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="section about-2 padding-0 " id="about">
				<div className="container-fluid">
					<div className="row" data-aos="fade-up">
						<div className="col-md-6 padding-0 ">
							<Image className="img-responsive" src={BM} alt="" />
						</div>
						<div className="col-md-6">
							<div className="content-block">
								<h2 style={{ color: "white" }}>Majid Farms Fruit Farms</h2>
								<p>
									Qui mollit do cupidatat quis officia exercitation dolore
									cillum. Occaecat ullamco ullamco pariatur veniam ullamco
									dolore ea irure ad cillum aute culpa esse id. Consequat
									consectetur incididunt do aliqua Lorem consectetur mollit
									minim eu reprehenderit. Ea ut nulla consequat nostrud eiusmod
									sint fugiat excepteur. Pariatur velit proident ad laborum esse
									minim commodo ullamco mollit aliquip. Deserunt consectetur
									minim eu deserunt et deserunt. Fugiat laborum dolore elit
									exercitation. Nulla ut consectetur consectetur magna tempor
									laborum aute. Exercitation fugiat velit mollit incididunt
									cupidatat. Ut aliquip deserunt tempor excepteur commodo.
									Commodo proident dolor id enim. Quis qui eiusmod amet ex
									dolore.Laboris do esse enim occaecat duis exercitation
									laborum. Sint excepteur proident elit voluptate reprehenderit
									incididunt ullamco. Qui nisi nulla aute eiusmod minim duis
									Lorem laboris qui sunt commodo. Proident enim labore enim
									laboris ut fugiat adipisicing consectetur.
								</p>
								<p>
									Officia labore pariatur ut velit dolore. Minim eu incididunt
									non ex dolor Lorem eu nisi dolore ipsum reprehenderit fugiat.
									Magna ad ipsum irure enim et nisi exercitation eu. Esse sunt
									dolor duis commodo ea cupidatat ad exercitation. Ea ad eu
									commodo consequat cillum occaecat minim commodo. Do anim culpa
									ullamco sit tempor sit reprehenderit ex nulla ut irure Lorem.
									Incididunt veniam sit reprehenderit esse aliquip nisi dolor.
								</p>

								<p>
									Lorem ullamco minim incididunt culpa est incididunt. Deserunt
									commodo eu et elit reprehenderit esse esse excepteur anim. Ex
									proident ex eiusmod in ipsum dolore est duis irure deserunt.
									Ea pariatur ea culpa fugiat fugiat ut irure cillum aliquip.
								</p>
							</div>
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
										&nbsp; Our vision is simple to be an effectivevalue-added
										technology partner trusted by its clients through our
										consultative selling, support and services for their every
										exploration with innovations.&nbsp;&nbsp;
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
										&nbsp; Creating a powerful and valued brand associated to
										being a trusted corporate strategy consultant that will be
										synonymous with developing and addressing the business
										problems of customers through technological change and
										innovation.&nbsp;&nbsp;
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
										Committed with dedication.
										<br />
										&nbsp;Teamwork &amp; Synchronization.&nbsp;
										<br />
										Compliance professionally
										<br />
										Best Recommendations.
										<br />
										&nbsp;Consultancy with Excellency.&nbsp;&nbsp;
									</span>
									<br />
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section
				className="u-clearfix u-color-scheme-u10 u-color-style-multicolor-1 u-grey-90 u__section_111"
				id="sec-d871"
				data-aos="zoom-in"
			>
				<div className="u-clearfix u-sheet u-valign-middle u-sheet-1">
					<div className="u-clearfix u-expanded-width u-layout-wrap u-layout-wrap-1">
						<div className="u-layout">
							<div className="u-layout-row">
								<div className="u-align-center-sm u-align-center-xs u-align-justify-lg u-align-justify-md u-align-justify-xl u-container-style u-layout-cell u-left-cell u-size-42 u-layout-cell-1">
									<div className="u-container-layout u-valign-middle u-container-layout-1">
										<h3 className="u-custom-font u-font-ubuntu u-text u-text-1">
											Are You Interested Call Us Now!
											<br />
											<span className="u-text-palette-1-base">
												<b>
													<span className="u-text-palette-3-base">
														+92-21-34390018
													</span>
												</b>
											</span>
											<span className="u-text-palette-3-base"></span>
											<br />
											<br />
											<span style={{ fontSize: "1.5rem" }}>
												All you have to do is phone or email us for an
												appointment, and our assessment specialist will contact
												you. Don’t waste any more time on various platforms;
												call us right now and let&nbsp; acquire it from us.
											</span>
											<br />
										</h3>
									</div>
								</div>
								<div className="u-align-left u-container-style u-layout-cell u-right-cell u-size-18 u-layout-cell-2">
									<div className="u-container-layout u-container-layout-2">
										<a
											href="tel:+92-21-34390018"
											className="u-border-none u-btn u-btn-round u-button-style u-hover-white u-palette-3-base u-radius-50 u-btn-1"
										>
											<span className="u-icon">
												<svg
													className="u-svg-content"
													viewBox="0 0 513.64 513.64"
													x="0px"
													y="0px"
													style={{ width: "1em", height: "1em" }}
												>
													<path d="M499.66,376.96l-71.68-71.68c-25.6-25.6-69.12-15.359-79.36,17.92c-7.68,23.041-33.28,35.841-56.32,30.72 c-51.2-12.8-120.32-79.36-133.12-133.12c-7.68-23.041,7.68-48.641,30.72-56.32c33.28-10.24,43.52-53.76,17.92-79.36l-71.68-71.68 c-20.48-17.92-51.2-17.92-69.12,0l-48.64,48.64c-48.64,51.2,5.12,186.88,125.44,307.2c120.32,120.32,256,176.641,307.2,125.44 l48.64-48.64C517.581,425.6,517.581,394.88,499.66,376.96z"></path>
												</svg>
											</span>
											&nbsp;Call now
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
            <Footer/>
		</div>
	);
}

export default About
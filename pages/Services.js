import React,{useEffect} from 'react'
import LandingPage from '../Components/LandingPage';
import Navbar from '../Components/Navbar';
import Image from "next/image";
import F1 from "../styles/images/orange-service-removebg-preview.png";
import F2 from "../styles/images/peach-removebg-preview.png";
import F3 from "../styles/images/amrood-services-removebg-preview.png";
import F4 from "../styles/images/loquat-services-removebg-preview.png";
import icon1 from "../styles/images/icon1.png";
import Footer from '../Components/Footer';
import Head from 'next/head';
import AOS from "aos";
import "aos/dist/aos.css";

const Services = () => {
    useEffect(() => {
			AOS.init({
				duration: 2000,
			});
		}, []);
  return (
		<div>
            <Head>
                <title>Services</title>
            </Head>
			<section
				className="u-align-center u-clearfix u-gradient u-section1"
				src=""
				id="sec-a2a2"
			>
				<Navbar />
				<LandingPage
					Name="Services"
					desc="The company has staff in the professional, technical & administration categories. We are recognized as a supplier of Information & Communication Technology equipment, Softwares and associated products. "
				/>
			</section>
			<div
				class="jumbotron jumbotron-fluid feature pb-[9rem]"
				id="feature-first"
			>
				<div class="container my-5">
					<h2 className="text-center pb-[5rem]">Products</h2>
					<div class="row justify-content-between text-center text-md-left">
						<div
							data-aos="fade-up"
							data-aos-duration="1000"
							data-aos-once="true"
							class="col-md-6"
						>
							<h2 class="font-weight-bold">Oranges</h2>
							<p class="my-4 text-[30px]">
								We believe in the quality of our products, which include navel
								and sweet oranges.Oranges are a specialty of our farms and the
								region
							</p>
						</div>
						<div
							data-aos="fade-up"
							data-aos-duration="1000"
							data-aos-once="true"
							class="col-md-6 align-self-center"
						>
							<div class="mx-auto d-block drop-shadow-xl">
								<Image src={F1} alt="Take a look inside" />
							</div>
						</div>
					</div>
				</div>
			</div>
			<div
				class="jumbotron jumbotron-fluid feature text-white "
				id="feature-last"
			>
				<div class="container">
					<div class="row justify-content-between text-center text-md-left">
						<div
							data-aos="fade-up"
							data-aos-duration="1000"
							data-aos-once="true"
							class="col-md-6 flex-md-last"
						>
							<h2 class="font-weight-bold text-white">Peaches</h2>
							<p class="my-4 text-[30px]">
								Our farm produces fresh peaches every season, and we then
								provide them to consumers in quality
							</p>
						</div>
						<div
							data-aos="fade-up"
							data-aos-duration="1000"
							data-aos-once="true"
							class="col-md-6 align-self-center flex-md-first"
						>
							<div class="mx-auto d-block drop-shadow-xl">
								<Image src={F2} alt="Safe and reliable" />
							</div>
						</div>
					</div>
				</div>
			</div>
			<div
				class="jumbotron jumbotron-fluid feature pb-[9rem]"
				id="feature-third"
			>
				<div class="container my-5">
					<div class="row justify-content-between text-center text-md-left">
						<div
							data-aos="fade-up"
							data-aos-duration="1000"
							data-aos-once="true"
							class="col-md-6 align-self-center"
						>
							<div class="mx-auto d-block drop-shadow-xl">
								<Image src={F3} alt="Take a look inside" />
							</div>
						</div>
						<div
							data-aos="fade-up"
							data-aos-duration="1000"
							data-aos-once="true"
							class="col-md-6"
						>
							<h2 class="font-weight-bold">Guava</h2>
							<p class="my-4 text-[30px]">
								Guava cultivation is also a part of our fields, and the quality
								of these fruits is unmatched in the region. The pink guava that
								grows on our farms is the best guava.
							</p>
						</div>
					</div>
				</div>
			</div>
			<div
				class="jumbotron jumbotron-fluid feature text-white "
				id="feature-last"
			>
				<div class="container">
					<div class="row justify-content-between text-center text-md-left">
						<div
							data-aos="fade-up"
							data-aos-duration="1000"
							data-aos-once="true"
							class="col-md-6 flex-md-last"
						>
							<h2 class="font-weight-bold text-white">Loquat</h2>
							<p class="my-4 text-[30px]">
								Another member of our family is the loquat, which we grow in
								modest quantities but with the highest quality. They are tasty
								and sweet.
							</p>
						</div>
						<div
							data-aos="fade-up"
							data-aos-duration="1000"
							data-aos-once="true"
							class="col-md-6 align-self-center flex-md-first"
						>
							<div class="mx-auto d-block drop-shadow-xl">
								<Image src={F4} alt="Safe and reliable" />
							</div>
						</div>
					</div>
				</div>
			</div>
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

export default Services
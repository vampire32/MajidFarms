import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../Components/Navbar'
import styles from '../styles/Home.module.css'
import React, { useEffect } from "react";
import Smart1 from '../styles/images/orange-icon-removebg-preview.png'
import Smart2 from "../styles/images/peach-icon-removebg-preview.png";
import Smart3 from "../styles/images/guava-icon-removebg-preview.png";
import Smart4 from "../styles/images/loquat-icon-removebg-preview.png";
import F1 from '../styles/images/orange-service-removebg-preview.png'
import F2 from "../styles/images/peach-removebg-preview.png";
import F3 from "../styles/images/amrood-services-removebg-preview.png";
import F4 from "../styles/images/loquat-services-removebg-preview.png";
import icon1 from '../styles/images/icon1.png'
import icon2 from "../styles/images/icon2.png";
import icon3 from "../styles/images/icon3.png";
import icon4 from "../styles/images/icon4.png";
import food from '../styles/images/why.jpg'
import Product1 from '../styles/images/CaraNavelOgrange.jpg'
import Product2 from "../styles/images/SweetOrange.jpg";
import Product3 from '../styles/images/amrood.jpg'
import Product4 from "../styles/images/loquat.jpg";
import Product5 from '../styles/images/peach.jpg'
import Testimonials from '../Components/Testimonials'
import Icon from "../styles/images/709605.png";
import Contactus from '../Components/Contactus'
import Footer from '../Components/Footer'
import AOS from "aos";
import "aos/dist/aos.css";


export default function Home() {
	useEffect(() => {
		AOS.init({
			duration: 2000,
		});
	}, []);
  return (
		<div>
			<Head>
				<title>Majid Fruit Farms</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div
				className="u-body u-overlap u-overlap-contrast u-overlap-transparent u-xl-mode"
				data-lang="en"
			>
				<section
					className="u-align-left u-clearfix u-image u-shading u-section-1"
					id="carousel_5ad0"
					data-image-width="1782"
					data-image-height="1080"
				>
					<Navbar />
					<div className="u-clearfix u-sheet u-sheet-1">
						<h1 className="u-align-left u-text u-text-palette-3-base u-text-1">
							<b>Majid Fruit Farms</b>
							<br />
							<b style={{ color: "white" }}> c​ompany</b>
						</h1>
						<p className="u-text u-text-body-alt-color u-text-3">
							We are famous for our excellent oranges, but we also have a
							variety of other fruits, including peaches, guavas, and loquats.
							We offer our fruits to a large number of consumers.
							<b>
								<i>
									“
									<span className="u-text-palette-3-base">
										Foods and Services Portfolio.
									</span>
								</i>
							</b>
						</p>
						<a
							href="tel:+92-3459371589"
							className="u-active-white u-border-2 u-border-hover-white u-border-white u-btn u-button-style u-hover-white u-none u-text-active-black u-text-body-alt-color u-text-hover-palette-1-base u-btn-1"
						>
							Call Now
						</a>
					</div>
				</section>
			</div>
			<div class="container my-5 py-2">
				<h2 class="text-center font-weight-bold my-5">Our WholeSales Fruits</h2>
				<div class="row">
					<div
						data-aos="fade-up"
						data-aos-delay="0"
						data-aos-duration="1000"
						data-aos-once="true"
						class="col-md-3 text-center"
					>
						<div class="mx-auto">
							<Image src={Smart1} alt="Anti-spam" />
						</div>
						<h4>Orange</h4>
					</div>
					<div
						data-aos="fade-up"
						data-aos-delay="200"
						data-aos-duration="1000"
						data-aos-once="true"
						class="col-md-3 text-center"
					>
						<div class="mx-auto">
							<Image
								src={Smart2}
								width={125}
								height={125}
								alt="Phishing Detect"
							/>
						</div>
						<h4>Peach</h4>
					</div>
					<div
						data-aos="fade-up"
						data-aos-delay="400"
						data-aos-duration="1000"
						data-aos-once="true"
						class="col-md-3 text-center"
					>
						<div class="mx-auto">
							<Image src={Smart3} width={125} height={125} alt="Smart Scan" />
						</div>
						<h4>Guava</h4>
					</div>
					<div
						data-aos="fade-up"
						data-aos-delay="400"
						data-aos-duration="1000"
						data-aos-once="true"
						class="col-md-3 text-center"
					>
						<div class="mx-auto">
							<Image src={Smart4} width={125} height={125} alt="Smart Scan" />
						</div>
						<h4>Loquat</h4>
					</div>
				</div>
			</div>
			<div
				class="jumbotron jumbotron-fluid feature pb-[9rem]"
				id="feature-first"
			>
				<div class="container my-5">
					<div class="row justify-content-between text-center text-md-left">
						<div
							data-aos="fade-right"
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
							data-aos="fade-left"
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
							data-aos="fade-left"
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
							data-aos="fade-right"
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
							data-aos="fade-left"
							data-aos-duration="1000"
							data-aos-once="true"
							class="col-md-6 align-self-center"
						>
							<div class="mx-auto d-block drop-shadow-xl">
								<Image src={F3} alt="Take a look inside" />
							</div>
						</div>
						<div
							data-aos="fade-right"
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
							data-aos="fade-left"
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
							data-aos="fade-right"
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
													To consume the recommended daily servings of fruits
													you must have produce delivered to your house or place
													of business on a regular basis.
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
													Since we previously stated that we believe in quality
													over quantity, the quality of the fruits is assessed
													before delivery.
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
													Our skilled farmers are aware of the quality of the
													seeds, soil, and products and are aware of when the
													products should be harvested.
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
										Our goal is to transform the food system by offering a
										wholesome, natural substitute for processed food. We offer
										more than just organic produce delivery. We are lucky to be
										able to provide it to our family because we manually gather
										it. Come to one of our farm events so we can give you a
										handshake and express our gratitude. To consume the
										recommended daily servings of fruits you must have produce
										delivered to your house, workplace, or a designated pickup
										site on a regular basis. Select (and modify) the boxs size
										and configuration to suit your needs. To accommodate your
										schedule, you can even miss deliveries or alter the
										frequency of your deliveries. You have the opportunity to
										get to know your farmer and take an active role in our
										farming community.
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
			<div className="conatiner">
				<h2 className="text-center">Our Products</h2>
				<div className="row justify-center" data-aos="zoom-in-up">
					<div className="col-md-5">
						<div
							class="card product-bg1"
							style={{ width: "15rem;", height: "15rem" }}
						>
							<div class="card-body text-center mt-[4rem]">
								<h2 class="card-title " style={{ color: "white" }}>
									Cara Navel Ogrange
								</h2>
							</div>
						</div>
					</div>
					<div className="col-md-5">
						<div
							class="card product-bg2"
							style={{ width: "15rem;", height: "15rem" }}
						>
							<div class="card-body text-center mt-[4rem]">
								<h2 class="card-title " style={{ color: "white" }}>
									Guava
								</h2>
							</div>
						</div>
					</div>
					<div className="col-md-5 mt-[3rem]">
						<div
							class="card product-bg3"
							style={{ width: "15rem;", height: "15rem" }}
						>
							<div class="card-body text-center mt-[4rem]">
								<h2 class="card-title " style={{ color: "white" }}>
									Loquat
								</h2>
							</div>
						</div>
					</div>
					<div className="col-md-5 mt-[3rem]">
						<div
							class="card product-bg4"
							style={{ width: "15rem;", height: "15rem" }}
						>
							<div class="card-body text-center mt-[4rem]">
								<h2 class="card-title " style={{ color: "white" }}>
									Peaches
								</h2>
							</div>
						</div>
					</div>
				</div>
			</div>

			<Testimonials />
			<div className="container ">
				<h1 className="text-center font-extrabold leading-normal">
					3 Steps To Get
				</h1>
				<h1 className="text-center font-extrabold leading-normal">
					Fresh Food
				</h1>
				<div className="row" data-aos="zoom-in-up">
					<div className="col-md-4">
						<div class="card bg" style={{ width: "15rem;", height: "15rem" }}>
							<div class="card-body text-center mt-[4rem]">
								<h2 class="card-title " style={{ color: "white" }}>
									Pick a Food
								</h2>
							</div>
						</div>
					</div>
					<div className="col-md-4">
						<div class="card bg2" style={{ width: "15rem;", height: "15rem" }}>
							<div class="card-body text-center mt-[4rem]">
								<h2 class="card-title " style={{ color: "white" }}>
									Pay Bills
								</h2>
							</div>
						</div>
					</div>
					<div className="col-md-4">
						<div class="card bg3" style={{ width: "15rem;", height: "15rem" }}>
							<div class="card-body text-center mt-[4rem]">
								<h2 class="card-title " style={{ color: "white" }}>
									Take Delivery
								</h2>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Contactus />
			<Footer />
		</div>
	);
}

import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../Components/Navbar'
import styles from '../styles/Home.module.css'
import Smart1 from '../styles/images/smart-protect-1.jpg'
import Smart2 from "../styles/images/smart-protect-2.jpg";
import Smart3 from "../styles/images/smart-protect-3.jpg";
import F1 from '../styles/images/orange-service-removebg-preview.png'
import F2 from "../styles/images/peach-removebg-preview.png";
import F3 from "../styles/images/amrood-services-removebg-preview.png";
import F4 from "../styles/images/loquat-services-removebg-preview.png";
import icon1 from '../styles/images/icon1.png'
import icon2 from "../styles/images/icon2.png";
import icon3 from "../styles/images/icon3.png";
import icon4 from "../styles/images/icon4.png";
import food from '../styles/images/peaches.jpeg'
import Product1 from '../styles/images/CaraNavelOgrange.jpg'
import Product2 from "../styles/images/Sweet Orange.jpg";
import Product3 from '../styles/images/amrood.jpg'
import Product4 from "../styles/images/loquat.jpg";
import Product5 from '../styles/images/peach.jpg'
import Testimonials from '../Components/Testimonials'
import Icon from "../styles/images/709605.png";
import Contactus from '../Components/Contactus'
import Footer from '../Components/Footer'


export default function Home() {
  return (
		<div>
			<Head>
				<title>Create Next App</title>
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
							<b>Majid Food Farms</b>
							<br />
							<b style={{ color: "white" }}> c​ompany</b>
						</h1>
						<p className="u-text u-text-body-alt-color u-text-3">
							Id aliqua et velit laborum culpa exercitation est incididunt esse
							dolor esse consectetur exercitation. Mollit nostrud velit ullamco
							exercitation adipisicing consequat tempor aute elit. Velit aliquip
							veniam nisi voluptate in ipsum.
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
							href="tel:+92-21-34390018"
							className="u-active-white u-border-2 u-border-hover-white u-border-white u-btn u-button-style u-hover-white u-none u-text-active-black u-text-body-alt-color u-text-hover-palette-1-base u-btn-1"
						>
							Call Now
						</a>
						<p className="u-text u-text-body-alt-color u-text-4">
							Consultancy with Excellency.
						</p>
					</div>
				</section>
			</div>
			<div class="container my-5 py-2">
				<h2 class="text-center font-weight-bold my-5">Our Services</h2>
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
						<h4>Anti-spam</h4>
						<p>Lorem ipsum dolor sit amet porro his no his deleniti</p>
					</div>
					<div
						data-aos="fade-up"
						data-aos-delay="200"
						data-aos-duration="1000"
						data-aos-once="true"
						class="col-md-3 text-center"
					>
						<div class="mx-auto">
							<Image src={Smart2} alt="Phishing Detect" />
						</div>
						<h4>Phishing Detect</h4>
						<p>Ne error antiopam usu. Sed vocen concludaturque ea</p>
					</div>
					<div
						data-aos="fade-up"
						data-aos-delay="400"
						data-aos-duration="1000"
						data-aos-once="true"
						class="col-md-3 text-center"
					>
						<div class="mx-auto">
							<Image src={Smart3} alt="Smart Scan" />
						</div>
						<h4>Smart Scan</h4>
						<p>Et usu ocurreret elaboraret doctus prodesse assueverit.</p>
					</div>
					<div
						data-aos="fade-up"
						data-aos-delay="400"
						data-aos-duration="1000"
						data-aos-once="true"
						class="col-md-3 text-center"
					>
						<div class="mx-auto">
							<Image src={Smart3} alt="Smart Scan" />
						</div>
						<h4>Smart Scan</h4>
						<p>Et usu ocurreret elaboraret doctus prodesse assueverit.</p>
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
							<h2 class="font-weight-bold">Take a look inside</h2>
							<p class="my-4">
								Te iisque labitur eos, nec sale argumentum scribentur no,
								<br /> augue disputando in vim. Erat fugit sit at, ius lorem
								deserunt deterruisset no.
							</p>
							<a href="#" class="btn my-4 font-weight-bold atlas-cta cta-blue">
								Learn More
							</a>
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
							<h2 class="font-weight-bold text-white">Safe and reliable</h2>
							<p class="my-4">
								Duo suas detracto maiestatis ad, commodo lucilius invenire nec
								ad,
								<br /> eum et oratio disputationi. Falli lobortis his ad
							</p>
							<a href="#" class="btn my-4 font-weight-bold atlas-cta cta-blue">
								Learn More
							</a>
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
							<h2 class="font-weight-bold">Take a look inside</h2>
							<p class="my-4">
								Te iisque labitur eos, nec sale argumentum scribentur no,
								<br /> augue disputando in vim. Erat fugit sit at, ius lorem
								deserunt deterruisset no.
							</p>
							<a href="#" class="btn my-4 font-weight-bold atlas-cta cta-blue">
								Learn More
							</a>
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
							<h2 class="font-weight-bold text-white">Safe and reliable</h2>
							<p class="my-4">
								Duo suas detracto maiestatis ad, commodo lucilius invenire nec
								ad,
								<br /> eum et oratio disputationi. Falli lobortis his ad
							</p>
							<a href="#" class="btn my-4 font-weight-bold atlas-cta cta-blue">
								Learn More
							</a>
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
					<div class="row">
						<div class="col-md-8">
							<div class="titlepage">
								<h2>Why Choose Us? </h2>
								<p>
									there isnt anything embarrassing hidden in the middle of text.
									All the Lorem Ipsum generators on the Internet tend to repeat
									predefined{" "}
								</p>
							</div>
						</div>
					</div>
				</div>
				<div class="container-fluid">
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
													It is a long established fact that a reader will be
													distracted by the readable content of a
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
												<h3>Clean Working</h3>
												<p>
													It is a long established fact that a reader will be
													distracted by the readable content of a
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
													It is a long established fact that a reader will be
													distracted by the readable content of a
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
													It is a long established fact that a reader will be
													distracted by the readable content of a
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
						<div class="col-md-5">
							<a class="read_more" href="#">
								Read More
							</a>
						</div>
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
										Irure anim fugiat labore dolor consectetur eu ut Lorem quis
										occaecat cillum. Duis dolor laborum sint sit exercitation
										mollit pariatur nisi ullamco minim incididunt occaecat
										cupidatat enim. Fugiat est nisi incididunt veniam est
										exercitation. Exercitation ea anim laboris esse dolor
										laborum. Duis fugiat nulla aliqua velit elit occaecat fugiat
										exercitation. Nisi aliqua elit quis eiusmod magna cupidatat
										exercitation elit occaecat. Non proident officia aute
										ullamco. Ad ut in aliquip duis. Voluptate nulla id dolore
										do.
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
									<p className="u-text u-text-black u-text-3 text-white">
										Irure anim fugiat labore dolor consectetur eu ut Lorem quis
										occaecat cillum. Duis dolor laborum sint sit exercitation
										mollit pariatur nisi ullamco minim incididunt occaecat
										cupidatat enim. Fugiat est nisi incididunt veniam est
										exercitation. Exercitation ea anim laboris esse dolor
										laborum. Duis fugiat nulla aliqua velit elit occaecat fugiat
										exercitation. Nisi aliqua elit quis eiusmod magna cupidatat
										exercitation elit occaecat. Non proident officia aute
										ullamco. Ad ut in aliquip duis. Voluptate nulla id dolore
										do.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<div class="product">
				<div class="container">
					<div class="row">
						<div class="col-md-6">
							<div class="titlepage">
								<h2>Our Product</h2>
							</div>
						</div>
					</div>
				</div>
				<div class="container-fluid">
					<div class="row">
						<div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 padding_left0">
							<div class="product_box">
								<figure>
									<div className="product">
										<Image src={Product1} height={800} alt="#" />
									</div>
								</figure>
								<h3 class="">Cara Navel Ogrange</h3>
							</div>
						</div>
						<div class="col-xl-3 col-lg-3 col-md-3 col-sm-12">
							<div class="product_box">
								<figure>
									<Image src={Product2} alt="#" />
								</figure>
								<h3>Sweet Ogrange</h3>
							</div>
						</div>
						<div class="col-xl-3 col-lg-3 col-md-3 col-sm-12 padding_right0">
							<div class="product_box">
								<figure>
									<Image src={Product3} alt="#" />
								</figure>
								<h3>Valencia Ogrange</h3>
							</div>
						</div>
						<div class="col-xl-7 col-lg-7 col-md-7 col-sm-12 padding_left0">
							<div class="product_box">
								<figure>
									<Image src={Product4} width={1100} alt="#" />
								</figure>
								<h3>Clementines Orange</h3>
							</div>
						</div>
						<div class="col-xl-5 col-lg-5 col-md-5 col-sm-12 padding_right0">
							<div class="product_box">
								<figure>
									<Image src={Product5} alt="#" />
								</figure>
								<h3 className="black">Peaches</h3>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Testimonials />
			<section
				className="u-clearfix u-section-11"
				data-aos="slide-up"
				id="sec-69dc"
			>
				<div className="u-clearfix u-sheet u-sheet-1">
					<div className="u-expanded-width u-list u-list-1">
						<div className="u-repeater u-repeater-1">
							<div className="u-align-center u-container-style u-list-item u-repeater-item">
								<div className="u-container-layout u-similar-container u-container-layout-1">
									<span className="u-file-icon u-icon u-icon-circle u-palette-1-base u-text-white u-icon-1">
										<Image src={Icon} alt="USS Enterprise ICT company" />
									</span>
									<h3 className="u-text u-text-1">
										Committed with dedication.
									</h3>
								</div>
							</div>
							<div className="u-align-center u-container-style u-list-item u-repeater-item">
								<div className="u-container-layout u-similar-container u-container-layout-2">
									<span className="u-file-icon u-icon u-icon-circle u-palette-1-base u-text-white u-icon-2">
										<Image src={Icon} alt="USS Enterprise ICT company" />
									</span>
									<h3 className="u-text u-text-2">
										&nbsp;Teamwork &amp; Synchronization.
									</h3>
								</div>
							</div>
							<div className="u-align-center u-container-style u-list-item u-repeater-item">
								<div className="u-container-layout u-similar-container u-container-layout-3">
									<span className="u-file-icon u-icon u-icon-circle u-palette-1-base u-text-white u-icon-3">
										<Image src={Icon} alt="USS Enterprise ICT company" />
									</span>
									<h3 className="u-text u-text-3">
										Compliance professionally.
									</h3>
								</div>
							</div>
							<div className="u-align-center u-container-style u-list-item u-repeater-item">
								<div className="u-container-layout u-similar-container u-container-layout-4">
									<span className="u-file-icon u-icon u-icon-circle u-palette-1-base u-text-white u-icon-4">
										<Image src={Icon} alt="USS Enterprise ICT company" />
									</span>
									<h3 className="u-text u-text-4">
										&nbsp;Best Recommendations.{" "}
									</h3>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<Contactus />
			<Footer />
		</div>
	);
}

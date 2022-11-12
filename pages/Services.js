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
                <title>Products</title>
            </Head>
			<section
				className="u-align-center u-clearfix u-gradient u-section1"
				src=""
				id="sec-a2a2"
			>
				<Navbar />
				<LandingPage
					Name="Products"
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
			
            <Footer/>
		</div>
	);
}

export default Services
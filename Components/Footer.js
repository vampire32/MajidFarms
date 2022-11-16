import React,{useEffect} from 'react'

import Link from "next/link";
import { BsLinkedin } from "react-icons/bs";
import {BsFacebook} from 'react-icons/bs'

const Footer = () => {

  return (
		<footer className="footer-48201" data-aos="fade-in">
			<div className="container">
				<div className="row">
					<div className="col-md-4 pr-md-5">
						<a
							style={{ color: "#00e69c" }}
							href="#"
							className="footer-site-logo d-block mb-4"
						>
							Majid Farms & Fruit Suppiler
						</a>
						<p>
							Our goal is to transform the food system by offering a wholesome,
							natural substitute for processed food. We offer more than just
							organic produce delivery. We are lucky to be able to provide it to
							our family because we manually gather it. Come to one of our farm
							events so we can give you a handshake and express our gratitude.
							To consume the recommended daily servings of fruits you must have
							produce delivered to your house, workplace, or a designated pickup
							site on a regular basis
						</p>
					</div>
					<div className="col-md">
						<ul className="list-unstyled nav-links">
							<li>
								<Link href="/">
									<a>Home</a>
								</Link>
							</li>
							<li>
								<Link href="/Services">
									<a>Product</a>
								</Link>
							</li>

							<li>
								<Link href="/About">
									<a>About Us</a>
								</Link>
							</li>
							<li>
								<Link href="/About">
									<a>Contact us</a>
								</Link>
							</li>
						</ul>
					</div>
					<div className="col-md">
						<ul className="list-unstyled nav-links"></ul>
					</div>
				</div>

				<div className="row ">
					<div className="col-12 text-center">
						<div className="copyright mt-5 pt-5">
							<p>
								<small>&copy; 2022 All Rights Reserved - Majid Farms & Fruit Suppiler </small>
							</p>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer
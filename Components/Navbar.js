import Link from 'next/link';
import React from 'react'

const Navbar = () => {
  return (
		<div>
			<nav
				className="navbar navbar-expand-lg navbar-dark "
				style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
			>
				<div className="container-fluid">
					<a className="navbar-brand">
						<Link href="/">Majid Farms</Link>
					</a>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div
						className="collapse navbar-collapse navbar-design justify-content-center"
						id="navbarSupportedContent"
					>
						<ul className="navbar-nav  ">
							<li className="nav-item">
								<a className="nav-link active">
									<Link aria-current="page" href="/">
										Home
									</Link>
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link">
									<Link href="/Services">Services</Link>
								</a>
							</li>

							<li className="nav-item">
								<a className="nav-link">
									<Link href="/About us">About</Link>
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link">
									<Link href="/Contact us">About</Link>
								</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
	);
}

export default Navbar

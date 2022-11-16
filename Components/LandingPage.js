import React,{useEffect} from 'react'


const LandingPage = (props) => {
	
  return (
		<div style={{ backgroundColor: "rgba(0,0,0,0.6)" }}>
			<div className="u-clearfix u-sheet u-sheet-1" data-aos="fade-up">
				<h1
					style={{ color: "#00e69c" }}
					className="u-align-center u-text  u-text-default u-title u-text-1"
				>
					{props.Name}
				</h1>
				
				<a
					href="tel:+92-3459371589"
					className="u-btn u-button-style u-palette-2-base u-btn-1"
				>
					Reach Us
				</a>
			</div>
		</div>
	);
}

export default LandingPage

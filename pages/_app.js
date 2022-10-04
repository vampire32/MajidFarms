import '../styles/globals.css'
import '../styles/navbar.css'
import '../styles/home.css'
import '../styles/style.css'
import '../styles/responsive.css'
import '../styles/About.css'
import '../styles/landing.css'
import '../styles/contact.css'

import Head from "next/head";
import Script from 'next/script';

function MyApp({ Component, pageProps }) {
  return (
		<>
			<Head>
				<link
					href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
					rel="stylesheet"
					integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
					crossorigin="anonymous"
				></link>
			</Head>
			<Script
				src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
				integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
				crossorigin="anonymous"
			></Script>
			<Script src="https://cdn.tailwindcss.com" />
			<Component {...pageProps} />
		</>
	);
}

export default MyApp

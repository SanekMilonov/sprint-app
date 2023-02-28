import '../styles/globals.css';
import NextNProgress from 'nextjs-progressbar';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function MyApp({ Component, pageProps }) {
	useEffect(() => {
		AOS.init({
			startEvent: 'DOMContentLoaded',
			initClassName: 'aos-init',
			animatedClassName: 'aos-animate'
		});
	}, [])
	return (
		<>
			<NextNProgress />
			<Component {...pageProps} />
		</>

	);

}

export default MyApp
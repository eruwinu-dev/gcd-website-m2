import { Html, Head, Main, NextScript } from "next/document"
import Script from "next/script"

const MyDocument = () => {
	return (
		<Html lang="en">
			<Head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
				<link
					as="style"
					href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;600&display=swap"
					rel="stylesheet"
					type="text/css"
					crossOrigin="anonymous"
				/>
				<Script id="googleTagManager" strategy="afterInteractive" dangerouslySetInnerHTML={{
					__html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
					new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
					j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
					'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
					})(window,document,'script','dataLayer','GTM-NBHD5GN');`}} />
			</Head>
			<body>
				<noscript>
					<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NBHD5GN"
						height="0" width="0" style={{ display: "none", visibility: "hidden" }}></iframe>
				</noscript>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}

export default MyDocument


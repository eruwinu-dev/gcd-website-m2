import { Html, Head, Main, NextScript } from "next/document"

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
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}

export default MyDocument


import Head from "next/head"
import React, { ReactNode } from "react"
import { Provider } from "../../context/State"
import CustomMain from "../CustomMain"
import Footer from "../Footer"
import Header from "../Header"
import HeaderDashboard from "../Header/HeaderDashboard"

type Props = {
	children: ReactNode
}

const Layout = ({ children }: Props) => {
	return (
		<Provider>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no" />
				<meta name="robots" content="all" />
				<meta name="googlebot" content="all" />
				<meta
					name="description"
					content="The website landing page of Glen Charles Design - Client Focused, Licensed Architectural Services. 31312 Via Colinas #109, Westlake Village, CA 91362."
				/>
				<meta name="robots" content="max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
				<meta property="og:locale" content="en_US" />
				<meta property="og:type" content="website" />
				<meta property="og:title" content="G Charles Design - Licensed Architectural Services" />
				<meta
					property="og:description"
					content="The website landing page of Glen Charles Design - Client Focused, Licensed Architectural Services. 31312 Via Colinas #109, Westlake Village, CA 91362."
				/>
				<meta property="og:url" content="" />
			</Head>
			<CustomMain>
				<Header />
				<HeaderDashboard />
				{children}
				<Footer />
			</CustomMain>
		</Provider>
	)
}

export default Layout


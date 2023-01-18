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
				<meta name="robots" content="all" />
				<meta name="googlebot" content="all" />
				<meta name="HandheldFriendly" content="True" />
				<meta name="MobileOptimized" content="320" />
				<meta name="format-detection" content="telephone=no" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
				<meta name="apple-mobile-web-app-capable" content="yes" />
				<meta name="mobile-web-app-capable" content="yes" />
				<meta name="theme-color" content="#ffffff" />
				<meta
					name="description"
					content="G. Charles Design (Glen Charles Design) is an architecture firm licensed in California, Nevada and Arizona. GCD strives to develop authentic architecture services catered to the client's needs. Book a consult now!"
				/>
				<link rel="canonical" href="https://gcharlesdesign.com" />
				<meta property="og:locale" content="en_US" />
				<meta property="og:type" content="website" />
				<meta
					property="og:title"
					content="G. Charles Design - Client Focused Architecture, Glen Charles Design"
				/>
				<meta
					property="og:description"
					content="G. Charles Design (Glen Charles Design) is an architecture firm licensed in California, Nevada and Arizona. GCD strives to develop authentic architecture services catered to the client's needs. Book a consult now!"
				/>
				<meta property="og:url" content="https://gcharlesdesign.com" />
				<meta property="og:site_name" content="G. Charles Design" />
				<meta property="article:modified_time" content="2023-01-02T15:09:24+00:00" />
				<meta name="twitter:card" content="summary_large_image" />
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


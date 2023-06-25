import Head from "next/head"
import React, { ReactNode } from "react"
import { Provider } from "../../context/State"
import CustomMain from "../CustomMain"
import Footer from "../Footer"
import Header from "../Header"
import HeaderDashboard from "../Header/HeaderDashboard"
import Loader from "../Loader"

type Props = {
	children: ReactNode
	loading: boolean
}

const Layout = ({ children, loading }: Props) => {
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
				<meta name="apple-mobile-web-app-capable" content="yes" />
				<meta name="mobile-web-app-capable" content="yes" />
				<link rel="icon" href="/favicon.ico" type="image/x-icon" />
				<meta property="og:locale" content="en_US" />
				<meta property="og:type" content="website" />
			</Head>
			<CustomMain>
				<Header />
				<HeaderDashboard />
				<Loader loading={ loading } />
				{ children }
				<Footer />
			</CustomMain>
		</Provider>
	)
}

export default Layout


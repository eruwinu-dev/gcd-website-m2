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


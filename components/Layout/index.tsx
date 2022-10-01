import React, { ReactNode } from "react"
import Footer from "../Footer"
import Header from "../Header"

type Props = {
	children: ReactNode
}

const Layout = ({ children }: Props) => {
	return (
		<main>
			<Header />
			<main>{children}</main>
			<Footer />
		</main>
	)
}

export default Layout


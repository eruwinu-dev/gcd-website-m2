import React, { ReactNode } from "react"
import { Provider } from "../../context/State"
import Footer from "../Footer"
import Header from "../Header"

type Props = {
	children: ReactNode
}

const Layout = ({ children }: Props) => {
	return (
		<Provider>
			<main>
				<Header />
				<main>{children}</main>
				<Footer />
			</main>
		</Provider>
	)
}

export default Layout


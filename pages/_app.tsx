import "../styles/globals.css"
import { initializeParse } from "@parse/react-ssr"
import type { AppProps } from "next/app"
import Layout from "../components/Layout"

initializeParse(
	process!.env!.NEXT_PUBLIC_CUSTOM_URL || "",
	process.env.NEXT_PUBLIC_APP_ID || "",
	process.env.NEXT_PUBLIC_JS_KEY || ""
)

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	)
}

export default MyApp


import Head from "next/head"
import { useRouter } from "next/router"
import React, { MouseEvent, useEffect, useState } from "react"
import { headerTitle } from "../lib/title"

type Props = {}

export interface PageMapType {
	about: string
	portfolio: string
	news: string
}

const pageMap: PageMapType = {
	about: "member",
	portfolio: "project",
	news: "article",
}

const NotFound = (props: Props) => {
	const router = useRouter()
	const [page, setPage] = useState<string | null>(null)

	const goBackHandler = (event: MouseEvent<HTMLButtonElement>) => {
		router.back()
	}

	useEffect(() => {
		return () => {
			setPage(router.asPath.split("?")[0].split("/")[1])
		}
	}, [])

	return (
		<>
			<Head>
				<title>{`Not Found | ${headerTitle}`}</title>
			</Head>
			<section className="min-h-screen flex-col">
				<div className="space-y-4 lg:px-16 md:px-8 px-4 py-8">
					<h1 className="tracking-wider lg:text-8xl md:text-6xl sm:text-4xl text-2xl">Oops!</h1>
					<p>Tough luck, we can't find that {pageMap[page as keyof PageMapType] || "page"}.</p>
					<button
						className="border-2 generic-transition text-red-700 border-red-700 hover:border-transparent hover:text-white hover:bg-red-700"
						onClick={goBackHandler}
					>
						Take me back
					</button>
				</div>
			</section>
		</>
	)
}

export default NotFound


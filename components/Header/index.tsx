import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import React, { useEffect, useState } from "react"
import useStateContext from "../../context/State"

type Props = {}

type LinkType = {
	name: string
	url: string
}

const links: LinkType[] = [
	{
		name: "About",
		url: "/about",
	},
	{
		name: "Process",
		url: "/process",
	},
	{
		name: "Contact",
		url: "/contact",
	},
	{
		name: "Portfolio",
		url: "/portfolio",
	},
]

const limit: number = 10

const Header = (props: Props) => {
	const [offset, setOffset] = useState<number>(0)
	const { viewMode } = useStateContext()
	const { pathname } = useRouter()

	const isWhite = ["/", "/about", "/process", "/portfolio/[project]"].includes(pathname)
		? pathname === "/portfolio/[project]"
			? viewMode === "story"
				? true
				: false
			: true
		: false

	const iconPath: "/logo-black.png" | "/logo-white.png" = isWhite
		? offset > limit
			? "/logo-black.png"
			: "/logo-white.png"
		: "/logo-black.png"

	useEffect(() => {
		const options = { passive: true }
		const scroll = () => {
			const { scrollY } = window
			setOffset(scrollY)
		}
		document.addEventListener("scroll", scroll, options)
		return () => document.removeEventListener("scroll", scroll)
	}, [])

	return (
		<header className={["generic-transition", offset > limit ? "bg-white shadow-xl" : "bg-transparent"].join(" ")}>
			<div>
				<Link href="/">
					<div
						className={[
							"generic-transition",
							"relative h-[2.5rem] w-auto aspect-[1.23/1]",
							offset > limit ? "mx-4" : "mx-1",
						].join(" ")}
					>
						<Image
							src={iconPath}
							alt="Glen Charles Design Logo"
							layout="fill"
							className="cursor-pointer "
						/>
					</div>
				</Link>
			</div>
			<div>
				{links.map((link: LinkType, index: number) => (
					<Link href={link.url} key={index}>
						<a
							className={[
								"generic-transition",
								offset > limit ? "px-4 text-black" : "px-1",
								isWhite ? "text-white" : "text-black",
								[link.url, "/"].includes(pathname) ? "opacity-100" : "opacity-50 hover:opacity-100",
							].join(" ")}
						>
							{link.name}
						</a>
					</Link>
				))}
			</div>
		</header>
	)
}

export default Header


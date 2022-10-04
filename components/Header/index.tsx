import Image from "next/image"
import Link from "next/link"
import React, { useEffect, useState } from "react"

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
		name: "Services",
		url: "/services",
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

	useEffect(() => {
		const options = { passive: true }
		const scroll = () => {
			const { scrollY } = window
			console.log(scrollY)
			setOffset(scrollY)
		}
		document.addEventListener("scroll", scroll, options)
		return () => document.removeEventListener("scroll", scroll)
	}, [])

	return (
		<header className={["generic-transition", offset > limit ? "bg-white shadow-xl" : "bg-transparent"].join(" ")}>
			<div className={["generic-transition", offset > limit ? "px-1" : "px-4"].join(" ")}>
				<Link href="/">
					<a>
						<Image src="/logo-black.png" alt="GLen Charles Design Logo" width={52} height={42} />
					</a>
				</Link>
			</div>
			<div>
				{links.map((link: LinkType, index: number) => (
					<Link href={link.url} key={index}>
						<a className={["generic-transition", offset > limit ? "px-1" : "pr-4"].join(" ")}>
							{link.name}
						</a>
					</Link>
				))}
			</div>
		</header>
	)
}

export default Header


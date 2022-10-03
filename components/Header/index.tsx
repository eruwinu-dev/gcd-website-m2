import Image from "next/image"
import Link from "next/link"
import React from "react"

type Props = {
	inView?: boolean
}

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

const Header = ({ inView }: Props) => {
	return (
		<header className={`${!inView ? "bg-transparent" : "bg-white border-b-2 shadow-md"}`}>
			<div>
				<Link href="/">
					<a>
						<Image src="/logo-black.png" alt="GLen Charles Design Logo" width={52} height={42} />
					</a>
				</Link>
			</div>
			<div>
				{links.map((link: LinkType, index: number) => (
					<Link href={link.url} key={index}>
						<a>{link.name}</a>
					</Link>
				))}
			</div>
		</header>
	)
}

export default Header


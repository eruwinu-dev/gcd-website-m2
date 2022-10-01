import Image from "next/image"
import Link from "next/link"
import React from "react"

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

const Header = (props: Props) => {
	return (
		<header>
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


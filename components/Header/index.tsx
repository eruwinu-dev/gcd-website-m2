import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import React, { useEffect, useState } from "react"
import useStateContext from "../../context/State"
import { BarsIcon, CloseIcon } from "../../lib/icons"
import { links } from "../../lib/links"
import { LinkType } from "../../types"

type Props = {}

const limit: number = 10

const Header = (props: Props) => {
	const [offset, setOffset] = useState<number>(0)
	const { viewMode, setHeaderOpen, headerOpen } = useStateContext()
	const { pathname } = useRouter()

	const isWhite = ["/", "/about", "/process", "/portfolio/[project]"].includes(pathname)
		? pathname === "/portfolio/[project]"
			? viewMode === "story"
				? true
				: false
			: headerOpen
			? false
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
		<>
			<header className={[offset > limit ? "bg-white shadow-xl" : "bg-transparent", ""].join(" ")}>
				<div>
					<Link href="/">
						<div
							className={[
								"generic-transition",
								"relative h-[2.5rem] w-auto aspect-[1.23/1]",
								offset > limit ? "mx-4" : "mx-1",
							].join(" ")}
							onClick={() => setHeaderOpen((open: boolean) => false)}
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
				<div className="lg:flex md:flex hidden flex-row items-center justify-center space-x-2 py-2">
					{links.map((link: LinkType, index: number) => (
						<Link href={link.url} key={index}>
							<a
								className={[
									"generic-transition",
									offset > limit ? "px-4 text-black" : "px-1",
									isWhite ? "text-white" : "text-black",
									[link.url, "/"].includes(pathname) ? "opacity-100" : "opacity-50 hover:opacity-100",
								].join(" ")}
								onClick={() => setHeaderOpen((open: boolean) => false)}
							>
								{link.name}
							</a>
						</Link>
					))}
				</div>
				<div className="lg:hidden md:hidden flex py-2">
					<button
						type="button"
						className={[
							"generic-transition",
							offset > limit ? "px-4 text-black" : "px-1",
							isWhite ? "text-white" : "text-black",
						].join(" ")}
						onClick={() => setHeaderOpen((open: boolean) => !open)}
					>
						{headerOpen ? <CloseIcon /> : <BarsIcon />}
					</button>
				</div>
			</header>
		</>
	)
}

export default Header


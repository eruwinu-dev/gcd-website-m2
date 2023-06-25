import React, { useEffect, useMemo, useState } from "react"

import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"

import { motion } from "framer-motion"

import type { LinkType } from "../../types/link"
import type { ModeType } from "../../types/project"

import useStateContext from "../../context/State"
import { BarsIcon, CloseIcon } from "../../lib/icons"
import { links } from "../../lib/links"

type Props = {}

const limit: number = 10

//[3.24/1 for logo-long-black]

const logoBlack: string = "/logo-black.png"
const logoWhite: string = "/logo-white.png"

const Header = (props: Props) => {
	const [offset, setOffset] = useState<number>(0)
	const { setHeaderOpen, headerOpen, load } = useStateContext()
	const {
		pathname,
		query: { mode },
	} = useRouter()

	const viewMode = (mode || "story") as ModeType

	const isWhite = ["/", "/about", "/process", "/portfolio/[slug]"].includes(pathname)
		? pathname === "/portfolio/[slug]"
			? viewMode === "story"
				? true
				: false
			: headerOpen
			? false
			: true
		: false

	const iconPath = isWhite ? (headerOpen ? logoBlack : offset > limit ? logoBlack : logoWhite) : logoBlack

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
			<header
				className={[
					offset > limit ? "bg-white" : "bg-transparent",
					"generic-transition",
					pathname === "/" && load ? "opacity-0" : "opacity-100",
				].join(" ")}
			>
				<div>
					<Link href="/">
						{
							<div
								className={[
									"generic-transition",
									"relative h-[2.5rem] w-auto",
									iconPath === logoBlack ? "aspect-[307/249]" : "aspect-[332/251]",
								].join(" ")}
								onClick={() => setHeaderOpen((open: boolean) => false)}
							>
								<Image
									src={iconPath}
									loader={({ src }) => src}
									alt="The logo for G. Charles Design"
									layout="fill"
									objectFit="contain"
									className="cursor-pointer"
									unoptimized
									loading="eager"
									sizes="(max-width: 768px) 307px,
										(max-width: 1200px) 307px,
										307px"
								/>
							</div>
						}
					</Link>
				</div>
				<div className="lg:flex md:flex hidden flex-row items-center justify-center space-x-2 py-2">
					{links.map((link: LinkType, index: number) => (
						<Link href={link.url} key={index} passHref>
							<motion.a
								className={[
									"generic-transition relative",
									offset > limit ? "px-2.5 text-black" : "px-1",
									iconPath === logoBlack ? "text-black" : "text-white",
								].join(" ")}
								onClick={() => setHeaderOpen((open: boolean) => false)}
								variants={linkVariants}
								initial="start"
								whileHover="hover"
							>
								{link.name}

								{[link.url].includes(pathname) ||
								(link.url === "/portfolio" && pathname === "/portfolio/[project]") ||
								(link.url === "/about" && pathname === "/about/[member]") ||
								(link.url === "/blogs" && pathname === "/blogs/[slug]") ? (
									<div
										className={[
											"absolute left-0 right-0 bottom-0 translate-y-2 w-full h-1 border-0",
											iconPath === logoWhite ? "bg-white" : "bg-red-700",
										].join(" ")}
									/>
								) : (
									<motion.div
										className={[
											"absolute left-0 right-0 bottom-0 translate-y-2 w-full h-1 border-0",
											iconPath === logoWhite ? "bg-white" : "bg-red-700",
										].join(" ")}
										variants={lineVariants}
									/>
								)}
							</motion.a>
						</Link>
					))}
				</div>
				<div className="lg:hidden md:hidden flex py-2">
					<button
						type="button"
						aria-label="Toggle Navigation Header"
						role="combobox"
						aria-haspopup="true"
						aria-controls="menu"
						className={[
							"generic-transition",
							offset > limit ? "px-4 text-black" : "px-1",
							iconPath === logoBlack ? "text-black" : "text-white",
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

const linkVariants = {
	start: {},
	hover: {},
}

const lineVariants = {
	start: {
		opacity: 0,
		width: "0%",
		transiton: {
			duration: 0.2,
			ease: "easeInOut",
		},
	},
	hover: {
		opacity: 1,
		width: "100%",
		transiton: {
			duration: 0.2,
			ease: "easeInOut",
		},
	},
}

export default Header


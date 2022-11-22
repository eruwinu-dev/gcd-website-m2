import React from "react"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/router"

import { AnimatePresence, motion } from "framer-motion"

import type { LinkType } from "../../../types/link"

import ContactList from "../../ContactList"
import SocialsList from "../../SocialsList"

import useStateContext from "../../../context/State"

import { links } from "../../../lib/links"

type Props = {}

const HeaderDashboard = (props: Props) => {
	const { headerOpen, setHeaderOpen } = useStateContext()
	const { pathname } = useRouter()

	if (!headerOpen) return <></>

	return (
		<div
			className="sticky w-full h-[calc(100vh_-_3.5rem)] bg-white z-10 grid grid-cols-1 grid-flow-row justify-between"
			id="menu"
			role="menu"
		>
			<AnimatePresence>
				{headerOpen && (
					<motion.div
						className="sticky w-full h-full flex flex-col items-center justify-center space-y-8 row-span-2"
						variants={containerVariants}
						initial="hidden"
						animate="show"
						exit="hidden"
					>
						{links.map((link: LinkType, index: number) => (
							<motion.div
								className="relative"
								key={link.name}
								variants={itemVariants}
								onClick={() => {
									setHeaderOpen((open: boolean) => !open)
								}}
							>
								<Link href={link.url}>
									<a className={["generic-transition text-lg"].join(" ")}>{link.name}</a>
								</Link>
								{[link.url, "/"].includes(pathname) ||
								(link.url === "/portfolio" && pathname === "/portfolio/[project]") ||
								(link.url === "/about" && pathname === "/about/[member]") ? (
									<motion.div
										initial={{
											opacity: 0,
											width: "0%",
										}}
										animate={{ opacity: 1, width: "100%" }}
										transition={{ type: "spring", duration: 0.3, delay: 0.8 }}
										className="absolute left-0 right-0 -bottom-1 h-1 bg-red-700"
									/>
								) : (
									<></>
								)}
							</motion.div>
						))}
					</motion.div>
				)}
			</AnimatePresence>
			<motion.div
				className="flex flex-col items-center justify-center px-4 space-y-4"
				variants={contactVariants}
				initial="hidden"
				animate="show"
			>
				<div className="relative w-5/12 h-auto aspect-video">
					<Image src="/gcd-logo-big.png" alt="Glen Charles Design Logo" layout="fill" />
				</div>
				<ContactList />
				<SocialsList />
			</motion.div>
		</div>
	)
}

const containerVariants = {
	hidden: {
		opacity: 0,
	},
	show: {
		opacity: 1,
		transition: {
			duration: 0.5,
			type: "tween",
			ease: "easeInOut",
			delayChildren: 0.2,
			staggerChildren: 0.1,
		},
	},
}

const itemVariants = {
	hidden: { opacity: 0, y: -10 },
	show: { opacity: 1, y: 0, transition: { duration: 0.3 } },
}

const contactVariants = {
	hidden: { y: -10, opacity: 0 },
	show: { y: 0, opacity: 1, transition: { duration: 0.5 } },
}

export default HeaderDashboard


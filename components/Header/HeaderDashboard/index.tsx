import React from "react"
import Link from "next/link"
import { AnimatePresence, motion } from "framer-motion"
import useStateContext from "../../../context/State"
import { links } from "../../../lib/links"
import { LinkType } from "../../../types"
import ContactList from "../../ContactList"
import SocialsList from "../../SocialsList"

type Props = {}

const containerVariants = {
	hidden: {
		opacity: 0,
		height: "0vh",
	},
	show: {
		opacity: 1,
		height: "100vh",
		transition: {
			type: "tween",
			ease: "easeInOut",
			delayChildren: 0.2,
			staggerChildren: 0.1,
		},
	},
}

const item = {
	hidden: { opacity: 0, y: -10 },
	show: { opacity: 1, y: 0 },
}

const HeaderDashboard = (props: Props) => {
	const { headerOpen, setHeaderOpen } = useStateContext()

	if (!headerOpen) return <></>

	return (
		<AnimatePresence>
			{headerOpen && (
				<motion.div
					className="sticky w-full h-screen bg-white z-10 flex flex-col items-center justify-center pb-32 space-y-8"
					variants={containerVariants}
					initial="hidden"
					animate="show"
					exit="hidden"
				>
					{links.map((link: LinkType, index: number) => (
						<motion.div
							key={link.name}
							variants={item}
							onClick={() => {
								setHeaderOpen((open: boolean) => !open)
							}}
						>
							<Link href={link.url}>
								<a>{link.name}</a>
							</Link>
						</motion.div>
					))}
				</motion.div>
			)}
		</AnimatePresence>
	)
}

export default HeaderDashboard


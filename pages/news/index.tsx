import Head from "next/head"
import Image from "next/image"
import React from "react"
import { motion } from "framer-motion"
import { headerTitle } from "../../lib/title"

type Props = {}

const News = (props: Props) => {
	return (
		<>
			<Head>
				<title>{`News | ${headerTitle}`}</title>
			</Head>
			<section className="lg:min-h-screen md:min-h-screen min-h-fit">
				<motion.div className="relative" layout>
					<h1>News Page</h1>
				</motion.div>
			</section>
		</>
	)
}

export default News


import React, { memo, useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"

import { motion, useAnimation } from "framer-motion"

import type { MemberType } from "../../../types/member"

import { urlFor } from "../../../lib/urlFor"

type Props = {
	member: MemberType
}

const TeamGalleryItem = ({ member }: Props) => {
	const [load, setLoad] = useState<boolean>(false)
	const controls = useAnimation()

	useEffect(() => {
		if (load) {
			controls.start("visible")
		}
		return () => {}
	}, [load])

	return (
		<>
			<div className={member.order === 1 ? "lg:flex md:flex hidden" : "hidden"} />
			<motion.div className="team-gallery-item" variants={itemVariants} initial="hidden" animate={controls}>
				<Link href={`about/${member.slug.current}`}>
					<div className="relative lg:w-full md:w-full w-3/5 h-auto aspect-[1/1.4] overflow-hidden space-y-4 flex flex-col items-center">
						<Image
							src={member?.image ? urlFor(member?.image).url() : ""}
							alt={member.name}
							layout="fill"
							objectFit="cover"
							objectPosition="bottom"
							className="generic-transition hover:scale-105 cursor-pointer"
							onLoadingComplete={() => setLoad(true)}
						/>
					</div>
				</Link>
				<h5 className="mt-2 text-center">{member.name}</h5>
				<div className="text-center italic">{member.role}</div>
			</motion.div>
			<div className={member.order === 1 ? "lg:flex md:flex hidden" : "hidden"} />
		</>
	)
}

const itemVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			duration: 0.3,
			ease: "easeInOut",
		},
	},
}

export default memo(TeamGalleryItem)


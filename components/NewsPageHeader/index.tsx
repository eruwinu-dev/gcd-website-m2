import React from "react"
import Image from "next/image"
import Link from "next/link"

type Props = {}

const NewsPageHeader = (props: Props) => {
	return (
		<div className="relative lg:w-2/12 md:w-2/12 w-4/12 h-auto aspect-video mx-auto mt-8 cursor-pointer">
			<Link href="/">
				<Image src="/gcd-logo-big.png" alt="Glen Charles Design Logo" layout="fill" />
			</Link>
		</div>
	)
}

export default NewsPageHeader


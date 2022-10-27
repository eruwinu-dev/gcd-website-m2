import React from "react"
import Image from "next/image"
import Link from "next/link"

type Props = {}

const NewsPageHeader = (props: Props) => {
	return (
		<div className="w-11/12 mx-auto flex flex-row items-center">
			<div className="relative lg:w-2/12 md:w-2/12 w-4/12 h-auto aspect-video mx-auto my-8 cursor-pointer">
				<Link href="/">
					<Image src="/gcd-logo-big.png" alt="Glen Charles Design Logo" layout="fill" objectFit="contain" />
				</Link>
			</div>
			<div></div>
		</div>
	)
}

export default NewsPageHeader


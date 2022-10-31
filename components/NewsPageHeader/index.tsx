import React from "react"
import Image from "next/image"

type Props = {}

const NewsPageHeader = (props: Props) => {
	return (
		<div className="w-full h-full mx-auto flex flex-col items-center justify-start space-y-8 pt-16 px-8">
			<div className="w-2/12 h-auto aspect-video relative">
				<Image src="/gcd-logo-big.png" alt="GCD Logo" layout="fill" />
			</div>
			<span className="text-2xl text-center">A blog about all things GCD.</span>
		</div>
	)
}

export default NewsPageHeader


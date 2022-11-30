import React from "react"
import Image from "next/image"

type Props = {}

const NewsPageHeader = (props: Props) => {
	return (
		<div className="w-full h-full mx-auto flex flex-col items-center justify-start space-y-4 pt-8 px-8">
			<div className="lg:w-2/12 md:w-4/12 sm:w-6/12 w-9/12 h-auto aspect-video relative">
				<Image
					src="/gcd-logo-big.png"
					alt="GCD Logo"
					layout="fill"
					className="cursor-pointer"
					loading="eager"
				/>
			</div>
			<span className="text-2xl text-center">A blog about all things GCD.</span>
		</div>
	)
}

export default NewsPageHeader


import React from "react"
import Image from "next/image"

type Props = {}

const NewsPageHeader = (props: Props) => {
	return (
		<div className="news-page-header">
			<div className="news-page-header-image-container">
				<Image
					src="/gcd-logo-big.png"
					loader={({ src }) => src}
					alt="The logo for G. Charles Design"
					layout="fill"
					className="cursor-pointer"
					unoptimized
					loading="eager"
				/>
			</div>
			<span>A blog about all things GCD.</span>
		</div>
	)
}

export default NewsPageHeader


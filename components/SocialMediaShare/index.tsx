import React from "react"

import { FacebookShareButton, TwitterShareButton, LinkedinShareButton } from "react-share"
import { FacebookIcon, LinkedinIcon, TwitterIcon } from "../../lib/icons"

import type { ArticleCategoryType, ArticleType } from "../../types/article"

type Props = {
	post: ArticleType
}

const SocialMediaShare = ({ post }: Props) => {
	const shareUrl = process.env.NEXT_PUBLIC_SITE_URL + "/news/" + post.slug.current

	const source = "Glen Charles Design - Client Focused Architecture"

	return (
		<div className="sticky top-36 lg:pt-20 md:pt-10 pt-6 pb-16 lg:w-2/12 w-full flex flex-col items-center justify-center space-y-8">
			<div className="w-full flex">
				<span className="font-semibold text-xl text-center">Share this</span>
			</div>
			<div className="w-full h-fit flex lg:flex-col flex-row items-center justify-center lg:space-y-8 space-y-0 lg:space-x-0 space-x-8">
				<FacebookShareButton
					className="hover:scale-110  generic-transition"
					url={shareUrl}
					quote={post.title}
					hashtag={post?.categories ? "#" + post.categories[0].title : ""}
				>
					<FacebookIcon />
				</FacebookShareButton>
				<TwitterShareButton
					className="hover:scale-110  generic-transition"
					url={shareUrl}
					title={post.title}
					hashtags={post?.categories?.map((category: ArticleCategoryType) => category.title) || []}
				>
					<TwitterIcon />
				</TwitterShareButton>
				<LinkedinShareButton
					className="hover:scale-110  generic-transition"
					url={shareUrl}
					title={post.title}
					summary={post?.description || ""}
					source={source}
				>
					<LinkedinIcon />
				</LinkedinShareButton>
			</div>
		</div>
	)
}

export default SocialMediaShare


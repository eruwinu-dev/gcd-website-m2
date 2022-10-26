import React from "react"

import { FacebookShareButton, TwitterShareButton, LinkedinShareButton } from "react-share"
import { categories } from "../../lib/categories"
import { FacebookIcon, LinkedinIcon, TwitterIcon } from "../../lib/icons"

import type { ArticleType } from "../../types/article"

type Props = {
	post: ArticleType
}

const hashtagify = (categories: string[] | undefined) =>
	categories ? categories.map((category: string) => "#" + category).join("") : ""

const SocialMediaShare = ({ post }: Props) => {
	const shareUrl = process.env.NEXT_PUBLIC_SITE_URL + "/news/" + post.slug.current

	const source = "Glen Charles Design - Client Focused Architecture"

	return (
		<>
			<FacebookShareButton
				className="hover:scale-110  generic-transition"
				url={shareUrl}
				quote={post.title}
				hashtag={post?.categories ? "#" + post.categories[0] : ""}
			>
				<FacebookIcon />
			</FacebookShareButton>
			<TwitterShareButton
				className="hover:scale-110  generic-transition"
				url={shareUrl}
				title={post.title}
				hashtags={post?.categories || []}
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
		</>
	)
}

export default SocialMediaShare


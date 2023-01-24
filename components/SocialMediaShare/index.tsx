import React from "react"

import { FacebookShareButton, TwitterShareButton, LinkedinShareButton } from "react-share"
import { FacebookIcon, LinkedinIcon, TwitterIcon } from "../../lib/icons"

import type { ArticleType } from "../../types/article"

type Props = {
	article: ArticleType
}

const SocialMediaShare = ({ article }: Props) => {
	const shareUrl = process.env.NEXT_PUBLIC_SITE_URL + "/news/" + article.slug

	const source = "Glen Charles Design - Client Focused Architecture"

	return (
		<div className="social-media-container">
			<div>
				<span>Share this</span>
			</div>
			<div className="social-media-buttons">
				<FacebookShareButton
					url={shareUrl}
					quote={article.title}
					hashtag={article?.categories ? "#" + article.categories[0] : ""}
				>
					<FacebookIcon />
				</FacebookShareButton>
				<TwitterShareButton
					url={shareUrl}
					title={article.title}
					hashtags={article?.categories?.map((category) => category) || []}
				>
					<TwitterIcon />
				</TwitterShareButton>
				<LinkedinShareButton
					url={shareUrl}
					title={article.title}
					summary={article?.description || ""}
					source={source}
				>
					<LinkedinIcon />
				</LinkedinShareButton>
			</div>
		</div>
	)
}

export default SocialMediaShare


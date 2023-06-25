import React from "react"

import {
    FacebookShareButton,
    TwitterShareButton,
    LinkedinShareButton,
} from "react-share"
import { FacebookIcon, LinkedinIcon, TwitterIcon } from "../../lib/icons"

import { Post } from "../../types/post"

type Props = {
    post: Post
}

const SocialMediaShare = ({ post }: Props) => {
    const shareUrl = process.env.NEXT_PUBLIC_SITE_URL + "/blogs/" + post.slug
    const source = "G. Charles Design - Client Focused Architecture"

    return (
        <div className="social-media-container">
            <div>
                <span>Share this</span>
            </div>
            <div className="social-media-buttons">
                <FacebookShareButton
                    url={shareUrl}
                    quote={post.title}
                    hashtag={post?.categories ? "#" + post.categories[0] : ""}
                >
                    <FacebookIcon />
                </FacebookShareButton>
                <TwitterShareButton
                    url={shareUrl}
                    title={post.title}
                    hashtags={
                        post?.categories?.map((category) => category) || []
                    }
                >
                    <TwitterIcon />
                </TwitterShareButton>
                <LinkedinShareButton
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

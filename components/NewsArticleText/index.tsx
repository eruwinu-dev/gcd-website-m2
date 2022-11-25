import React from "react"

import { PortableText } from "@portabletext/react"
import { CustomPTComponents } from "../CustomPTComponents"

export interface Props {
	body: any
}

const NewsArticleText = ({ body }: Props) => {
	return (
		<div className="news-article-text">
			<PortableText value={body} components={CustomPTComponents} />
		</div>
	)
}

export default NewsArticleText


import { PortableText, PortableTextComponents, PortableTextReactComponents } from "@portabletext/react"
import Image from "next/image"
import React from "react"
import { urlFor } from "../../lib/urlFor"
import { AuthorType } from "../../types/article"

export interface Props {
	body: any
	author: AuthorType
}

const NewsArticleText = ({ body, author }: Props) => {
	return (
		<div className="news-article-text">
			<PortableText value={body} components={portableTextComponents} />
		</div>
	)
}

const portableTextComponents: Partial<PortableTextReactComponents | PortableTextComponents> = {
	types: {
		image: ({ value }) => {
			if (!value?.asset?._ref) {
				return null
			}
			return (
				<div className="news-portable-text-component h-auto aspect-video relative">
					<Image
						alt={value.alt || " "}
						loading="lazy"
						src={urlFor(value).auto("format").url()}
						layout="fill"
						objectFit="cover"
						objectPosition="center"
					/>
				</div>
			)
		},
	},
	block: {
		h1: ({ children }) => {
			return <h1 className="news-portable-text-component text-5xl">{children}</h1>
		},
		h2: ({ children }) => {
			return <h2 className="news-portable-text-component text-4xl">{children}</h2>
		},
		h3: ({ children }) => {
			return <h3 className="news-portable-text-component text-3xl">{children}</h3>
		},
		h4: ({ children }) => {
			return <h4 className="news-portable-text-component text-2xl">{children}</h4>
		},
		blockquote: ({ children }) => {
			return (
				<blockquote className="news-portable-text-component text-center text-lg italic">{children}</blockquote>
			)
		},
		normal: ({ children }) => {
			return <p className="news-portable-text-component text-justify indent-4">{children}</p>
		},
	},
	marks: {
		link: ({ value, children }) => {
			const target = (value?.href || "").startsWith("http") ? "_blank" : undefined
			return (
				<a
					className="text-red-500 hover:text-red-700 generic-transition"
					href={value?.href}
					target={target}
					rel={(target === "_blank" && "noindex nofollow") as string}
				>
					{children}
				</a>
			)
		},
	},
	list: {
		bullet: ({ children }) => <ul className="pl-5">{children}</ul>,
		number: ({ children }) => <ol className="pl-5">{children}</ol>,
	},
	listItem: {
		bullet: ({ children }) => (
			<li style={{ listStyleType: "disc" }} className="news-portable-text-component text-justify">
				{children}
			</li>
		),
	},
}

export default NewsArticleText


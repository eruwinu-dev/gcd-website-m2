import YouTube from "react-youtube"
import getYouTubeID from "get-youtube-id"
import Image from "next/image"

import { urlFor } from "../../lib/urlFor"
import { PortableTextComponents, PortableTextReactComponents } from "@portabletext/react"

export const CustomPTComponents: Partial<PortableTextReactComponents | PortableTextComponents> = {
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
		youtube: ({ value }) => {
			const { url } = value
			const id = getYouTubeID(url)
			return id ? (
				<YouTube
					videoId={id}
					className="news-portable-text-component h-auto aspect-video"
					opts={{
						height: "100%",
						width: "100%",
					}}
					onReady={() => console.clear()}
				/>
			) : null
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

export const CustomArticleComponents: Partial<PortableTextReactComponents | PortableTextComponents> = {
	types: {
		image: ({ value }) => {
			if (!value?.asset?._ref) {
				return null
			}
			return (
				<div className="h-auto aspect-video relative">
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
		youtube: ({ value }) => {
			const { url } = value
			const id = getYouTubeID(url)
			return id ? (
				<YouTube
					videoId={id}
					className="h-auto aspect-video"
					opts={{
						height: "100%",
						width: "100%",
					}}
					onReady={() => console.clear()}
				/>
			) : null
		},
	},
	block: {
		h1: ({ children }) => {
			return <h1 className="text-5xl">{children}</h1>
		},
		h2: ({ children }) => {
			return <h2 className="text-4xl">{children}</h2>
		},
		h3: ({ children }) => {
			return <h3 className="text-3xl">{children}</h3>
		},
		h4: ({ children }) => {
			return <h4 className="text-2xl">{children}</h4>
		},
		blockquote: ({ children }) => {
			return <blockquote className=" text-center text-lg italic">{children}</blockquote>
		},
		normal: ({ children }) => {
			return <p className="text-justify indent-4">{children}</p>
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
			<li style={{ listStyleType: "disc" }} className="text-justify">
				{children}
			</li>
		),
	},
}

export const CustomProjectStoryComponents: Partial<PortableTextReactComponents | PortableTextComponents> = {
	types: {
		image: ({ value }) => {
			if (!value?.asset?._ref) {
				return null
			}
			return (
				<div className="h-auto aspect-video relative">
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
		youtube: ({ value }) => {
			const { url } = value
			const id = getYouTubeID(url)
			return id ? (
				<YouTube
					videoId={id}
					className="h-auto aspect-video"
					opts={{
						height: "100%",
						width: "100%",
					}}
					onReady={() => console.clear()}
				/>
			) : null
		},
	},
	block: {
		h1: ({ children }) => {
			return <h1 className="text-5xl">{children}</h1>
		},
		h2: ({ children }) => {
			return <h2 className="text-4xl">{children}</h2>
		},
		h3: ({ children }) => {
			return <h3 className="text-3xl">{children}</h3>
		},
		h4: ({ children }) => {
			return <h4 className="text-2xl">{children}</h4>
		},
		blockquote: ({ children }) => {
			return <blockquote className=" text-center text-lg italic">{children}</blockquote>
		},
		normal: ({ children }) => {
			return <p className="text-justify indent-4">{children}</p>
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
			<li style={{ listStyleType: "disc" }} className="text-justify">
				{children}
			</li>
		),
	},
}

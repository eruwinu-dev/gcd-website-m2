import groq from "groq"
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next"
import { ParsedUrlQuery } from "querystring"
import { PortableText, PortableTextReactComponents } from "@portabletext/react"

import React from "react"
import client from "../../lib/client"
import imageUrlBuilder from "@sanity/image-url"
import { SanityImageSource } from "@sanity/image-url/lib/types/types"
import { ImageUrlBuilder } from "@sanity/image-url/lib/types/builder"

type Props = {}

interface StaticParams extends ParsedUrlQuery {
	slug: string
}

const builder = imageUrlBuilder(client)

const urlFor = (source: SanityImageSource | string): ImageUrlBuilder => {
	return builder.image(source)
}

const portableTextComponents: Partial<PortableTextReactComponents> = {
	types: {
		image: ({ value }) => {
			if (!value?.asset?._ref) {
				return null
			}
			return (
				<img
					alt={value.alt || " "}
					loading="lazy"
					src={urlFor(value).width(320).height(240).fit("max").auto("format").url()}
				/>
			)
		},
	},
}

const Post = ({ post }: InferGetStaticPropsType<typeof getStaticProps>) => {
	if (!post) return <></>

	return (
		<section className="w-full min-h-screen max-fit translate-y-0">
			<article>
				<h1>{post.title}</h1>
				<span>By {post.name}</span>
				{post.categories && (
					<ul>
						Posted in
						{post.categories.map((category: any) => (
							<li key={category}>{category}</li>
						))}
					</ul>
				)}
				{post.authorImage && (
					<div>
						<img src={urlFor(post.authorImage).width(50).url()} alt={`${name}'s picture`} />
					</div>
				)}
				<PortableText value={post.body} components={portableTextComponents} />
				{JSON.stringify(post.body)}
			</article>
		</section>
	)
}

const query = groq`*[_type == "post" && slug.current == $slug][0]{
	title,
	body,
	"name": author->name,
	"categories": categories[]->title,
	"authorImage": author->image
  }`

export const getStaticPaths: GetStaticPaths = async () => {
	const paths = await client.fetch(groq`*[_type == "post" && defined(slug.current)][].slug.current`)
	return {
		paths: paths.map((slug: string) => ({ params: { slug } })),
		fallback: true,
	}
}

export const getStaticProps: GetStaticProps = async (context) => {
	const { slug = "" } = context.params as StaticParams
	const post = await client.fetch(query, { slug })

	return {
		props: {
			post,
		},
	}
}

export default Post


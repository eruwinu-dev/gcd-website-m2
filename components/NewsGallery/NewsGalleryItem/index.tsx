import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import React from "react"
import { formatDateFromISO } from "../../../lib/dates"
import { urlFor } from "../../../lib/urlFor"
import { ArticleItemType } from "../../../types/article"

type Props = {
	article: ArticleItemType
}

const NewsGalleryItem = ({ article }: Props) => {
	const { pathname } = useRouter()
	return (
		<div className="w-full h-full flex flex-col items-center justify-start">
			<div
				className={[
					"w-full h-auto aspect-square relative bg-gray-200",
					article?.mainImage ? "animate-none" : "animate-pulse",
				].join(" ")}
			>
				{article.mainImage && (
					<Image
						src={urlFor(article.mainImage).url()}
						alt={article.title}
						layout="fill"
						objectFit="cover"
						objectPosition="left"
					/>
				)}
			</div>
			<div className="w-full space-y-4 pt-4 flex flex-col">
				{pathname == "/news" ? (
					<div className="text-sm mb-2">{Math.round((article?.wordCount || 0) / 180)} minute read</div>
				) : (
					<></>
				)}
				<Link href={`./news/${article.slug.current}`}>
					<a className="generic-transition hover:text-red-700">
						<h3>{article.title}</h3>
					</a>
				</Link>
				<div className="w-full grid grid-cols-2">
					<div>{article?.name}</div>
					<div className="w-full text-right text-gray-500">{formatDateFromISO(article?.publishedAt)}</div>
				</div>

				<p className="lg:line-clamp-4 md:line-clamp-3 line-clamp-3 lg:text-base md:text-base text-sm">
					{article?.description}
				</p>
				{article.categories  && pathname === "/news" && (
					<ul className="flex flex-row space-x-2">
						{article.categories.map((category: any) => (
							<li key={category} className="text-sm">
								#{category}
							</li>
						))}
					</ul>
				)}
				<div>
					<Link href={`./news/${article.slug.current}`}>
						<a className="generic-transition text-gray-500 hover:text-red-700">Read more</a>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default NewsGalleryItem


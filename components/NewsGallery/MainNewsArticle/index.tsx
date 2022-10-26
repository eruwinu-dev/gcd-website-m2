import { parseISO } from "date-fns"
import Image from "next/image"
import Link from "next/link"
import React from "react"
import { formatDateFromISO } from "../../../lib/dates"
import { urlFor } from "../../../lib/urlFor"
import { AlignMainImageType, ArticleItemType } from "../../../types/article"

type Props = {
	article: ArticleItemType
	side: AlignMainImageType
}

const MainNewsArticle = ({ article, side }: Props) => {
	return (
		<>
			<div
				className={[
					side === "left" ? "order-first" : "order-last",
					"bg-gray-200 col-span-2 aspect-video relative",
					"w-full h-auto",
					article.mainImage ? " animate-none cursor-hover" : "animate-pulse",
				].join(" ")}
			>
				{article.mainImage && (
					<Image
						src={urlFor(article.mainImage).url()}
						alt={article.title}
						layout="fill"
						objectFit="cover"
						objectPosition="center"
					/>
				)}
			</div>
			<div className="col-span-1 w-full h-full flex flex-col items-start justify-center px-8 space-y-4">
				<div className="text-sm">{Math.round((article?.wordCount || 0) / 180)} minute read</div>
				<Link href={`./news/${article.slug.current}`}>
					<a className="generic-transition hover:text-red-700">
						<h2 className="lg:text-3xl md:text-2xl sm:text-xl text-lg">{article.title}</h2>
					</a>
				</Link>
				<div className="w-full grid grid-cols-2">
					<div>{article?.name}</div>
					<div className="text-gray-500">{formatDateFromISO(article?.publishedAt)}</div>
				</div>
				<p className="lg:line-clamp-4 md:line-clamp-3 line-clamp-3 lg:text-base md:text-base text-sm">
					{article?.description}
				</p>
				<div>
					<Link href={`./news/${article.slug.current}`}>
						<a className="generic-transition text-gray-500 hover:text-red-700">Read more</a>
					</Link>
				</div>
			</div>
		</>
	)
}

export default MainNewsArticle


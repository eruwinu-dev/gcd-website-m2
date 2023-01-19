import React, { MouseEvent } from "react"

type Props = {}

const LoadMoreArticles = (props: Props) => {
	const loadMoreArticlesHandler = async (event: MouseEvent<HTMLButtonElement>) => {
		try {
			// await getMoreArticles(category as string | undefined)
		} catch (error) {
			console.log(error)
		} finally {
		}
	}

	return (
		<div className="w-full flex flex-col items-center -translate-y-[3.5rem]">
			<button
				type="button"
				className="px-4 py-2.5 border-2 border-red-700 text-red-700 generic-transition hover:text-white hover:bg-red-700 text-lg"
				onClick={loadMoreArticlesHandler}
			>
				Older posts
			</button>
		</div>
	)
}

export default LoadMoreArticles


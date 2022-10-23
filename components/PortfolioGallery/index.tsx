import React, { MouseEvent } from "react"
import { CategoryType, ProjectCategoryOptionsType } from "../../types"
import { motion, AnimatePresence } from "framer-motion"
import { categories } from "../../lib/categories"
import { useRouter } from "next/router"
import PortfolioGalleryGroup from "./PortfolioGalleryGroup"

type Props = {}

const PortfolioGallery = (props: Props) => {
	const router = useRouter()
	const { query } = router

	const isSelectedCategory = (category: ProjectCategoryOptionsType) => {
		if (category === "all" && !query.category) return true
		else if (category === query.category) return true
		else return false
	}

	const changeCategory = (category: ProjectCategoryOptionsType) => (event: MouseEvent<HTMLButtonElement>) => {
		router.push(
			{
				pathname: "/portfolio",
				query: category !== "all" ? { category: category } : {},
			},
			undefined,
			{ shallow: true }
		)
	}

	return (
		<div className="w-full min-h-screen max-h-fit flex flex-col items-center justify-start">
			<nav className="lg:w-1/2 md:w-4/5 w-full flex flex-col items-center lg:justify-center md:justify-center justify-start relative">
				<ul className="flex flex-row items-end space-between w-full h-fit mt-16 mb-8">
					{categories.map((category: CategoryType, index: number) => (
						<li
							key={category.name}
							className="w-full flex flex-col items-center justify-center relative h-full"
						>
							<button
								type="button"
								onClick={changeCategory(category.category)}
								className={[
									"w-full generic-transition",
									isSelectedCategory(category.category)
										? "opacity-100"
										: "opacity-50 hover:opacity-100",
								].join(" ")}
							>
								{category.name}
							</button>
							{isSelectedCategory(category.category) ? (
								<motion.div className="portfolio-nav-tab" layoutId="portfolio-nav-tab" />
							) : null}
						</li>
					))}
				</ul>
			</nav>
			<AnimatePresence mode="wait">
				<PortfolioGalleryGroup category={(query.category || "all") as ProjectCategoryOptionsType} />
			</AnimatePresence>
		</div>
	)
}

export default PortfolioGallery


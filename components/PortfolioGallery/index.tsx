import React, { MouseEvent } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useRouter } from "next/router"

import type { CategoryType, ProjectCategoryOptionsType } from "../../types/project"

import PortfolioGalleryGroup from "./PortfolioGalleryGroup"

import { categories } from "../../lib/categories"

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
			<nav className="mx-auto lg:w-7/12 md:w-4/5 w-full flex flex-col items-center lg:justify-center md:justify-center justify-start relative px-2">
				<ul className="flex flex-row lg:items-end md:items-end items-center space-between h-fit lg:mt-16 md:mt-16 mt-8 lg:mb-8 md:mb-8 mb-4">
					{categories.map((category: CategoryType, index: number) => (
						<li
							key={category.name}
							className="flex flex-col items-center justify-center relative h-full lg:text-base md:text-base sm:text-sm text-xs"
						>
							<button
								type="button"
								onClick={changeCategory(category.category)}
								className={[
									"w-full generic-transition",
									isSelectedCategory(category.category)
										? "opacity-100"
										: "opacity-70 hover:opacity-100",
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

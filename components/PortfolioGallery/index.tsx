import React, { MouseEvent, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useRouter } from "next/router"

import type { PortfolioProjectType } from "../../types/project"

import PortfolioGalleryGroup from "./PortfolioGalleryGroup"

type Props = {
	projects: PortfolioProjectType[]
	categories: string[]
}

const PortfolioGallery = ({ projects, categories }: Props) => {
	const {
		query: { category },
		push,
	} = useRouter()

	const categoriesList = useMemo(() => categories, [projects])

	const selectedProjects = useMemo(
		() =>
			category && typeof !category.length
				? projects.filter((project) => project.categories.includes(category as string))
				: projects,
		[category]
	)

	const isSelectedCategory = (slug: string) => {
		if (slug === "all" && !category) return true
		else if (slug === category) return true
		else return false
	}

	const changeCategory = (slug: string) => (event: MouseEvent<HTMLButtonElement>) => {
		push(
			{
				pathname: "/portfolio",
				query: slug !== "all" ? { category: slug } : {},
			},
			undefined,
			{ shallow: true }
		)
	}

	return (
		<div className="portfolio-gallery-container">
			<nav className="portfolio-category-nav">
				<ul>
					{categoriesList.map((category) => (
						<li key={category}>
							<button
								type="button"
								onClick={changeCategory(category)}
								className={[
									"w-full generic-transition capitalize",
									isSelectedCategory(category) ? "text-black" : "hover:text-red-800",
								].join(" ")}
							>
								<h1 className="text-base font-normal">{category.replaceAll("-", " ")}</h1>
							</button>
							{isSelectedCategory(category) ? (
								<motion.div className="portfolio-category-nav-tab" layoutId="portfolio-nav-tab" />
							) : null}
						</li>
					))}
				</ul>
			</nav>
			<AnimatePresence mode="wait">
				<PortfolioGalleryGroup selectedProjects={selectedProjects} />
			</AnimatePresence>
		</div>
	)
}

export default PortfolioGallery


import React, { MouseEvent, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useRouter } from "next/router"

import type { CategoryType, ProjectType } from "../../types/project"

import PortfolioGalleryGroup from "./PortfolioGalleryGroup"

type Props = {
	projects: ProjectType[]
}

const PortfolioGallery = ({ projects }: Props) => {
	const {
		query: { category },
		push,
	} = useRouter()

	const categories: CategoryType[] = useMemo(
		() =>
			["all", ...new Set(projects.map((project: ProjectType) => project.category.slug.current))].map(
				(category: string) =>
					projects.find((project: ProjectType) => project.category.slug.current === category)?.category || {
						_id: "all",
						name: "All",
						slug: {
							_type: "slug",
							current: "all",
						},
						description: "",
					}
			),

		[projects]
	)

	const selectedProjects = useMemo(
		() => (category ? projects.filter((project) => project.category.slug.current === category) : projects),
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
					{categories.map((category: CategoryType) => (
						<li key={category.slug.current}>
							<button
								type="button"
								onClick={changeCategory(category.slug.current)}
								className={[
									"w-full generic-transition",
									isSelectedCategory(category.slug.current) ? "text-black" : "hover:text-red-800",
								].join(" ")}
							>
								{category.name}
							</button>
							{isSelectedCategory(category.slug.current) ? (
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


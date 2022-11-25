import React, { MouseEvent, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useRouter } from "next/router"

import type { CategoryType, ProjectType } from "../../types/project"

import PortfolioGalleryGroup from "./PortfolioGalleryGroup"

import useStateContext from "../../context/State"

type Props = {}

const PortfolioGallery = (props: Props) => {
	const { projects } = useStateContext()
	const { query, push } = useRouter()

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

	const key = "current" as keyof ProjectType

	const isSelectedCategory = (slug: string) => {
		if (slug === "all" && !query.category) return true
		else if (slug === query.category) return true
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
		<div className="w-full min-h-screen max-h-fit flex flex-col items-center justify-start">
			<nav className="mx-auto lg:w-7/12 md:w-4/5 w-full flex flex-col items-center lg:justify-center md:justify-center justify-start relative px-2">
				<ul className="flex flex-row lg:items-end md:items-end items-center space-between h-fit lg:mt-16 md:mt-16 mt-8 lg:mb-8 md:mb-8 mb-4">
					{categories.map((category: CategoryType) => (
						<li
							key={category.slug.current}
							className="box-content flex flex-col items-center justify-center relative h-full lg:text-base md:text-base sm:text-sm text-xs"
						>
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
								<motion.div className="portfolio-nav-tab" layoutId="portfolio-nav-tab" />
							) : null}
						</li>
					))}
				</ul>
			</nav>
			<AnimatePresence mode="wait">
				<PortfolioGalleryGroup category={(query.category || "all") as string} />
			</AnimatePresence>
		</div>
	)
}

export default PortfolioGallery


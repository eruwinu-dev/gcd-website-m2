import React, { MouseEvent, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useRouter } from "next/router"

import PortfolioGalleryGroup from "./PortfolioGalleryGroup"
import { useGetProjects } from "../../hooks/project/useGetProjects"
import { ProjectLink } from "../../types/project"
import { Category } from "../../types/category"

type Props = {}

const PortfolioGallery = ({}: Props) => {
    const {
        query: { category },
        push,
    } = useRouter()
    const { data } = useGetProjects()

    const { projects, categories } = data
        ? data
        : ({ projects: [], categories: [] } as {
              projects: ProjectLink[]
              categories: Category[]
          })

    const selectedProjects = useMemo(
        () =>
            projects
                ? typeof category === "string"
                    ? projects.filter((project) =>
                          project.categories.includes(category)
                      )
                    : projects
                : [],
        [category, categories]
    )

    const isSelectedCategory = (slug: string) => {
        if (slug === "all" && !category) return true
        else if (slug === category) return true
        else return false
    }

    const changeCategory =
        (slug: string) => (event: MouseEvent<HTMLButtonElement>) => {
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
                {categories ? (
                    <ul>
                        {[{ title: "All", slug: "all" }, ...categories].map(
                            (category) => (
                                <li key={category.slug}>
                                    <button
                                        type="button"
                                        onClick={changeCategory(category.slug)}
                                        className={[
                                            "w-full generic-transition capitalize",
                                            isSelectedCategory(category.slug)
                                                ? "text-black"
                                                : "hover:text-red-800",
                                        ].join(" ")}
                                    >
                                        <h1 className="text-base font-normal">
                                            {category.title}
                                        </h1>
                                    </button>
                                    {isSelectedCategory(category.slug) ? (
                                        <motion.div
                                            className="portfolio-category-nav-tab"
                                            layoutId="portfolio-nav-tab"
                                        />
                                    ) : null}
                                </li>
                            )
                        )}
                    </ul>
                ) : null}
            </nav>
            <AnimatePresence mode="wait">
                <PortfolioGalleryGroup projects={selectedProjects} />
            </AnimatePresence>
        </div>
    )
}

export default PortfolioGallery

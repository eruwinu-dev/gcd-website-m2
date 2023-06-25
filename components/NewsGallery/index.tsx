import React, { MouseEvent, useMemo } from "react"

import { useRouter } from "next/router"
import { motion, AnimatePresence } from "framer-motion"

import NewsGalleryGroup from "./NewsGalleryGroup"
import { Category } from "../../types/category"
import { BasePost } from "../../types/post"
import { useGetPosts } from "../../hooks/post/useGetPosts"

type Props = {}

const NewsGallery = ({ }: Props) => {
    const {
        query: { category },
        push,
    } = useRouter()

    const { data } = useGetPosts()

    const { posts, categories } = data
        ? data
        : ({ posts: [], categories: [] } as {
            posts: BasePost[]
            categories: Category[]
        })

    const selectedPosts = useMemo(
        () =>
            posts
                ? typeof category === "string"
                    ? posts.filter((post) => post.categories.includes(category))
                    : posts
                : [],
        [category, categories]
    )

    const isSelectedCategory = (slug: string) => {
        if (slug === "all" && !category) return true
        else if (slug === category) return true
        else return false
    }

    const changeCategory =
        (slug: string) => (event: MouseEvent<HTMLLIElement>) => {
            push(
                {
                    pathname: "/blogs",
                    query: slug !== "all" ? { category: slug } : {},
                },
                undefined,
                { shallow: true }
            )
        }

    return (
        <div className="news-gallery-container">
            <nav className="news-category-nav">
                <ul>
                    { [{ title: "All", slug: "all" }, ...categories].map(
                        (category) => (
                            <li
                                key={ category.slug }
                                onClick={ changeCategory(category.slug) }
                            >
                                <h2
                                    className={ [
                                        isSelectedCategory(category.slug)
                                            ? "text-black"
                                            : "hover:text-red-800",
                                    ].join(" ") }
                                >
                                    { category.title }
                                </h2>
                                { isSelectedCategory(category.slug) ? (
                                    <motion.div
                                        className="news-category-tab"
                                        layoutId="news-category-tab"
                                    />
                                ) : null }
                            </li>
                        )
                    ) }
                </ul>
            </nav>
            <AnimatePresence mode="wait">
                <NewsGalleryGroup posts={ selectedPosts } />
            </AnimatePresence>
        </div>
    )
}

export default NewsGallery

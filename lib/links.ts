import {LinkType} from "../types/link"

export const links: LinkType[] = [
    {
        name: "About",
        url: "/about",
        rendering: "ssr",
    },
    {
        name: "Process",
        url: "/process",
        rendering: "static",
    },
    {
        name: "Blogs",
        url: "/blogs",
        rendering: "ssr",
    },
    {
        name: "Contact",
        url: "/contact",
        rendering: "static",
    },
    {
        name: "Portfolio",
        url: "/portfolio",
        rendering: "ssr",
    },
]

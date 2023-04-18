import type { NextApiRequest, NextApiResponse } from "next"
import { Category } from "../../../../types/category"
import { BasePost } from "../../../../types/post"
import { getPosts } from "../../../../lib/post/getPosts"

type Data = {
    posts: BasePost[]
    categories: Category[]
}

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
    const { posts, categories } = await getPosts()
    res.status(200).json({ posts, categories })
}

export default handler

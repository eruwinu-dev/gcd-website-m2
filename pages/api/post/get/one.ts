import type { NextApiRequest, NextApiResponse } from "next"
import { BasePost, Post } from "../../../../types/post"
import { getPost } from "../../../../lib/post/getPost"

type Data = {
    post: Post
    recos: BasePost[]
}

export interface GetPostRequest extends NextApiRequest {
    body: { slug: string }
}

const handler = async (req: GetPostRequest, res: NextApiResponse<Data>) => {
    const { slug } = req.body
    const { post, recos } = await getPost(slug)
    res.status(200).json({ post, recos })
}

export default handler

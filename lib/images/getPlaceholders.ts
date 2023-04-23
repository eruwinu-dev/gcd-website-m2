import { getPlaiceholder } from "plaiceholder"

export const getPlaceholders = async (urls: string[]) => {
    const placeholders = await Promise.all(
        urls.map(async (url) => {
            const { base64 } = await getPlaiceholder(url)
            return base64
        })
    )
    return placeholders
}

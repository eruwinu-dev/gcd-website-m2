export type SanityImageWithMetaData = {
    _type: string
    _key?: string
    asset: {
        _id: string
        originalFilename: string
        url: string
        metadata: {
            dimensions: {
                _type: "string"
                width: number
                aspectRatio: number
                height: number
            }
            lqip: string
        }
    }
}

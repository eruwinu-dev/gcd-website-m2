export const MAX_WIDTH_XL = 1280
export const MAX_WIDTH_LG = 1024
export const MAX_WIDTH_MD = 768
export const MAX_WIDTH_SM = 640

export type MediaSizeType = "sm" | "md" | "lg" | "xl"

export const getMediaSize = (width: number): MediaSizeType =>
	width >= MAX_WIDTH_XL ? "xl" : width >= MAX_WIDTH_LG ? "lg" : width >= MAX_WIDTH_MD ? "md" : "sm"


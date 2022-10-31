import groq from "groq"

export const getArticlesQuery = groq`*[_type == "post"][0..7] {
	_id,
	publishedAt,
	title,
    slug,
	description,
	mainImage,
	"author": author -> {name, slug, image, "blogBio": blogbio},
	"categories": categories[] -> {title, description},
    "wordCount": round(length(pt::text(body)) / 5),
}`

export const getCategoriesQuery = groq`*[_type == "category"]{
	_id,
	title,	
	description,
}`

export const getArticleBySlug = groq`*[_type == "post" && slug.current == $slug][0]{
	_id,
	publishedAt,
	title,
	slug,
	description,
	mainImage,
	"author": author -> {name, slug, image, "blogBio": blogbio},
	"categories": categories[] -> {title, description},
	"otherImages": author->otherImages,
	body,
	"wordCount": round(length(pt::text(body)) / 5),
	"recos": *[_type == "post" && slug.current != $slug][0..10] {
		_id,
		publishedAt,
		title,
		slug,
		description,
		mainImage,
		"name": author->name,
		"categories": categories[]->title,
		"wordCount": round(length(pt::text(body)) / 5),
	},
  }`


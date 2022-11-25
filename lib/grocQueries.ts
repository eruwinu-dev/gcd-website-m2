import groq from "groq"

export const getProjects = groq`*[_type == "project"] | order(order asc) {
	_id,
	name,
	slug,
	address,
	team,
	images,
	body,
	"category": categories[0] -> {_id, name, slug, description},
  }`

export const getProjectBySlug = groq`*[_type == "project" && slug.current == $slug][0]{
	_id,
	name,
	slug,
	address,
	team,
	images,
	body,
	"category": categories[0] -> {_id, name, slug, description},
  "previous":*[_type == "project" && order == (^.order) - 1][0]{
	name,
    slug,
  },
  "next":*[_type == "project" && order == (^.order) + 1][0]{
	name,
    slug,
  },
}`

export const getArticlesCategoriesQuery = groq`{
	"articles": *[_type == "post"] | order(publishedAt desc) [0..5] {
		_id,
		publishedAt,
		title,
		slug,
		description,
		mainImage,
		"author": author -> {name, slug, image, "blogBio": blogbio},
		"categories": categories[] -> {title, description},
		"wordCount": round(length(pt::text(body)) / 5),
	},
	"categories": *[_type == "category"]{
		_id,
		title,	
		description,
		"count": count(*[_type == "post" && references(^._id)])
	},
	"total": count(*[_type == "post"])
}`

export const getMoreArticlesQuery = groq`*[_type == "post" && !(slug.current in $currentSlugs)] | order(publishedAt desc) [0..5] {
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

export const getMoreArticlesByCategoryQuery = groq`*[_type == "post" && !(slug.current in $currentSlugs) && ($category in categories[] -> title)] | order(publishedAt desc) [0..4] {
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

export const getMembers = groq`*[_type == "author" && order > 0] | order(order asc){
	_id,
	name,
	slug,
	order,
	role,
	image,
	otherImages,
	blogBio,
	bio,
  }`

export const getMemberBySlug = groq`*[_type == "author" && slug.current == $slug][0]{
	_id,
	name,
	slug,
	order,
	role,
	image,
	otherImages,
	blogBio,
	bio,
  }`


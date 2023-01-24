import groq from "groq"

export const getProjects = groq`*[_type == "project"] | order(order asc) {
	_id,
	name,
	"slug": slug.current,
	address,
	"imageList": [imageList[0]],
	"categories": categories[] -> slug.current,
 }`

export const getProjectSlugs = groq`*[_type == "project"] | order(order asc) {
	"params": {"slug": slug.current}
  }`

export const getProjectBySlug = groq`*[_type == "project" && slug.current == $slug][0]{
	_id,
	name,
	"slug": slug.current,
	address,
	imageList,
	"categories": categories[] -> slug.current,
	team,
	body,
	name,
	"previous":*[_type == "project" && order == (^.order) - 1][0].slug.current,
	"next":*[_type == "project" && order == (^.order) + 1][0].slug.current,
  }`

export const getMembers = groq`*[_type == "author" && order > 0] | order(order asc){
	_id,
	name,
	"slug": slug.current,
	role,
	image,
	"blogBio": blogbio,
  }`

export const getMemberSlugs = groq`*[_type == "author"] | order(order asc) {
	"params": {"slug": slug.current}
  }`

export const getMemberBySlug = groq`*[_type == "author" && slug.current == $slug][0]{
	_id,
	name,
	"slug": slug.current,
	role,
	image,
	otherImages,
	"blogBio": blogbio,
	bio,
  }`

export const getArticlesCategoriesQuery = groq`{
	"articles": *[_type == "post"] | order(publishedAt desc) {
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

export const getArticles = groq`{
	"articles": *[_type == "post"] | order(publishedAt desc) {
		_id,
		publishedAt,
		title,
		"slug": slug.current,
		description,
		mainImage,
		"author": author -> {name, "slug": slug.current, image, "blogBio": blogbio},
		"categories": categories[] -> title,
		"wordCount": round(length(pt::text(body)) / 5),
	},
	"categories": *[_type == "category"].title
}`

export const getArticleSlugs = groq`*[_type == "post"] | order(publishedAt desc) {
	"params": {"slug": slug.current}
  }`


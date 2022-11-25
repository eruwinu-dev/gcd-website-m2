import { ArticleCategoryType, ArticleItemType } from "./article"
import { FormType } from "./form"
import { MemberType } from "./member"
import { ModeType, ProjectType } from "./project"

export interface ContextType {
	storyOpen: boolean
	setStoryOpen: Dispatch<SetStateAction<boolean>>
	headerOpen: boolean
	setHeaderOpen: Dispatch<SetStateAction<boolean>>
	addContact: (values: FormType) => void
	modalOpen: boolean
	setModalOpen: Dispatch<SetStateAction<boolean>>
	contactLoading: boolean
	setContactLoading: Dispatch<SetStateAction<boolean>>
	articles: ArticleItemType[]
	setArticles: Dispatch<SetStateAction<ArticleItemType>>
	articlesLoading: boolean
	getMoreArticles: (categoryString: string | undefined) => void
	categories: ArticleCategoryType[]
	setCategories: Dispatch<SetStateAction<ArticleCategoryType[]>>
	load: boolean
	setLoad: Dispatch<SetStateAction<boolean>>
	members: MemberType[]
	setMembers: Dispatch<SetStateAction<MemberType[]>>
	projects: ProjectType[]
	setProjects: Dispatch<SetStateAction<ProjectType[]>>
}


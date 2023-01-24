import { ArticleItemType } from "./article"
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
	articlesLoading: boolean
	load: boolean
	setLoad: Dispatch<SetStateAction<boolean>>
}


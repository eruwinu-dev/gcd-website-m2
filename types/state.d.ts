import { FormType } from "./form"
import { ModeType } from "./project"

export interface ContextType {
	storyOpen: boolean
	setStoryOpen: Dispatch<SetStateAction<boolean>>
	page: number
	direction: number
	setPage: Dispatch<SetStateAction<[number, number]>>
	paginate: (newDirection: number) => void
	headerOpen: boolean
	setHeaderOpen: Dispatch<SetStateAction<boolean>>
	addContact: (values: FormType) => void
	modalOpen: boolean
	setModalOpen: Dispatch<SetStateAction<boolean>>
	contactLoading: boolean
	setContactLoading: Dispatch<SetStateAction<boolean>>
}


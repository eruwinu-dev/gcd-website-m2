import React, { Fragment } from "react"
import useStateContext from "../../context/State"
import { Dialog, Transition } from "@headlessui/react"

type Props = {}

const ContactModal = (props: Props) => {
	const { modalOpen, setModalOpen, contactLoading } = useStateContext()

	const closeModal = () => setModalOpen(false)

	if (!modalOpen) return <></>

	return (
		<>
			<Transition appear show={modalOpen} as={Fragment}>
				<Dialog as="div" className="relative z-10" onClose={closeModal}>
					<Transition.Child
						as={Fragment}
						enter="ease-out duration-300"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="ease-in duration-200"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<div className="fixed inset-0 bg-black bg-opacity-25" />
					</Transition.Child>

					<div className="fixed inset-0 overflow-y-auto">
						<div className="flex min-h-full items-center justify-center p-4 text-center">
							<Transition.Child
								as={Fragment}
								enter="ease-out duration-300"
								enterFrom="opacity-0 scale-95"
								enterTo="opacity-100 scale-100"
								leave="ease-in duration-200"
								leaveFrom="opacity-100 scale-100"
								leaveTo="opacity-0 scale-95"
							>
								<Dialog.Panel className="w-full max-w-md h-auto lg:aspect-video md:aspect-video sm:aspect-video aspect-square transform overflow-hidden bg-white p-6 text-left align-middle shadow-xl transition-all space-y-4 flex flex-col items-center justify-center">
									{contactLoading ? (
										<button className="w-full h-auto flex flex-col items-center focus:outline-none">
											<svg
												aria-hidden="true"
												className="mr-2 w-12 h-12 text-white animate-spin fill-red-700"
												viewBox="0 0 100 101"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
													fill="currentColor"
												/>
												<path
													d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
													fill="currentFill"
												/>
											</svg>
										</button>
									) : (
										<>
											<Dialog.Title as="h3" className="text-xl font-medium text-gray-900">
												Thanks for reaching out!
											</Dialog.Title>
											<div className="mt-2">
												<p className="text-base">
													You will receive a confirmation for your appointment shortly. We
													look forward to working with you!
												</p>
											</div>

											<div className="mt-8">
												<button
													type="button"
													className="bg-white text-red-700 transition-all ease-in-out duration-300 border-2 border-red-700 tracking-wider lg:px-4 md:px-2 px-1 lg:py-2 py-1 hover:bg-red-700 hover:text-white"
													onClick={closeModal}
												>
													Got it, thanks!
												</button>
											</div>
										</>
									)}
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</div>
				</Dialog>
			</Transition>
		</>
	)
}

export default ContactModal


import React from "react"
import * as Yup from "yup"
import { Formik, Form, Field } from "formik"
import type { FormType } from "../../types/form"
import useStateContext from "../../context/State"

type Props = {}

const schema = Yup.object().shape({
	name: Yup.string().required("Required"),
	email: Yup.string().required("Required").email("Must be a valid email address"),
	company: Yup.string(),
	message: Yup.string().required("Required").max(2000, "Must be most 2000 characters."),
})

const initialValues: FormType = {
	name: "",
	email: "",
	company: "",
	message: "",
}

const ContactForm = (props: Props) => {
	const { addContact } = useStateContext()

	return (
		<Formik
			validationSchema={schema}
			initialValues={initialValues}
			onSubmit={async (values, { resetForm }) => {
				try {
					addContact(values)
				} finally {
					resetForm()
				}
			}}
		>
			{({ values, errors, touched }) => (
				<Form className="contact-form border-2 border-gray-400 lg:mx-8 mx-4">
					<h4>Talk to an Expert Now.</h4>
					<label htmlFor="name">Name*</label>
					<Field
						type="text"
						as="input"
						name="name"
						placeholder="Firstname Lastname"
						className={[touched.name && errors.name && "field-error"].join(" ")}
					/>
					{touched.name && errors.name ? <span className="error">{errors.name}</span> : null}
					<label htmlFor="email">Email*</label>
					<Field
						type="text"
						as=""
						name="email"
						placeholder="email@address.com"
						className={[touched.name && errors.name && "field-error"].join(" ")}
					/>
					{touched.email && errors.email ? <span className="error">{errors.email}</span> : null}
					<label htmlFor="company">Company</label>
					<Field type="text" as="" name="company" placeholder="My Company" />
					<label htmlFor="company">Message*</label>
					<Field
						type="text"
						as="textarea"
						name="message"
						placeholder="2000 characters max"
						className={[touched.name && errors.name && "field-error"].join(" ")}
					/>
					{touched.message && errors.message ? <span className="error">{errors.message}</span> : null}
					<button type="submit">Submit</button>
				</Form>
			)}
		</Formik>
	)
}

export default ContactForm


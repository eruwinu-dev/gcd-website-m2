import React from "react"
import * as Yup from "yup"
import { Formik, Form, Field } from "formik"

type Props = {}

interface FormType {
	name: string
	email: string
	company: string
	message: string
}

const schema = Yup.object().shape({
	name: Yup.string().required("Required"),
	email: Yup.string().required("Required").email("Must be a valid email address"),
	company: Yup.string(),
	message: Yup.string().required("Required"),
})

const initialValues: FormType = {
	name: "",
	email: "",
	company: "",
	message: "",
}

const ContactForm = (props: Props) => {
	return (
		<Formik
			validationSchema={schema}
			initialValues={initialValues}
			onSubmit={async (values, { resetForm }) => {
				resetForm()
			}}
		>
			{({ values, errors, touched }) => (
				<Form className="contact-form">
					<h4>Talk to an Expert Now.</h4>
					<label htmlFor="name">Name</label>
					<Field type="text" as="input" name="name" placeholder="Name" />
					{touched.name && errors.name ? <span className="error">{errors.name}</span> : null}
					<label htmlFor="email">Email</label>
					<Field type="text" as="" name="email" placeholder="Email" />
					{touched.email && errors.email ? <span className="error">{errors.email}</span> : null}
					<label htmlFor="company">Company</label>
					<Field type="text" as="" name="company" placeholder="Company" />
					<label htmlFor="company">Message</label>
					<Field type="text" as="textarea" name="message" placeholder="Message" />
					{touched.message && errors.message ? <span className="error">{errors.message}</span> : null}
					<button type="submit">Submit</button>
				</Form>
			)}
		</Formik>
	)
}

export default ContactForm


import Head from "next/head"
import React from "react"

type Props = {}

const About = (props: Props) => {
	return (
		<>
			<Head>
				<title>About | G Charles Design - Licensed Architectural Services</title>
			</Head>
			<section>
				<div className="about-image"></div>
				<div className="about-beside">
					<div>
						<h1>"We design for our clients, not our portfolio."</h1>
						<p>
							Founded in 2001, G Charles Design has been dedicated to creating authentic and captivating
							architecture with a careful consideration for our clients needs. Our knowledge of
							architecture is informed through years of education and experience. An education that's
							given us the capability to design in any style, scale or geography. GCD strives to create
							architecture that stands as a unique and enduring representation of who our clients are.
						</p>
					</div>
				</div>
			</section>
			<section>
				<div className="about-beside">
					<div>
						<p>
							In addition to our decades of residential and high-end residential experience, we have
							completed over 900,000 square feet of retail space design both nationally and overseas. Our
							firm is eager to work with clients from all walks of life. We are not a firm that's only
							interested in the next big opportunity. We pride ourselves in bringing custom design
							services to clients that have never had that experience. Whether the project is small or
							large, we will always passionately pursue quality for each of our projects.
						</p>
					</div>
				</div>
				<div></div>
			</section>
		</>
	)
}

export default About


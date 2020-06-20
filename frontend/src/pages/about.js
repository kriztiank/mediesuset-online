import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Title from "../components/Title"
import Image from "gatsby-image"
import SEO from "../components/SEO"
// ...GatsbyImageSharpFluid

// with page query you can access graphql in the data object
const About = ({
  data: {
    about: { nodes },
  },
}) => {
  // destructuring the graphql data object
  // console.log(nodes);
  // nodes is an array with one item/object
  const { info, title, image } = nodes[0]

  return (
    <Layout>
      <SEO title="About" description="about mediesuset festival" />
      <section className="about-page">
        <div className="section-center about-center">
          <Image fluid={image.childImageSharp.fluid} className="about-img" />
          <article className="about-text">
            <Title title={title} />
            <p>{info}</p>
          </article>
        </div>
      </section>
    </Layout>
  )
}

// rename allStrapiAbout to about with graphql alias
export const query = graphql`
  {
    about: allStrapiAbout {
      nodes {
        title
        info
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

export default About

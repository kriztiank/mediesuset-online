// FEATURED/FILTERED NEWS
import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import News from "../components/News"
import SEO from "../components/SEO"

// with page query you can access graphql in the data object
export default ({ data }) => {
  // console.log(data)
  // destructuring the graphql data
  // rename nodes to news with alias
  const {
    allStrapiNews: { nodes: news },
  } = data

  return (
    // pass in and render the title props here, no title = default title
    <Layout>
      <SEO title="Home" description="Mediesuset festival" />
      <Hero />
      <News news={news} title="NYHEDER" showLink />
    </Layout>
  )
}

export const query = graphql`
  {
    allStrapiNews(filter: { featured: { eq: true } }) {
      nodes {
        slug
        contentRich
        desc
        id
        teaser
        title
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    # allStrapiEvents(filter: { featured: { eq: true } }) {
    #   nodes {
    #     id
    #     teaser
    #     title
    #     image {
    #       childImageSharp {
    #         fluid {
    #           ...GatsbyImageSharpFluid
    #         }
    #       }
    #     }
    #   }
    # }
  }
`

// ...GatsbyImageSharpFluid

// ALL NEWS
import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import News from "../components/News"
import SEO from "../components/SEO"

// with page query you can access graphql in the data object
// news holds the data, pass to components/News.js plural
export default ({ data }) => {
  // console.log(data)
  // destructuring the graphql data
  // rename nodes to news with alias
  const {
    allStrapiNews: { nodes: news },
  } = data

  return (
    <Layout>
      <SEO title="News" />
      <News news={news} title="NYHEDSARKIV" />
    </Layout>
  )
}

export const query = graphql`
  {
    allStrapiNews {
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
  }
`
// ...GatsbyImageSharpFluid

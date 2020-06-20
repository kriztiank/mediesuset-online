import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Artists from "../components/Artists"
import SEO from "../components/SEO"

// with page query you can access graphql in the data object
// artists holds the data, pass to components/Artists.js plural
export default ({ data }) => {
  // console.log(data)
  // destructuring the graphql data
  // rename nodes to artists with alias
  const {
    allStrapiArtists: { nodes: artists },
  } = data

  return (
    <Layout>
      <SEO title="Artists" />
      <Artists artists={artists} title="LINE-UP" />
    </Layout>
  )
}

// sort the line-up in alphabetical order, ascending (A to Z)
export const query = graphql`
  {
    allStrapiArtists(sort: { fields: name }) {
      nodes {
        id
        name
        stageTime
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

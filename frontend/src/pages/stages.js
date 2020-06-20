import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Stages from "../components/Stages"
import SEO from "../components/SEO"

// with page query you can access graphql in the data object
// stages holds the data, pass to components/Stages.js plural
export default ({ data }) => {
  // console.log(data)
  // destructuring the graphql data
  // rename nodes to stages with alias
  const {
    allStrapiArtists: { nodes: stages },
  } = data

  return (
    <Layout>
      <SEO title="Stages" />
      <Stages stages={stages} title="PROGRAM" />
    </Layout>
  )
}

// sort the program in alphabetical order, ascending (A to Z)
export const query = graphql`
  {
    allStrapiArtists(sort: { fields: name }) {
      nodes {
        id
        name
        stageTime
      }
    }
  }
`

// ...GatsbyImageSharpFluid

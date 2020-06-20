// ALL NEWS
import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Camps from "../components/Camps"
import SEO from "../components/SEO"
import HeroCamps from "../components/HeroCamps"


// with page query you can access graphql in the data object
// camps holds the data, pass to components/Camps.js plural
export default ({ data }) => {
  // console.log(data)
  // destructuring the graphql data
  // rename nodes to camps with alias
  const {
    allStrapiCamps: { nodes: camps },
  } = data

  return (
    <Layout>
      <SEO title="Camps" />
      <HeroCamps />
      <Camps camps={camps} title="CAMPS" />
    </Layout>
  )
}

export const query = graphql`
  {
    allStrapiCamps {
      nodes {
        id
        slug
        name
        description
        num_people
        detail
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

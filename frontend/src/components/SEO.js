import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const query = graphql`
  {
    site {
      siteMetadata {
        author
        siteDesc: description
        siteTitle: title
      }
    }
  }
`
// use destructuring and useStaticQuery Hook to get graphql `data`
const SEO = ({ title, description }) => {
  const { site } = useStaticQuery(query)
  const { siteDesc, siteTitle } = site.siteMetadata

  return (
    <Helmet htmlAttributes={{ lang: "en" }} title={`${title} | ${siteTitle}`}>
      {/* fallback if no description is provided in index.js use the one in gatsby-config */}
      <meta name="description" content={description || siteDesc} />
    </Helmet>
  )
}

export default SEO

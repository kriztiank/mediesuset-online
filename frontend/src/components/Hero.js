import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

const Hero = () => {
  const data = useStaticQuery(graphql`
  query MyQuery {
    site {
      siteMetadata {
        description
      }
    }
  }
`)

  return (
    <header className="outher">
         <h1>{data.site.siteMetadata.description}</h1>
      <div>
        <section className="columns">
          <Link to="/tickets/">
            <button className="btn-red-ticket">KØB BILLET</button>
          </Link>
        </section>
      </div>
    </header>
  )
}

export default Hero

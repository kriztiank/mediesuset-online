import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"

// pull out data from ...camps in components/Camps.js = allStrapiCamps
const Camp = ({ id, slug, name, description, num_people, detail, image }) => {
  return (
    <Link to={`/camps/${slug}`} key={id} className="news">
      <article>
        <Image fluid={image.childImageSharp.fluid} className="news-img" />
        <div className="news-card">
          <h3> {name} </h3>
          <p>{description}</p>

          <div className="news-footer">
            <p>
              <button className="btn btn-black">LÆS MERE</button>
            </p>
          </div>
        </div>
      </article>
    </Link>
  )
}

export default Camp

// EXPORT AND RENDER IN camps.js PAGE

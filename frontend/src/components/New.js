import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"

// pull out data from ...news in components/News.js = allStrapiNews
const New = ({ id, title, teaser, image, slug, desc }) => {
  return (
    <Link to={`/news/${slug}`} key={id} className="news">
      <article>
        <Image fluid={image.childImageSharp.fluid} className="news-img" />
        <div className="news-card">
          <h3> {title} </h3>
          {/* <p>{desc}</p> */}
          <p>{teaser}</p>
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

export default New

// EXPORT AND RENDER IN news.js PAGE

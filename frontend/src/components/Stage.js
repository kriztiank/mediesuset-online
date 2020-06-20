import React from "react"
// import Image from "gatsby-image"
import { Link } from "gatsby"

// pull out data from ...stage in components/Stages.js = allStrapiArtist (holds all the data needed in one collection)
const Stage = ({ name, stageTime }) => {
  return (
    <Link to="/events" className="artists">
      <article>
        <div className="artists-card">
          <div className="artists-footer">
            <h3> {name} </h3>
            <p> {stageTime} </p>
          </div>
        </div>
      </article>
    </Link>
  )
}

export default Stage

// EXPORT AND RENDER IN stages.js PAGE

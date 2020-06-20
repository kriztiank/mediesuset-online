import React from "react"
import Title from "./Title"
import Artist from "./Artist"

// recieve data from artists page, pull out the graphql fields with destructuring, pass to Artist single
const Artists = ({ artists, title }) => {
  return (
    <section className="section">
      {/* title is passed as a prop from index.js */}
      <Title title={title} />
      <div className="section-center artists-center">
        {artists.map(artist => {
          // use object spread operator to get all properties
          return <Artist key={artist.id} {...artist} />
        })}
      </div>
    </section>
  )
}

export default Artists

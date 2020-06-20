import React from "react"
import Title from "./Title"
import Camp from "./Camp"

// recieve data from camps page, pull out the graphql fields with destructuring, pass to Camp single
const Camps = ({ camps, title }) => {
  return (
    <section className="section">
      {/* title is passed as a prop from camps.js */}
      <Title title={title} />
      <div className="section-center camps-center">
        {camps.map(camps => {
          // use object spread operator to get all properties
          return <Camp key={camps.id} {...camps} />
        })}
      </div>
    </section>
  )
}

export default Camps

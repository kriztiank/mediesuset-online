import React from "react"
import Title from "./Title"
import Stage from "./Stage"
// import { Link } from "gatsby"

// recieve data from stages page, pull out the graphql fields with destructuring, pass to Stage single
const Stages = ({ stages, title }) => {
  return (
    <section className="section section-center">
      <Title title={title} />
      <header class="grid-container">
        <div class="grid white">A-Å</div>
        <div class="grid white">RØD SCENE</div>
        <div class="grid white">BLÅ SCENE</div>
        <div class="grid white">GRØN SCENE</div>
        <div class="grid white">LILLA SCENE</div>
      </header>

      <div className="artists-center">
        {stages.map(stage => {
          return <Stage key={stage.id} {...stage} />
        })}
      </div>
    </section>
  )
}

export default Stages

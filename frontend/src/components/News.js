import React from "react"
import Title from "./Title"
import New from "./New"
import { Link } from "gatsby"

// recieve data from news page, pull out the graphql fields with destructuring, pass to New single
const News = ({ news, title, showLink }) => {
  return (
    <section className="section">
      {/* title is passed as a prop from index.js */}
      <Title title={title} />
      <div className="section-center news-center">
        {news.map(news => {
          // use object spread operator to get all properties
          return <New key={news.id} {...news} />
        })}
      </div>

      <div>
        {/* toggle nyhedsarkiv button*/}
        {/* if showLink is undefined do nothing */}
        {/* if it is passed from index.js show the link */}
        {showLink && (
          // navigate to news page (all news)
          <Link to="/news">
            <button className="section-center btn btn-blue btn-block">
              NYHEDSARKIV
            </button>
          </Link>
        )}
      </div>
    </section>
  )
}

export default News

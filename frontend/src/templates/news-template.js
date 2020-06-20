import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import ReactMarkdown from "react-markdown"

// with page query you can access graphql in the data object
const ComponentName = ({ data }) => {
  // console.log(data)
  // destructuring the graphql data
  const { contentRich } = data.news
  // console.log(contentRich)
  return (
    <Layout>
      {/* <SEO title={title} description={desc} /> */}
      <section className="news-template">
        <div className="section-center">
          <article className="news-content">
            <ReactMarkdown source={contentRich} />
          </article>
          <Link to="/news">
            <button className="btn center-btn">NYHEDSARKIV</button>
          </Link>
        </div>
      </section>
    </Layout>
  )
}

// page query
export const query = graphql`
  query GetSingleNews($slug: String) {
    news: strapiNews(slug: { eq: $slug }) {
      contentRich
    }
  }
`

export default ComponentName

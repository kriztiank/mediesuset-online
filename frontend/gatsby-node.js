const path = require("path")

// create pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    {
      news: allStrapiNews {
        nodes {
          slug
        }
      }
    }
  `)

  result.data.news.nodes.forEach(news => {
    createPage({
      path: `/news/${news.slug}`,
      component: path.resolve(`src/templates/news-template.js`),
      context: {
        slug: news.slug,
      },
    })
  })
}

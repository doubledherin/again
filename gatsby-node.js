const { createFilePath } = require(`gatsby-source-filesystem`)
const path = require(`path`)
const { withPrefix } = require(`gatsby`)

const { galleryPathPrefix } = require(`./src/constants`)

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === 'build-html') {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /p5/,
            use: loaders.null()
          }
        ]
      },
    })
  }
}

exports.onCreateNode = ({ node, getNode, actions }) => {
  if (node.internal.type === "ImageSharp") {
    const { createNodeField } = actions
    const fileNode = getNode(node.parent)
    if (fileNode.relativePath.startsWith("images/gallery")) {
      const slug = createFilePath({ node, getNode, basePath: `pages` }).replace(`/${galleryPathPrefix}`, '')
      createNodeField({
        node,
        name: `slug`,
        value: slug,
      })
    }
  }
}

exports.createPages = async ({ graphql, actions }) => {
  global.__BASE_PATH__ = ''
  global.__PATH_PREFIX__ = '/again'
  const { createPage } = actions
  const result = await graphql(`
    query {
      allImageSharp {
        nodes {
          fields {
            slug
          }
        }
      }
    }
  `)
  result.data.allImageSharp.nodes.forEach(node => {
    if (node && node.fields) {
        createPage({
        path: withPrefix(node.fields.slug),
        component: path.resolve(`./src/templates/galleryItemPage.js`),
        context: {
          // Data passed to context is available
          // in page queries as GraphQL variables.
          slug: node.fields.slug,
        },
      })
    }
  })
}
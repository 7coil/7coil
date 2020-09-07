const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')
const fs = require('fs')

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type == 'Mdx') {
    const parent = getNode(node.parent)
    const directoryParts = parent.relativeDirectory.split(/[\\/]/)

    const folderName = directoryParts[0]
    const slug = createFilePath({ node, getNode })

    createNodeField({
      name: 'slug',
      node,
      value: slug,
    })

    createNodeField({
      node,
      name: 'template',
      value: folderName,
    })
  }
}

exports.createPages = ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  return graphql(`
    {
      allMdx(sort: { order: DESC, fields: [frontmatter___date] }) {
        edges {
          node {
            fields {
              template
              slug
            }
            frontmatter {
              disable
            }
          }
        }
      }
    }
  `).then((result) => {
    if (result.errors) {
      reporter.panicOnBuild('Error while running GraphQL query')
      return
    }

    result.data.allMdx.edges.forEach(({ node }) => {
      const template = node.fields.template
      let templatePath = path.resolve(
        __dirname,
        'src',
        'templates',
        template,
        'index.js'
      )

      if (!fs.existsSync(templatePath)) {
        templatePath = path.resolve(
          __dirname,
          'src',
          'templates',
          'default',
          'index.js'
        )
      }

      if (node.frontmatter?.disable !== true) {
        createPage({
          path: node.fields.slug,
          component: templatePath,
          context: node.fields,
        })
      }
    })
  })
}

const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type == 'Mdx') {
    const parent = getNode(node.parent);
    const directoryParts = parent.relativeDirectory.split(/[\\/]/);

    const folderName = directoryParts[0];
    const slug = createFilePath({ node, getNode })

    createNodeField({
      name: 'slug',
      node,
      value: slug,
    })

    createNodeField({
      node,
      name: 'template',
      value: folderName
    });
  }
}

exports.createPages = ({ actions, graphql, reporter }) => {
  const { createPage } = actions;

  return graphql(`
    {
      allMdx(
        sort: { order: DESC, fields: [frontmatter___date] }
      ) {
        edges {
          node {
            fields {
              template
              slug
            }
          }
        }
      }
    }
  `)
    .then((result) => {
      if (result.errors) {
        reporter.panicOnBuild('Error while running GraphQL query');
        return;
      }

      result.data.allMdx.edges.forEach(({ node }) => {
        createPage({
          path: node.fields.slug,
          component: path.resolve(__dirname, 'src', 'templates', node.fields.template, 'index.js'),
          context: node.fields
        });
      });
    });
}

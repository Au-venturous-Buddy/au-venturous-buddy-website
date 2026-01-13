const {createFilePath} = require('gatsby-source-filesystem')
const path = require(`path`)

exports.onCreateNode = ({node, getNode, actions}) => {
    if(node.internal.type === 'MarkdownRemark') {
        const {createNodeField} = actions
        const slug = createFilePath({node, getNode, basePath: `assets`})
        createNodeField({
            node,
            name: `slug`,
            value: slug
        })
    }
}

exports.createPages = async({graphql, actions}) => {
    const {createPage} = actions
    const result = await graphql(`
    query {
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                hierarchy
              }
            }
          }
        }
      }
    `)

    result.data.allMarkdownRemark.edges.forEach(({node}) => {
        if(node.frontmatter.hierarchy === "franchise") {
            createPage({
                path: node.fields.slug,
                component: path.resolve('./src/templates/franchise/src/index.js'),
                context: {
                  // Data passed to context is available
                  // in page queries as GraphQL variables.
                  pagePath: node.fields.slug,
                }
            })
        }
        else if(node.frontmatter.hierarchy === "title") {
            createPage({
                path: node.fields.slug,
                component: path.resolve('./src/templates/title/src/index.js'),
                context: {
                  // Data passed to context is available
                  // in page queries as GraphQL variables.
                  pagePath: node.fields.slug,
                }
            })
        }
    })
}
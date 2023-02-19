const {createFilePath} = require(`gatsby-source-filesystem`)
const path = require(`path`)

exports.onCreateNode = ({node, getNode, actions}) => {
    const {createNodeField} = actions
    if (node.internal.type === `MarkdownRemark`) {
        const slug = createFilePath({node, getNode,basePath: `pages` })
        createNodeField({
            node,
            name: `slug`,
            value: slug,
        })
    }
}

exports.createPages = async ({graphql, actions}) => {
    const {createPage} = actions
    const result = await graphql(`
    query {
      allMarkdownRemark {
       edges {
           node {
             fields {
              slug
            }
                   }
               }
           }
           
           
                 allMdx {
        nodes {
          id
          frontmatter {
            slug
          }
          internal {
            contentFilePath
          }
        }
      }
       }
  `)

    if (result.errors) {
        reporter.panicOnBuild('Error loading MDX result', result.errors)
    }

    // Create blog post pages.
    result.data.allMdx.nodes.forEach(node=>{
        createPage({
            path:node.frontmatter.slug,
            component:path.resolve(`./src/components/mdxPost.js`),
            context:{id:node.id}
        })
    })

    result.data.allMarkdownRemark.edges.forEach(({node}) => {
        createPage({
            path: node.fields.slug,
            component: path.resolve(`./src/components/post.js`),
            context: {
                slug: node.fields.slug,
            },
        })
    })
}
const {createFilePath} = require(`gatsby-source-filesystem`)
const path = require(`path`)

exports.onCreateNode = ({node, getNode, actions}) => {
    const {createNodeField} = actions
    if (node.internal.type === `cosmicjsHellsies`) {
        const slug = createFilePath({node, getNode})
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
      allCosmicjsHellsies {
       edges {
           node {
                slug
                   }
               }
           }
       }
  `)
    result.data.allCosmicjsHellsies.edges.forEach(({node}) => {
        createPage({
            path: node.slug,
            component: path.resolve(`./src/components/post.js`),
            context: {
                slug: node.slug,
            },
        })
    })
}
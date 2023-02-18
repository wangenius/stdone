import * as React from "react"
import "../@style/index.css";
import {Layout} from "../components/Layout";
import {graphql, Link} from "gatsby";

export const query = graphql`
query MyQuery {
  allMarkdownRemark {
    totalCount
    edges {
      node {
        id
        frontmatter{
          title,date(formatString: "DD MMMM, YYYY")
        }
        fields {
            slug
          }
        excerpt
      }
    }
    pageInfo {
      perPage
    }
  }
}
`
const IndexPage = ({data}) => {
    return (
        <Layout>
            {data.allMarkdownRemark.edges.map(({node}) => (
                <div key={node.id}>
                    <h3>{node.frontmatter.title}<span>— {node.frontmatter.date}</span></h3>
                    <p>{node.excerpt}</p>
                    <Link to={node.fields.slug}>转到</Link>
                </div>
            ))}
        </Layout>
    )
}


export default IndexPage

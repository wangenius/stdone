import * as React from "react"
import "../@style/index.css";
import {Layout} from "../components/Layout";
import {graphql, Link} from "gatsby";

export const query = graphql`
query MyQuery {
  allCosmicjsHellsies {
    edges {
      node {
        bucket
        id
        content
        status
        slug
        title
        order
        created_at(formatString: "YYYY MMMM DD")
        created_by
      }
    }
  }
}
`
const IndexPage = ({data}) => {
    return (
        <Layout>
            {data.allCosmicjsHellsies.edges.map(({node}) => (
                <div key={node.id}>
                    <h3>{node.title}<span>— {node.created_at}</span></h3>
                    <p>{node.content}</p>
                    <Link to={node.slug}>转到</Link>
                </div>
            ))}
        </Layout>
    )
}


export default IndexPage

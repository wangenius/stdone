import {Once} from "../components/Once";
import React from "react"
import {Layout} from "../components/Layout";
import {graphql, navigate} from "gatsby";

export const query = graphql`
query MyQuery {
  allMdx {
    edges {
      node {
        id
        frontmatter {
          slug
          title
          date
        }
      }
    }
  }
}
`


const Portfolio = ({data}) => {
    return <Layout>
        <Once>
            {data.allMdx.edges.map(({node})=>{
                return <Once onClick={()=>navigate(node.frontmatter.slug)}>{node.frontmatter.title}</Once>
            })}
        </Once>
    </Layout>
}

export default Portfolio
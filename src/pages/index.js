import * as React from "react"
import {Button} from "../components/Button";
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
export const IndexPage = ({data}) => {
    return (
        <Layout>
            <Button label={"this is my blog"}/>
            <p>
                We're the only site running on your computer dedicated to showing the best
                photos and videos of pandas eating lots of food.
            </p>
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

export const Head = () => <title>Hello</title>

import React from "react"
import { graphql } from "gatsby"
import {Layout} from "./Layout";
 const Post = ({data}) => {
    const post = data.cosmicjsHellsies
    return (
        <Layout>
            <div>
                hello
                <h1>{post.title}</h1>
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>
        </Layout>
    )
}
export default Post
export const query = graphql`
  query ($slug: String!) {
    cosmicjsHellsies(slug:{eq:$slug}) {
          slug
          title
          created(formatString: "DD MMMM, YYYY")
   
    }
  }
`
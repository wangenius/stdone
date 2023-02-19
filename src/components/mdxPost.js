import React from "react"
import {graphql, Link} from "gatsby"
import {MDXProvider} from "@mdx-js/react"
import {Layout} from "./Layout";

const shortcodes = {Link} // Provide common components here

function PageTemplate({data, children}) {
    return (
        <Layout>
            <h1>{data.mdx.frontmatter.title}</h1>
            <MDXProvider components={shortcodes}>
                {children}
            </MDXProvider>
        </Layout>
    )
}

export default PageTemplate

export const query = graphql`
  query($id: String!) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
      }
    }
  }
`
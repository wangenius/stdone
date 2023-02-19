import * as React from "react"
import {Layout} from "../components/Layout";
import {graphql, navigate} from "gatsby";
import {Once} from "../components/Once";
import _ from 'lodash'

export const query = graphql`
  query {
    allMarkdownRemark{
      totalCount
      edges {
        node {
          id
          frontmatter {
            description
            title
            date(formatString: "DD MMMM, YYYY")
            author
            type
          }
          fields {
            slug
          }
        }
      }
    }
  }
`

const IndexPage = ({data}) => {
    return (
        <Layout>
            <Once cs={'posts'}>
                {data.allMarkdownRemark.edges.map(({node}) => (
                    <Once className={'postcard'} key={node.id}
                          onClick={() => navigate(node.fields.slug)}>
                        <Once cs={'head'}>
                            <Once cs={'title'}>{_.startCase(node.frontmatter.title)}</Once>
                            <Once cs={'date'}>{node.frontmatter.date}</Once>
                            <Once cs={'author'}>{node.frontmatter.author}</Once>
                        </Once>
                        <Once cs={"body"}>
                            <Once cs={'description'}>{node.frontmatter.description}</Once>
                        </Once>
                        <Once cs={'foot'}>
                            <Once cs={'types'}>
                                {node.frontmatter.type && node.frontmatter.type.map(item =>
                                    <Once>{item}</Once>)}
                            </Once>
                        </Once>

                    </Once>

                ))}
            </Once>

        </Layout>
    )
}


export default IndexPage

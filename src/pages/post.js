import * as React from "react"
import {Layout} from "../components/Layout";
import {graphql, navigate} from "gatsby";
import _ from 'lodash'

export const query = graphql`
  query {
    allMarkdownRemark (sort: {frontmatter: {date: DESC}}) {
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
            cover
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
            <div
                className="grid my-16 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 xl:gap-8">

                {
                    data.allMarkdownRemark.edges.map(({node}, key) => {

                        return <div
                            className="flex flex-col bg-white border rounded-lg overflow-hidden"
                            key={key}>
                            <a href={node.fields.slug}
                               className="group h-48 md:h-64 block bg-gray-100 overflow-hidden relative">
                                <img
                                    src={node.frontmatter.cover || "/defaultcover.jpg"}
                                    loading="lazy" alt="Photo by Minh Pham"
                                    className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200"/>
                            </a>

                            <div className="flex flex-col flex-1 p-4 sm:p-6">
                                <a onClick={() => navigate(node.fields.slug)}
                                   className="text-gray-800 line-clamp-1 text-lg font-semibold mb-2 hover:text-indigo-500 active:text-indigo-600 transition duration-100">
                                    {
                                        _.startCase(node.frontmatter.title)
                                    }
                                </a>

                                <span
                                    className="block text-gray-400 mb-2  text-sm">{node.frontmatter.date}</span>
                                <p className={"text-gray-500 w-full line-clamp-6"}>{node.frontmatter.description}</p>

                            </div>
                        </div>

                    })
                }
            </div>

        </Layout>
    )
}


export default IndexPage

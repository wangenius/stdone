import React from "react"
import {graphql, navigate, StaticQuery} from "gatsby";
import _ from "lodash";

export const LatestPost = () => {
    return <StaticQuery query={graphql`query {
  allMarkdownRemark (limit: 4, sort: {frontmatter: {date: DESC}}) {
    edges {
      node {
      fields{
      slug
      }
        frontmatter {
          author
          date(formatString: "YYYY.MM.DD")
          description
          slug
          title
          type
          thumbnail
          cover
        }
      }
    }
  }
}`} render={(data) => {

        return <div className="bg-white py-6 sm:py-8 lg:py-12">
            <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">

                <div className="mb-10 md:mb-16">
                    <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">Latest
                        Blog</h2>
                    <p className="max-w-screen-md text-gray-500 md:text-lg text-center mx-auto">This
                        is a section of the latest post talking about everything I want share or
                        record here.</p>
                </div>

                <div
                    className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 xl:gap-8">

                    {
                        data.allMarkdownRemark.edges.map(({node}, key) => {

                            return <div
                                className="flex flex-col bg-white border rounded-lg overflow-hidden"
                                key={key}>
                                <a href={node.fields.slug}
                                   className="group h-48 md:h-64 block bg-gray-100 overflow-hidden relative">
                                    <img
                                        src={node.frontmatter.cover || "./defaultcover.jpg"}
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
            </div>
        </div>

    }
    }></StaticQuery>
}
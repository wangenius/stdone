import {Once} from "../components/Once";
import React from "react"
import {Layout} from "../components/Layout";
import {graphql} from "gatsby";

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
          cover
        }
      }
    }
  }
}
`


const Portfolio = ({data}) => {
    return <Layout>
        <Once>
            <div className="grid my-16 sm:grid-cols-2 gap-6">

                {
                    data.allMdx.edges.map(({node}, key) => {

                        return <a key={key} href={node.frontmatter.slug}
                                  className="group h-80 flex items-end bg-gray-100 rounded-lg overflow-hidden shadow-lg relative p-4">
                            <img
                                src={node.frontmatter.cover || "/defaultcover.jpg"}
                                loading="lazy" alt="Photo by Fakurian Design"
                                className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200"/>

                            <div
                                className="bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50 absolute inset-0 pointer-events-none"></div>

                            <div className="flex flex-col relative">
                                <span className="text-gray-300">{node.frontmatter.date}</span>
                                <span
                                    className="text-white text-lg lg:text-xl font-semibold">{node.frontmatter.title}</span>
                            </div>
                        </a>
                    })
                }
            </div>
        </Once>
    </Layout>
}

export default Portfolio
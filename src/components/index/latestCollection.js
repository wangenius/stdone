import React from "react";
import { graphql, StaticQuery } from "gatsby";
import {StaticImage} from "gatsby-plugin-image";

export const LatestCollection = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          allMdx(sort: { frontmatter: { date: DESC } }, limit: 2) {
            edges {
              node {
                frontmatter {
                  slug
                  title
                  cover
                  date(formatString: "")
                }
              }
            }
          }
        }
      `}
      render={(data) => {
        return (
          <div className="bg-white py-6 sm:py-8 lg:py-12">
            <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
              <div className="mb-10 md:mb-16">
                <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">
                  Latest Collections
                </h2>

                <p className="max-w-screen-md text-gray-500 md:text-lg text-center mx-auto">
                  Here is a collection of some of my works, ranging from my
                  career in architecture to computer science, and from my
                  professional to personal life.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                {data.allMdx.edges.map(({ node }, key) => {
                  return (
                    <a
                      key={key}
                      href={node.frontmatter.slug}
                      className="group h-80 flex items-end bg-gray-100 rounded-lg overflow-hidden shadow-lg relative p-4"
                    >
                      <StaticImage
                          src={"./defaultcover.jpg"}
                        alt="Photo by Fakurian Design"
                      />


                      <div className="flex flex-col relative">
                        <span className="text-gray-300">
                          {node.frontmatter.date}
                        </span>
                        <span className="text-white text-lg lg:text-xl font-semibold">
                          {node.frontmatter.title}
                        </span>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        );
      }}
    />
  );
};

import React from "react";
import {graphql, StaticQuery} from "gatsby";

export const Status = () => {

    return <StaticQuery query={graphql`
        query {
  allMarkdownRemark {
    totalCount
  }
    allMdx {
    totalCount
  }  allImageSharp {
    totalCount
  }
}`} render={(data) => {
        return <div className="bg-white py-6 sm:py-8 lg:py-12">
            <div className="max-w-screen-xl px-4 md:px-8 mx-auto">
                <div className="mb-10 md:mb-16">
                    <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">My
                        Projects</h2>

                    <p className="max-w-screen-md text-gray-500 md:text-lg text-center mx-auto">The
                        webpage contains blogs,portfolios,some resources,media which I made,and
                        applications which I made. The Content box provides a centralized location
                        to explore and engage with these types of content, whether they are looking
                        for informative articles, inspiring designs, or practical tools for their
                        own projects.</p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 md:divide-x gap-8 md:gap-0">
                    <div className="flex flex-col items-center md:p-4">
                        <div className="text-indigo-500 text-xl sm:text-2xl md:text-3xl font-bold">{
                            data.allMarkdownRemark.totalCount
                        }
                        </div>
                        <div className="text-sm sm:text-base font-semibold">blog</div>
                    </div>

                    <div className="flex flex-col items-center md:p-4">
                        <div
                            className="text-indigo-500 text-xl sm:text-2xl md:text-3xl font-bold">{
                            data.allMdx.totalCount
                        }
                        </div>
                        <div className="text-sm sm:text-base font-semibold">portfolio</div>
                    </div>

                    <div className="flex flex-col items-center md:p-4">
                        <div
                            className="text-indigo-500 text-xl sm:text-2xl md:text-3xl font-bold">{
                            data.allImageSharp.totalCount
                        }+
                        </div>
                        <div className="text-sm sm:text-base font-semibold">media</div>
                    </div>

                    <div className="flex flex-col items-center md:p-4">
                        <div className="text-indigo-500 text-xl sm:text-2xl md:text-3xl font-bold">
                            {"several"}
                        </div>
                        <div className="text-sm sm:text-base font-semibold">production</div>
                    </div>

                </div>
            </div>
        </div>
    }
    }/>

}
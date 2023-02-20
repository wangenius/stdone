import React from "react";
import jsons from "/static/me.json"

export const Footer = () => {

    return <footer className="bg-white dark:bg-gray-900 w-full absolute bottom-0">
        <div className="container px-6 py-12 mx-auto">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
                <div className="sm:col-span-2">
                    <h1 className="max-w-lg text-xl font-semibold tracking-tight text-gray-800 xl:text-2xl dark:text-white">Subscribe
                        my post to get update.</h1>

                    <div className="flex flex-col mx-auto mt-6 space-y-3 md:space-y-0 md:flex-row">
                        <input id="email" type="text"
                               className="px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300"
                               placeholder="Email Address"/>

                        <button
                            className="w-full px-6 py-2.5 text-sm font-medium tracking-wider text-white transition-colors duration-300 transform md:w-auto md:mx-4 focus:outline-none bg-gray-800 rounded-lg hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80">
                            Subscribe
                        </button>
                    </div>
                </div>
                {
                    jsons.footer.map((item, key) => {
                        return <div key={key}>
                            <p className="font-semibold text-gray-800 dark:text-white">{item.name}</p>

                            <div className="flex flex-col items-start mt-5 space-y-2">
                                {item.item.map((it, key) => {

                                    return <a href={it.url} key={key}
                                              className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">{it.name}</a>

                                })}
                            </div>
                        </div>
                    })
                }
            </div>

            <hr className="my-6 border-gray-200 md:my-8 dark:border-gray-700"/>
            <div className="text-gray-400 text-sm text-center  py-8">
                Powered by <a href={'https://www.gatsbyjs.com/'} target="_blank"
                              className={'underline hover:text-blue-500'}>Gatsby</a> and <a target="_blank" href={'https://www.netlifycms.org/'}
                className={'underline hover:text-blue-500'}>Netlify CMS</a> - Present wangenius. All
                rights reserved.
            </div>

        </div>
    </footer>
}

import React, {useRef} from 'react'
import {graphql, StaticQuery} from "gatsby";
import logo from '../../static/icon.svg'
import {useWindowScroll} from "react-use";
import me from "../../static/me.json"

export const Header = () => {
    const {y} = useWindowScroll()
    const Ref = useRef()

    return <StaticQuery query={graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `} render={(data) => {

        return <nav ref={Ref}
                    className="transition-shadow z-50  sticky top-0 bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900"
                    style={{boxShadow: y > 10 ? " rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px" : "none"}}>
            <div className="container flex flex-wrap items-center justify-between mx-auto">
                <a href="/" className="flex items-center">
                    <img src={logo} className="h-6 mr-3 sm:h-9 w-10" alt="logo"/>
                    <span
                        className="self-center text-xl font-extrabold whitespace-nowrap dark:text-white">{data.site.siteMetadata.title}</span>
                </a>
                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul
                        className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        {
                            me.header.map((item, key) => {

                                return <li key={key}>
                                    <a href={item.url}
                                       className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">{item.name}</a>
                                </li>
                            })
                        }
                    </ul>
                </div>
            </div>
        </nav>
    }
    }/>


}
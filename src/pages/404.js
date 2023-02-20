import * as React from "react"
import {Link} from "gatsby"

const pageStyles = {
    color: "#232129",
    padding: "96px",
    fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
    marginTop: 0,
    marginBottom: 64,
    maxWidth: 320,
}

const paragraphStyles = {
    marginBottom: 48,
}
const codeStyles = {
    color: "#8A6534",
    padding: 4,
    backgroundColor: "#FFF4DB",
    fontSize: "1.25rem",
    borderRadius: 4,
}

const NotFoundPage = () => {
    return (
        <main style={pageStyles}>
            <button
                className="px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                Primary
            </button>
        </main>
    )
}

export default NotFoundPage

export const Head = () => <title>Not found</title>

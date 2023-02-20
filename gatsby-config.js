module.exports = {
    siteMetadata: {
        title: `STDONE`,
        author:"wangenius"
    },
    plugins: [
        `gatsby-plugin-offline`,
        /** @Description 数据转换插件 */
        `gatsby-transformer-remark`,
        "gatsby-remark-images",
        "gatsby-transformer-sharp",
        `gatsby-plugin-sharp`,
        `gatsby-plugin-image`,
        `gatsby-plugin-netlify-cms`,
        `gatsby-plugin-postcss`,
        `gatsby-transformer-json`,
        {
            resolve: `gatsby-plugin-mdx`,
            options: {
                gatsbyRemarkPlugins: [
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 600,
                        },
                    },
                ],
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `mdx`,
                path: `${__dirname}/mdx`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `json`,
                path: `${__dirname}/json/`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `post`,
                path: `${__dirname}/post/`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `img`,
                path: `${__dirname}/static/`,
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                icon: `static/icon/icon.png`,
            },
        },
    ],
}
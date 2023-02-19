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
        `gatsby-plugin-netlify-cms`,
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
                name: `post`,
                path: `${__dirname}/post/`,
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                icon: `static/icon/asset.png`,
            },
        },
    ],
}
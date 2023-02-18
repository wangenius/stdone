module.exports = {
    siteMetadata: {
        title: `STDONE`,
    },
    plugins: [
        'gatsby-plugin-theme-ui',
        `gatsby-plugin-netlify-cms`,
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-image`,
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 800,
                        },
                    },
                ],
            },
        },
        {
            resolve: `gatsby-plugin-mdx`,
            options: {
                gatsbyRemarkPlugins: [
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 1200,
                        },
                    },
                ],
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
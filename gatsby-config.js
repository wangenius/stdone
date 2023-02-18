module.exports = {
    siteMetadata: {
        title: `STDONE`,
    },
    plugins: [
        'gatsby-plugin-theme-ui',
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-image`,
        `gatsby-plugin-offline`,

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
            resolve: 'gatsby-source-cosmicjs',
            options: {
                bucketSlug: "stdone-stdone",
                objectTypes: ['hellsies'],
                apiAccess: {
                    read_key: "rFLd1CU7qxundp06fFLFpeelXubWvtKLlszYnLy5fL5UsgbQLl"
                },
                limit: 1000,
                debug: false,
            }
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
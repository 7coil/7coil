module.exports = {
  pathPrefix: '/zhac/240/',
  siteMetadata: {
    title: 'Leondro Lio',
    description: 'Student and Developer',
    author: 'Leondro Lio',
    siteUrl: 'https://leondrolio.com',
    siteHeading: process.env.SITE_HEADING || 'leondrolio.com',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        includePaths: ['src/scss'],
        options: {
          implementation: require('sass')
        },
      },
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: ['.mdx', '.md'],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
            },
          },
        ],
        plugins: ['gatsby-remark-images'],
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-offline',
    'gatsby-plugin-netlify',
    'gatsby-plugin-catch-links',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: `${__dirname}/src/posts`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'components',
        path: `${__dirname}/src/components`,
      },
    },
  ],
}

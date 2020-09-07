import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import React from 'react'
import Layout from '../../components/Layout'
import SEO from '../../components/SEO'

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { mdx } = data // data.mdx holds our post data
  const { frontmatter, body } = mdx
  return (
    <Layout>
      <SEO
        title={frontmatter.title}
        description={frontmatter.description}
        image={frontmatter.image?.childImageSharp.fluid.src}
      />
      <MDXRenderer>{body}</MDXRenderer>
    </Layout>
  )
}
export const pageQuery = graphql`
  query($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      fields {
        slug
      }
      frontmatter {
        title
        description
        redirect
        links {
          key
          name
          link
        }
        image {
          childImageSharp {
            fluid {
              src
            }
          }
        }
      }
    }
  }
`

import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../../components/Layout'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import styles from './index.module.scss'
import SEO from '../../components/SEO'
import PaddingContainer from '../../components/PaddingContainer'

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { mdx } = data // data.mdx holds our post data
  const { frontmatter, fields, body } = mdx
  return (
    <Layout>
      <SEO
        title={frontmatter.title}
        description={frontmatter.description}
        image={
          frontmatter.image ? frontmatter.image.childImageSharp.fluid.src : null
        }
      />
      <PaddingContainer>
        <p>{fields.slug.replace(/\//g, ' / ')}</p>
        <h2>Links</h2>
        {frontmatter.links && (
          <ul>
            {frontmatter.links.map((link) => (
              <li key={link.key}>
                <a href={link.link}>{link.name}</a>
              </li>
            ))}
          </ul>
        )}
        <h1>{frontmatter.title}</h1>
        {frontmatter.redirect && (
          <>
            <p>
              This page has been redirected to:{' '}
              <Link to={frontmatter.redirect}>{frontmatter.redirect}</Link>
            </p>
          </>
        )}
        <div className={styles.content}>
          <MDXRenderer>{body}</MDXRenderer>
        </div>
      </PaddingContainer>
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

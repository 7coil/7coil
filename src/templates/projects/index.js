import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/Layout';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import styles from './index.module.scss';

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { mdx } = data // data.mdx holds our post data
  const { frontmatter, fields, body } = mdx
  return (
    <Layout>
      <p>{fields.slug.replace('/projects/', '/ Projects / ').replace(/\//g, ' / ')}</p>
      <h1>{frontmatter.title}</h1>
      <div className={styles.content}>
        <MDXRenderer>{body}</MDXRenderer>
      </div>
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
      }
    }
  }
`

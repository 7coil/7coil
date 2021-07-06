import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../../components/Layout'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import * as styles from './index.module.scss'
import SEO from '../../components/SEO'
import PaddingContainer from '../../components/PaddingContainer'
import { Jumbotron } from '../../components/Jumbotron'
import { ButtonRow } from '../../components/ButtonRow'
import { SiteButton } from '../../components/SiteNavigation'

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
      <Jumbotron>
        <PaddingContainer centre>
          <h1>{frontmatter.title}</h1>
          <p>{frontmatter.description}</p>
          <ButtonRow>
            {
              frontmatter.links.map(link => <SiteButton href={link.link} key={link.link}>{link.name}</SiteButton>)
            }
          </ButtonRow>
        </PaddingContainer>
      </Jumbotron>
      <PaddingContainer>
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

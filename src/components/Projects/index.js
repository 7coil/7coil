import { graphql, Link, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import React, { Component } from 'react'
import styles from './index.module.scss'

class Projects extends Component {
  render() {
    return (
      <StaticQuery
        query={graphql`
          query {
            allMdx(
              filter: {
                fields: { template: { in: ["projects", "apps"] } }
                frontmatter: { homepage: { eq: true } }
              }
              sort: { order: DESC, fields: [frontmatter___edited] }
            ) {
              edges {
                node {
                  fields {
                    template
                    slug
                  }
                  frontmatter {
                    title
                    description
                    redirect
                    features
                    edited
                    image {
                      childImageSharp {
                        fluid(
                          maxWidth: 500
                          maxHeight: 500
                          cropFocus: ENTROPY
                        ) {
                          ...GatsbyImageSharpFluid
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        `}
        render={(data) => (
          <div className={styles.cards}>
            {data.allMdx.edges
              .map((edge) => edge.node)
              .filter((page) => page.frontmatter.image) // Make sure pages have images
              .sort((a, b) => a.frontmatter.edited - b.frontmatter.edited)
              .map((page, index) => {
                const link = page.frontmatter.redirect || page.fields.slug
                return (
                  <div className={styles.card} key={index}>
                    {page.frontmatter.image && (
                      <Link to={link}>
                        <Img
                          className={styles.cardImage}
                          fluid={page.frontmatter.image.childImageSharp.fluid}
                        />
                      </Link>
                    )}
                    <div className={styles.cardContent}>
                      <Link to={link}>
                        <span className={styles.cardTitle}>
                          {page.frontmatter.title}
                        </span>
                      </Link>
                      <p className={styles.cardDescription}>
                        {page.frontmatter.description}
                      </p>
                    </div>
                  </div>
                )
              })}
          </div>
        )}
      />
    )
  }
}

export { Projects }

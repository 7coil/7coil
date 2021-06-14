import { graphql, Link, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import React, { Component } from 'react'
import * as styles from './index.module.scss'

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
                  <Link to={link} className={styles.link}>
                    <div className={styles.card} key={index}>
                      <div className={styles.imgContainer}>
                        {page.frontmatter.image && (
                          <Img
                            className={styles.cardImage}
                            fluid={page.frontmatter.image.childImageSharp.fluid}
                          />
                        )}
                        <div className={styles.fade} />
                      </div>
                      <div className={styles.cardContent}>
                        <span className={styles.cardTitle}>
                          {page.frontmatter.title}
                        </span>
                        <p className={styles.cardDescription}>
                          {page.frontmatter.description}
                        </p>
                      </div>
                    </div>
                  </Link>
                )
              })}
          </div>
        )}
      />
    )
  }
}

export { Projects }

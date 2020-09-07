import { graphql, StaticQuery } from 'gatsby'
import React, { Component } from 'react'
import styles from './index.module.scss'

class Experiences extends Component {
  render() {
    return (
      <StaticQuery
        query={graphql`
          query {
            allMdx(
              filter: {
                fields: { template: { in: ["experiences"] } }
                frontmatter: { homepage: { eq: true } }
              }
            ) {
              edges {
                node {
                  fields {
                    slug
                  }
                  frontmatter {
                    title
                    description
                    period
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
              .map((page, index) => {
                return (
                  <div className={styles.card} key={index}>
                    <div className={styles.cardHeading}>
                      <span className={styles.cardTitle}>
                        {page.frontmatter.title}
                      </span>
                      <span>{page.frontmatter.period}</span>
                    </div>
                    <p className={styles.cardDescription}>
                      {page.frontmatter.description}
                    </p>
                  </div>
                )
              })}
          </div>
        )}
      />
    )
  }
}

export { Experiences }

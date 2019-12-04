import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/Layout"
import styles from './index.module.scss';
import Img from 'gatsby-image';

const IndexPage = ({ data }) => (
  <Layout>
    <h1>Projects</h1>
    <div className={styles.cards}>
      {data.allMdx.edges.map((edge) => {
        const page = edge.node;
        return (
          <div className={styles.card} key={page.fields.slug}>
            <h3 className={styles.title}>{page.frontmatter.title}</h3>
            <p className={styles.description}>{page.frontmatter.description}</p>
            <p className={styles.created}>
              <span>Created {page.frontmatter.date}</span>
            </p>
            <Img fluid={page.frontmatter.image.childImageSharp.fluid} />
            <p className={styles.links}>
              {
                page.frontmatter.links
                  .map(({ link, name, key }) => {
                    return (
                      <a key={key} href={link}>{name}</a>
                    )
                  })
              }
              {page.frontmatter.link && <a href={page.frontmatter.link}>Visit &gt;</a>}
              <Link to={page.fields.slug}>Project Page</Link>
            </p>
          </div>
        )
      })}
    </div>
  </Layout>
)

export const query = graphql`
  query homepageProjects {
    allMdx(
      filter: {
        fields: {
          template: {
            eq: "projects"
          }
        }
      },
      sort: {
        order: DESC,
        fields: [frontmatter___date]
      }
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
            date(formatString: "Do MMMM YYYY")
            links {
              name
              link
              key
            }
            image {
              childImageSharp {
                fluid(maxWidth: 800, maxHeight: 300, cropFocus: ENTROPY) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`

export default IndexPage

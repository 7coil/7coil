import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/Layout"
import styles from './index.module.scss';
import Img from 'gatsby-image';
import PaddingContainer from "../components/PaddingContainer";

const IndexPage = ({ data }) => (
  <Layout>
    <div className={styles.videoContainerContainer}>
      <div className={styles.videoContainer}>
        <div className={styles.content}>
          <h1>leondrolio.com</h1>
          <p>Random Programming Adventures</p>
        </div>
        <iframe
          src="https://www.youtube.com/embed/OKb0agtT-Fk?autoplay=1&amp;mute=1&amp;controls=0&amp;disablekb=1&amp;modestbranding=1&amp;loop=1&amp;playlist=OKb0agtT-Fk"
          frameborder="0"
          className={styles.video}
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen />
      </div>
    </div>
    <PaddingContainer>
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
    </PaddingContainer>
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

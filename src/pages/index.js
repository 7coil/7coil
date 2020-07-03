import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/Layout"
import styles from './index.module.scss';
import Img from 'gatsby-image';
import PaddingContainer from "../components/PaddingContainer";
import Header from "../components/Header";

const IndexPage = ({ data }) => (
  <Layout noHeader={true}>
    <div className={styles.videoContainer}>
      <div className={styles.videoContentContainer}>
        <Header />
        <div className={styles.content}>
          <span className={styles.pageTitle}>Leondro Lio</span>
          {/* <p>Random Programming Adventures</p> */}
        </div>
      </div>
      <iframe
        src="https://www.youtube.com/embed/OKb0agtT-Fk?autoplay=1&amp;mute=1&amp;controls=0&amp;disablekb=1&amp;modestbranding=1&amp;loop=1&amp;playlist=OKb0agtT-Fk"
        frameBorder="0"
        className={styles.video}
        title="Home Page Background"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen />
    </div>
    <PaddingContainer>
      <h1>Projects</h1>
      <div className={styles.cards}>
        {
          data.allMdx.edges
            .map(edge => edge.node)
            .filter(page => page.frontmatter.image) // Make sure pages have images
            .map((page, index) => {
              const link = page.frontmatter.redirect || page.fields.slug
              return (
                <Link to={link} key={index}>
                  <div className={styles.card}>
                    {
                      page.frontmatter.image &&
                      <Img className={styles.cardImage} fluid={page.frontmatter.image.childImageSharp.fluid} />
                    }
                    <div className={styles.cardContent}>
                      <span className={styles.cardTitle}>{page.frontmatter.title}</span>
                    </div>
                  </div>
                </Link>
              )
            })
        }
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
            in: ["projects", "apps"]
          }
        }
        frontmatter: {
          homepage: {
            eq: true
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
            redirect
            image {
              childImageSharp {
                fluid(maxWidth: 800, maxHeight: 500, cropFocus: ENTROPY) {
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

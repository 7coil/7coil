import React from 'react';
import styles from './index.module.scss';
import CombineStyles from '../../helpers/CombineStyles';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import PaddingContainer from '../PaddingContainer';
import SocialMediaHandles from '../SocialMediaHandles';

const WelcomeWheel = ({ children, className = '' }) => (
  <div className={CombineStyles(styles.welcomeWheelScreen, className)}>
    <StaticQuery
      query={graphql`
        query {
          file(relativePath: { eq: "WelcomeWheel/background.jpeg" }) {
            childImageSharp {
              fluid(maxWidth: 2160) {
                ...GatsbyImageSharpFluid
                ...GatsbyImageSharpFluidLimitPresentationSize
              }
            }
          }
          site {
            siteMetadata {
              title
              description
            }
          }
        }
      `}
      render={(data) => {
        console.log(data)
        return (
          <>
            <Img fluid={data.file.childImageSharp.fluid} className={styles.image} />
            <PaddingContainer className={styles.container}>
              <div className={styles.jumbotron}>
                <div>
                  <span className={styles.pageTitle}>{data.site.siteMetadata.title}</span>
                  <span className={styles.pageSubtitle}>{data.site.siteMetadata.description}</span>
                </div>
                <div>
                  <SocialMediaHandles />
                </div>
              </div>
              <p>
                I am a full stack developer with a passion in ReactJS.

                Seeing how people use and react to my projects encourages me to make better work,
                and make my projects open source for the community to use.
              </p>
            </PaddingContainer>
          </>
        )
      }}
    />
  </div>
)

export {
  WelcomeWheel
};

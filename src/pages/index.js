import React from "react";
import Layout from "../components/Layout";
import PaddingContainer from "../components/PaddingContainer";
import styles from './index.module.scss';
import { Projects } from "../components/Projects";
import { Experiences } from "../components/Experiences";
import SocialMediaHandles from "../components/SocialMediaHandles";

const IndexPage = ({ data }) => (
  <Layout>
    <PaddingContainer className={styles.jumbotron}>
      <div>
        <span className={styles.pageTitle}>{data.site.siteMetadata.title}</span>
        <span className={styles.pageSubtitle}>{data.site.siteMetadata.description}</span>
      </div>
      <div>
        <SocialMediaHandles />
      </div>
    </PaddingContainer>
    <PaddingContainer>
      <p>
        I am a full stack developer with a passion in ReactJS.

        Seeing how people use and react to my projects encourages me to make better work,
        and make my projects open source for the community to use.
      </p>

      <h1>My Experiences</h1>
      <Experiences />

      <h1>My Projects</h1>
      <Projects />
    </PaddingContainer>
  </Layout>
)

export const query = graphql`
query {
  site {
    siteMetadata {
      title
      description
    }
  }
}
`

export default IndexPage

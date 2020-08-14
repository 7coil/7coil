import React from "react";
import Layout from "../components/Layout";
import PaddingContainer from "../components/PaddingContainer";
import styles from './index.module.scss';
import { Projects } from "../components/Projects";
import { Experiences } from "../components/Experiences";
import { WelcomeWheel } from '../components/WelcomeWheel';
import SocialMediaHandles from "../components/SocialMediaHandles";

const IndexPage = ({ data }) => (
  <Layout>
    <WelcomeWheel />
    <PaddingContainer>
      
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

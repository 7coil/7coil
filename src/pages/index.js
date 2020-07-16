import React from "react";
import Layout from "../components/Layout";
import PaddingContainer from "../components/PaddingContainer";
import styles from './index.module.scss';
import { FaTwitter, FaEnvelope, FaGithub } from 'react-icons/fa'
import { Projects } from "../components/Projects";
import { Experiences } from "../components/Experiences";

const IndexPage = ({ data }) => (
  <Layout>
    <PaddingContainer className={styles.jumbotron}>
      <div>
        <span className={styles.pageTitle}>{data.site.siteMetadata.title}</span>
        <span className={styles.pageSubtitle}>{data.site.siteMetadata.description}</span>
      </div>
      <div>
        <table>
          <tbody>
            <tr>
              <td>
                <FaGithub />
              </td>
              <td>
                <a target="_blank" rel="noreferrer" href="https://github.com/7coil">
                  7coil
              </a>
              </td>
            </tr>
            <tr>
              <td>
                <FaTwitter />
              </td>
              <td>
                <a target="_blank" rel="noreferrer" href="https://twitter.com/sevencoil">
                  sevencoil
              </a>
              </td>
            </tr>
            <tr>
              <td>
                <FaEnvelope />
              </td>
              <td>
                <a href="mailto:leondrolio@leondrolio.com">
                  leondrolio@leondrolio.com
              </a>
              </td>
            </tr>
          </tbody>
        </table>
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

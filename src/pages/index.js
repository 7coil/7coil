import { graphql } from 'gatsby'
import React from 'react'
import { Experiences } from '../components/Experiences'
import Layout from '../components/Layout'
import PaddingContainer from '../components/PaddingContainer'
import { Projects } from '../components/Projects'
import { WelcomeWheel } from '../components/WelcomeWheel'

const IndexPage = ({ data }) => (
  <Layout noHeader={true}>
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

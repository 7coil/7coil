import { graphql } from 'gatsby'
import React from 'react'
import Layout from '../components/Layout'
import PaddingContainer from '../components/PaddingContainer'
import { Projects } from '../components/Projects'
import { Jumbotron } from '../components/Jumbotron'
import { SocialMediaHandles } from '../components/SocialMediaHandles'

const IndexPage = ({ data }) => (
  <Layout>
    <Jumbotron>
      <PaddingContainer centre>
        <h1 style={{fontSize: '4em'}}>Leondro Lio</h1>
        <SocialMediaHandles />
      </PaddingContainer>
    </Jumbotron>
    <PaddingContainer>
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

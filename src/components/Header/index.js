import React from 'react'
import * as styles from './index.module.scss'
import PaddingContainer from '../PaddingContainer'
import { graphql, Link, StaticQuery } from 'gatsby'
import CombineStyles from '../../helpers/CombineStyles'

const Header = ({ className }) => (
  <header className={CombineStyles(styles.header, className)}>
    <PaddingContainer>
      <Link to="/">
        <StaticQuery
          query={graphql`
            query {
              site {
                siteMetadata {
                  siteHeading
                }
              }
            }
          `}
          render={(data) => (
            <span className={styles.title}>
              {data.site.siteMetadata.siteHeading}
            </span>
          )}
        />
      </Link>
    </PaddingContainer>
  </header>
)

export default Header

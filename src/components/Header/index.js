import React from 'react'
import { content, rainbow, edge } from './index.module.scss'
import PaddingContainer from '../PaddingContainer'
import { graphql, Link, StaticQuery } from 'gatsby'
import CombineStyles from '../../helpers/CombineStyles'

const Header = ({ className }) => (
  <header>
    <div className={rainbow} />
    <div className={content}>
      <PaddingContainer>
        <Link to="/">
          <b>leondrolio.com</b>
        </Link>
      </PaddingContainer>
    </div>
    <div className={edge} />
  </header>
)

export default Header

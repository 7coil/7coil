import { Link } from 'gatsby'
import React from 'react'
import PaddingContainer from '../PaddingContainer'
import { content, edge, rainbow } from './index.module.scss'

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

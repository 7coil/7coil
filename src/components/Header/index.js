import React from 'react'
import styles from './index.module.scss'
import PaddingContainer from '../PaddingContainer'
import { Link } from 'gatsby'
import CombineStyles from '../../helpers/CombineStyles'

const Header = ({ className }) => (
  <header className={CombineStyles(styles.header, className)}>
    <PaddingContainer>
      <Link to="/">
        <span className={styles.title}>leondrolio.com</span>
      </Link>
    </PaddingContainer>
  </header>
)

export default Header

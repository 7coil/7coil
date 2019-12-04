import React from 'react';
import styles from './index.module.scss';
import PaddingContainer from '../PaddingContainer';
import { Link } from 'gatsby';

const Header = () => (
  <header className={styles.header}>
    <PaddingContainer>
      <h1><Link to="/">leondrolio.com</Link></h1>
    </PaddingContainer>
  </header>
);

export default Header;

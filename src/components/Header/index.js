import React from 'react';
import styles from './index.module.scss';
import PaddingContainer from '../PaddingContainer';
import { Link } from 'gatsby';

const Header = () => (
  <header className={styles.header}>
    <PaddingContainer>
      <Link to="/">
        <span className={styles.title}>leondrolio.com</span>
      </Link>
    </PaddingContainer>
  </header>
);

export default Header;

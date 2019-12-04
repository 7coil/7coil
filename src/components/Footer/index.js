import React from 'react';
import PaddingContainer from '../PaddingContainer';
import styles from './index.module.scss';

const Footer = () => (
  <footer className={styles.footer}>
    <PaddingContainer>
      <i>Copyright Leondro Lio, Assets 2015 - 2019</i>
      <div className={styles.links}>
        <a href="https://github.com/7coil">GitHub</a>
      </div>
    </PaddingContainer>
  </footer>
)

export default Footer;

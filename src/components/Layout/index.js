import React, { Component } from 'react';
import Header from '../Header';
import styles from './index.module.scss';
import PaddingContainer from '../PaddingContainer';
import Footer from '../Footer';
import DefaultSEO from '../DefaultSEO';

class Layout extends Component {
  render() {
    return (
      <div className={styles.body}>
        <DefaultSEO />
        <Header />
        <main className={styles.main}>
          {this.props.children}
        </main>
        <Footer />
      </div>
    )
  }
}

export default Layout;

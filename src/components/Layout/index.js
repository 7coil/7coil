import React, { Component } from 'react';
import Header from '../Header';
import styles from './index.module.scss';
import PaddingContainer from '../PaddingContainer';
import Footer from '../Footer';

class Layout extends Component {
  render() {
    return (
      <div className={styles.body}>
        <Header />
        <main className={styles.main}>
          <PaddingContainer>
            {this.props.children}
          </PaddingContainer>
        </main>
        <Footer />
      </div>
    )
  }
}

export default Layout;

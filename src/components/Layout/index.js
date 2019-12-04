import React, { Component } from 'react';
import Header from '../Header';

class Layout extends Component {
  render() {
    return (
      <div>
        <Header />
        {this.props.children}
        <footer>
          <hr />
          <i>Copyright Leondro Lio, Assets 2015 - 2019</i>
        </footer>
      </div>
    )
  }
}

export default Layout;

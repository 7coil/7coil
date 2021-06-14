import { graphql, StaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';
import CombineStyles from '../../helpers/CombineStyles';
import * as styles from './index.module.scss';

const Jumbotron = ({ children }) => (
  <div className={styles.jumbotron}>
    {children}
  </div>
)

export {
  Jumbotron
};

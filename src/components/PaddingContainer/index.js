import React from 'react';
import styles from './index.module.scss';
import CombineStyles from '../../helpers/CombineStyles';

const PaddingContainer = ({ children, className = '' }) => (
  <div className={CombineStyles(styles.paddingContainer, className)}>
    {children}
  </div>
)

export default PaddingContainer;

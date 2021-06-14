import React from 'react'
import * as styles from './index.module.scss'
import CombineStyles from '../../helpers/CombineStyles'

const PaddingContainer = ({ children, className = '', centre }) => (
  <div className={CombineStyles(styles.paddingContainer, centre && styles.centre, className)}>
    {children}
  </div>
)

export default PaddingContainer

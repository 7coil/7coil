import { Link } from "gatsby";
import React from "react";
import * as styles from './index.module.scss';

const SiteNavigation = ({ onClick, href, to, type, children }) => {
  let className;

  if (type === 'link') {
    className = styles.link
  } else if (type === 'button') {
    className = styles.button
  }

  if (onClick) {
    return <button className={className} onClick={onClick}>{children}</button>
  } else if (href) {
    return <a className={className} href={href}>{children}</a>
  } else if (to) {
    return <Link className={className} to={to}>{children}</Link>
  } else {
    return null;
  }
}

const SiteButton = (props) => <SiteNavigation {...props} type="button" />
const SiteLink = (props) => <SiteNavigation {...props} type="link" />

export {
  SiteNavigation,
  SiteButton,
  SiteLink
}

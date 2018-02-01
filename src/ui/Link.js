import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'glamor';

const a = css({
  textDecoration: 'none',
  ':hover, :focus': {
    color: '#408aa1',
    textDecoration: 'none',
  },
});

export default function Link({ children, href, tab, icon }) {
  const target = tab ? '_blank' : undefined;

  return <a {...a} className={icon} href={href} target={target}>{children}</a>;
}

Link.propTypes = {
  children: PropTypes.node,
  href: PropTypes.string.isRequired,
  icon: PropTypes.string,
  tab: PropTypes.bool,
};

Link.defaultProps = {
  tab: false,
  icon: undefined,
  children: undefined,
};

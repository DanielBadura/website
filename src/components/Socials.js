import React, { Component } from 'react';
import { css } from 'glamor';
import Link from '../ui/Link';
import '../css/icons.css';

const container = css({
  listStyle: 'none',
  display: 'flex',
  padding: 0,
  '> li': {
    fontSize: 40,
    alignSelf: 'center',
    textAlign: 'center',
    display: 'flex',
    marginTop: 30,
    marginBottom: 30,
    marginLeft: 15,
    marginRight: 15,
    '> a:hover, a:focus': {
      textDecoration: 'none',
    },
    ' a': {
      padding: 0,
      height: 0,
    },
  },
});

export default class Socials extends Component {
  render() {
    return (
      <ul {...container}>
        <li><Link icon="icon-xing-squared" tab href="https://www.xing.com/profile/Daniel_Badura2" /></li>
        <li><Link icon="icon-twitter-squared" tab href="https://twitter.com/DanielBadura" /></li>
        <li><Link icon="icon-github-squared" tab href="https://github.com/DanielBadura" /></li>
      </ul>
    );
  }
}

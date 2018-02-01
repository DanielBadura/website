import React, { Component } from 'react';
import { css } from 'glamor';
import Link from '../ui/Link';

const container = css({
  background: '#18171b',
  minHeight: 95,
  marginTop: 30,
  ' p': {
    textAlign: 'center',
    fontSize: 10,
  },
});

const list = css({
  listStyle: 'none',
  display: 'flex',
  padding: 0,
  margin: '0px 30px',
  '> li': {
    alignSelf: 'center',
    textAlign: 'center',
    display: 'flex',
    marginTop: 30,
    marginBottom: 0,
    paddingLeft: 30,
    paddingRight: 30,
    ' a': {
      color: '#61dafb',
    },
  },
});

const p = css({
  color: 'rgba(97, 218, 251, 0.6)',
  marginBottom: 0,
  paddingBottom: 10,
});

export default class Footer extends Component {
  render() {
    return (
      <footer {...container}>
        <div className="container">
          <div className="row">
            <ul {...list} className="col">
              <li><Link icon="icon-xing-squared" tab href="https://www.xing.com/profile/Daniel_Badura2" /></li>
              <li><Link icon="icon-twitter-squared" tab href="https://twitter.com/DanielBadura" /></li>
              <li><Link icon="icon-github-squared" tab href="https://github.com/DanielBadura" /></li>
              <li><Link tab href="https://github.com/DanielBadura">Impressum</Link></li>
            </ul>
          </div>
          <div className="row">
            <p {...p} className="col">
              Copyright {(new Date()).getFullYear()} &copy;
            </p>
          </div>
        </div>
      </footer>
    );
  }
}

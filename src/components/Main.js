import React, { Component } from 'react';
import { css } from 'glamor';
import Skills from './Skills';
import Link from '../ui/Link';
import me from '../img/me.jpg';
import Socials from './Socials';

const container = css({
  minHeight: 620,
  marginTop: 50,
  ' a': {
    color: '#61dafb',
  },
  ' a:hover, a:focus': {
    color: '#408aa1',
    textDecoration: 'none',
  },
});

const imageContainer = css({
  padding: 0,
  ' img': {
    display: 'block',
    width: '80%',
    margin: 'auto',
  },
});

const h3 = css({
  fontSize: '1.75rem',
});

export default class Main extends Component {
  render() {
    return (
      <main className="container" {...container}>
        <div className="row">
          <div className="col" {...imageContainer}>
            <img src={me} alt="Me" />
          </div>
          <div className="col">
            <h1>Daniel Badura</h1>
            <h2 {...h3}>Software Entwickler</h2>
            <h3><Link href="https://www.pro-volution.de/" tab>pro.volution GmbH</Link></h3>
            <Socials />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <Skills />
          </div>
        </div>
      </main>
    );
  }
}

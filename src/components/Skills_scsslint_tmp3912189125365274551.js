import React, { Component } from 'react';
import { css } from 'glamor';
import Link from '../ui/Link';
import symfony from '../img/symfony.svg';
import react from '../img/react.svg';
import redux from '../img/redux.svg';
import php from '../img/php.svg';
import webpack from '../img/webpack.svg';
import git from '../img/git.svg';

const container = css({
  flexFlow: 'row wrap'
  marginTop: 30,
  marginLeft: 30,
  marginRight: 30,
  listStyle: 'none',
  display: 'flex',
  padding: 0,
  '> li': {
    alignSelf: 'center',
    textAlign: 'center',
    display: 'flex',
    marginTop: 30,
    marginBottom: 30,
    paddingLeft: 30,
    paddingRight: 30,
  },
});

const img = css({
  maxHeight: 60,
  width: 60,
});

export default class Skills extends Component {
  render() {
    return (
      <ul {...container}>
        <li><Link tab href="https://php.net"><img src={php} alt="Php" {...img} /></Link></li>
        <li><Link tab href="https://symfony.com"><img src={symfony} alt="Symfony" {...img} /></Link></li>
        <li><Link tab href="https://reactjs.org"><img src={react} alt="React" {...img} /></Link></li>
        <li><Link tab href="https://redux.js.org"><img src={redux} alt="Redux" {...img} /></Link></li>
        <li><Link tab href="https://webpack.js.org"><img src={webpack} alt="Webpack" {...img} /></Link></li>
        <li><Link tab href="https://git-scm.com"><img src={git} alt="Git" {...img} /></Link></li>
        <li><Link tab href="https://git-scm.com"><img src={git} alt="Git" {...img} /></Link></li>
        <li><Link tab href="https://git-scm.com"><img src={git} alt="Git" {...img} /></Link></li>
        <li><Link tab href="https://git-scm.com"><img src={git} alt="Git" {...img} /></Link></li>
        <li><Link tab href="https://git-scm.com"><img src={git} alt="Git" {...img} /></Link></li>
        <li><Link tab href="https://git-scm.com"><img src={git} alt="Git" {...img} /></Link></li>
        <li><Link tab href="https://git-scm.com"><img src={git} alt="Git" {...img} /></Link></li>
        <li><Link tab href="https://git-scm.com"><img src={git} alt="Git" {...img} /></Link></li>
        <li><Link tab href="https://git-scm.com"><img src={git} alt="Git" {...img} /></Link></li>
        <li><Link tab href="https://git-scm.com"><img src={git} alt="Git" {...img} /></Link></li>
        <li><Link tab href="https://git-scm.com"><img src={git} alt="Git" {...img} /></Link></li>
        <li><Link tab href="https://git-scm.com"><img src={git} alt="Git" {...img} /></Link></li>
        <li><Link tab href="https://git-scm.com"><img src={git} alt="Git" {...img} /></Link></li>
        <li><Link tab href="https://git-scm.com"><img src={git} alt="Git" {...img} /></Link></li>
        <li><Link tab href="https://git-scm.com"><img src={git} alt="Git" {...img} /></Link></li>
        <li><Link tab href="https://git-scm.com"><img src={git} alt="Git" {...img} /></Link></li>
        <li><Link tab href="https://git-scm.com"><img src={git} alt="Git" {...img} /></Link></li>
        <li><Link tab href="https://git-scm.com"><img src={git} alt="Git" {...img} /></Link></li>
        <li><Link tab href="https://git-scm.com"><img src={git} alt="Git" {...img} /></Link></li>
      </ul>
    );
  }
}

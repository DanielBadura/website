import React, { PureComponent } from 'react';
import { css } from 'glamor';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import background from './img/background.png';
import './css/bootstrap.min.css';

const bg = css({
  background: 'url(' + background + ')',
  color: '#61dafb',
});

class App extends PureComponent {
  render() {
    return (
      <div {...bg}>
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;

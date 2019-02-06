import React, { Component } from 'react';
import './index.scss';

// import Header from '../Header';
import Sider from '../Sider';
import Footer from '../Footer';

export default class Layout extends Component {
  render() {
    const {children} = this.props;
    return (
      <div className="Layout__container">
        {/* <Header /> */}
        <div className="Layout__content">
          <Sider />
          {children}
        </div>
        <Footer />
      </div>
    );
  }
};

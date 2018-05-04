import React from 'react';
import './index.less';

class Menu extends React.Component {
  static Item({ children }) {
    return (
      <li>{children}</li>
    );
  }
  render() {
    const { children, mode } = this.props;
    console.log(mode);
    return (
      <ul className={ `menu ${mode}` } style={{ flexDirection: mode }}>
        {children}
      </ul>
    );
  }
}

export default Menu;

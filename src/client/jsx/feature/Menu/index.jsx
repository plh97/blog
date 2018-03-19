import React from 'react';
import './index.less';

class Menu extends React.Component {
  static Item({ children }) {
    return (
      <li>
        {children}
      </li>
    );
  }
  render() {
    const { children, mode } = this.props;
    return (
      <ul className="menu" style={{ flexDirection: mode }}>
        {children}
      </ul>
    );
  }
}

export default Menu;

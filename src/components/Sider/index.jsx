import React, { Component } from 'react';
import './index.scss';
import { NavLink } from "react-router-dom";

export default class Sider extends Component {
  render() {
    return (
      <div className="Sider__container">
        <div className="Sider__nav">
          <NavLink exact to="/" className="Sider__nav-item">
            {/* <Link to="/"> */}
            <i className="icon icon-dashboard" />
            主页
            {/* </Link> */}
          </NavLink>
          <NavLink to="/atcicle" className="Sider__nav-item">
            {/* <Link to="/atcicle"> */}
            <i className="icon icon-sitemap" />
            文章
            {/* </div> */}
          </NavLink>
          <NavLink to="/component" className="Sider__nav-item">
            {/* <Link to="/component"> */}
            <i className="icon icon-boat" />
            UI组件
            {/* </div> */}
          </NavLink>
          <NavLink to="/project" className="Sider__nav-item">
            {/* <Link to="/project"> */}
            <i className="icon icon-life-bouy" />
            项目
            {/* </div> */}
          </NavLink>
        </div>

        <div className="Sider__history">
          <h3 className="Sider__history-title">友链</h3>
          <ul className="Sider__history-content">
            <li>
              <a href="void(0)">2e23e2e03/Acceptance_test</a>
            </li>
            <li>
              <a href="void(0)">2e23e2e03/Acceptance_test</a>
            </li>
            <li>
              <a href="void(0)">2e23e2e03/Acceptance_test</a>
            </li>
            <li>
              <a href="void(0)">2e23e2e03/Acceptance_test</a>
            </li>
            <li>
              <a href="void(0)">2e23e2e03/Acceptance_test</a>
            </li>
            <li>
              <a href="void(0)">2e23e2e03/Acceptance_test</a>
            </li>
            <li>
              <a href="void(0)">2e23e2e03/Acceptance_test</a>
            </li>
            <li>
              <a href="void(0)">2e23e2e03/Acceptance_test</a>
            </li>
            <li>
              <a href="void(0)">2e23e2e03/Acceptance_test</a>
            </li>
            <li>
              <a href="void(0)">2e23e2e03/Acceptance_test</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
};


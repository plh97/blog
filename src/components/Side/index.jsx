import React from "react";
import "./index.scss";
import { NavLink } from "react-router-dom";

function Side(props) {
  return (
    <div className="Side__container">
      <div className="Side__nav">
        <NavLink exact to="/" className="Side__nav-item">
          <i className="icon icon-dashboard" />
          主页
        </NavLink>
        <NavLink to="/article" className="Side__nav-item">
          <i className="icon icon-sitemap" />
          文章
        </NavLink>
        <NavLink to="/component" className="Side__nav-item">
          <i className="icon icon-boat" />
          UI组件
        </NavLink>
        <NavLink to="/project" className="Side__nav-item">
          <i className="icon icon-boat" />
          项目
        </NavLink>
      </div>
      <div className="Side__history">
        <h3 className="Side__history-title">友链</h3>
        <ul className="Side__history-content">
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

export default Side;

import React from "react";
import "./index.scss";
import routes from "@/routes";

import SideItem from "./SideItem";

export default function Side() {
  return (
    <div className="Side__container">
      <div className="Side__nav">
        {routes
          .filter((route) => route.content)
          .map((route) => (
            <SideItem
              icon={route.icon}
              key={route.path}
              className="Side__nav-item"
              path={route.path ?? ""}
            >
              {route.content}
            </SideItem>
          ))}
      </div>
      {/* <div className="Side__history">
				<h3 className="Side__history-title">友链</h3>
				<ul className="Side__history-content">
					{[...new Array(10)].map((e, i) => (
						<li key={i}>
							<a href="void(0)">2e23e2e03/Acceptance_test</a>
						</li>
					))}
				</ul>
			</div> */}
    </div>
  );
}

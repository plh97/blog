import React from "react";
import Link from "next/link";

// import routes from '@/routes'
import "./index.scss";
import dynamic from "next/dynamic";
import routes from "@/routes";

// const DynamicComponent = dynamic(() => import("@/app/"));

export default function Side() {
  return (
    <div className="Side__container">
      <div className="Side__nav">
        {routes
          .filter((route) => route.content)
          .map((route) => (
            <Link
              key={route.path}
              // exact={route.exact}
              href={route.path ?? ''}
              className="Side__nav-item"
            >
              <i className="icon icon-dashboard" />
              {route.content}
            </Link>
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

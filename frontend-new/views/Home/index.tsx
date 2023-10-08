import React, { Component, lazy } from "react";
import _ from "lodash";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
// const _ = lazy(() => import('lodash'))

// local
import "./index.scss";
import Viewer from "@/components/Viewer";
const ReactMarkdown = lazy(() => import("react-markdown"));

export default function HomePage({ user, homePage }) {
  return (
    <div className="HomePage">
      <Viewer title="主页" data={user} />
      <ReactMarkdown
        className="markdown-body HomePage-markdown__body"
        source={homePage}
      />
    </div>
  );
}

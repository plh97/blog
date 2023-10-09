import React, { Component, lazy } from "react";
import _ from "lodash";

import "./index.scss";
import Viewer from "@/components/Viewer";
import { IViewer } from "@/apis/user";
const ReactMarkdown = lazy(() => import("react-markdown"));

interface IProps {
  user: IViewer;
  homePage: string;
}

export default function HomePage({ user, homePage }: IProps) {
  return (
    <div className="HomePage">
      <Viewer title="主页" data={user} />
      <ReactMarkdown className="markdown-body HomePage-markdown__body">
        {homePage}
      </ReactMarkdown>
    </div>
  );
}

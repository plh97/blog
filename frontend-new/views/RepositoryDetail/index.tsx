// package
import _ from "lodash";
import React, { Component } from "react";
import ReactMarkdown from "react-markdown";
import "./index.scss";
import Viewer from "@/components/Viewer";

export default function RepositoryDetail({
  user,
  repositoryText,
  nameWithOwner,
}) {
  return (
    <div className="DetailPage">
      <Viewer title={nameWithOwner} data={user} />
      <div className="DetailPage__content">
        <ReactMarkdown className="markdown-body" source={repositoryText} />
      </div>
    </div>
  );
}

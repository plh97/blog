// package
import _ from "lodash";
import React, { Component } from "react";
import ReactMarkdown from "react-markdown";
import "./index.scss";
import Viewer from "@/components/Viewer";
import { IViewer } from "@/apis/user";

interface IProps {
  user: IViewer;
	nameWithOwner: string;
  repositoryText: string;
}

export default function RepositoryDetail({
  user,
  repositoryText,
  nameWithOwner,
}: IProps) {
  return (
    <div className="DetailPage">
      <Viewer title={nameWithOwner} data={user} />
      <div className="DetailPage__content">
        <ReactMarkdown className="markdown-body" >
					{repositoryText}
				</ReactMarkdown>
      </div>
    </div>
  );
}

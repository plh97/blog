// package
import _ from "lodash";
import React, { Component } from "react";
import ReactMarkdown from "react-markdown";
import "./index.scss";
import Viewer from "@/components/Viewer";
import { IViewer, fetchUser } from "@/apis/user";
import { fetchRepositoryDetail } from "@/apis/repository";
import { PageProps } from "@/.next/types/app/repository/[id]/page";

export default async function RepositoryDetail({params}: PageProps) {
  const userRes = await fetchUser();
  const repositoryRes = await fetchRepositoryDetail(decodeURIComponent(params.id));
  const repositoryText = _.get(
    repositoryRes,
    'data.search.edges[0].node.object.text',
    ''
  )
  const nameWithOwner = _.get(
    repositoryRes,
    'data.search.edges[0].node.nameWithOwner',
    ''
  )
  return (
    <div className="DetailPage">
      <Viewer title={nameWithOwner} data={userRes.data.viewer} />
      <div className="DetailPage__content">
        <ReactMarkdown className="markdown-body" >
					{repositoryText}
				</ReactMarkdown>
      </div>
    </div>
  );
}

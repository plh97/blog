import React from "react";
import _ from "lodash";
import Viewer from "@/components/Viewer";
import { fetchUser } from "@/apis/user";
import { fetchRepositoryList } from "@/apis/repository";
import RepositoryItem from "./RepositoryItem";

import "./index.scss";

export const metadata = {
  title: "Repository List Page",
  description: "Repository List Page | can view all repositories here",
};

export default async function RepositoryPage() {
  const userRes = await fetchUser();
  const repositoryRes = await fetchRepositoryList();
  const repository: any[] = _.get(
    repositoryRes,
    "data.repositoryOwner.repositories.edges",
    []
  );
  return (
    <div className="RepositoryPage">
      <Viewer title="前端组件" data={userRes.data.viewer} />
      <div className="RepositoryPage__content">
        {repository.map(({ node }) => (
          <RepositoryItem key={node.nameWithOwner} node={node} />
        ))}
      </div>
    </div>
  );
}

import _ from "lodash";
import React from "react";
import styls from "./index.module.scss";

import { fetchUser } from "@/apis/user";
import Viewer from "@/components/Viewer";

import Markdown from "@/components/Markdown";
import { fetchRepositoryDetail } from "@/apis/repository";

export const metadata = {
  title: "About Me",
  description: "This Page is About Me",
};

export default async function About() {
  const userRes = await fetchUser();
  const repositoryRes = await fetchRepositoryDetail({
    repo: "plh97/plh97",
    branch: "main"
  });
  const repositoryText = _.get(
    repositoryRes,
    "data.search.edges[0].node.object.text",
    ""
  );
  const nameWithOwner = _.get(
    repositoryRes,
    "data.search.edges[0].node.nameWithOwner",
    ""
  );
  return (
    <div className={styls.page}>
      <Viewer title={nameWithOwner} data={userRes.data.viewer} />
      <div className="DetailPage__content">
        <Markdown>{repositoryText}</Markdown>
      </div>
    </div>
  );
}

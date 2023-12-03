import _ from "lodash";
import React from "react";

import { fetchUser } from "@/apis/user";
import Viewer from "@/components/Viewer";

import Markdown from "@/app/Markdown";
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
    <>
      <Viewer title={nameWithOwner} data={userRes.data.viewer} />
      <Markdown>{repositoryText}</Markdown>
    </>
  );
}

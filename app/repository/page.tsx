import React from "react";
import _ from "lodash";
import Image from "next/image";
import Link from "next/link";
import { timeUtils } from "@/utils/time";
import Viewer from "@/components/Viewer";
import { fetchUser } from "@/apis/user";
import { fetchRepositoryList } from "@/apis/repository";

import "./index.scss";

export const metadata = {
  title: "Repository List Page",
  description: "Repository List Page | can view all repositories here",
};

function RepositoryItem({ node }: { node: any }) {
  let url = `/repository/${encodeURIComponent(node.nameWithOwner)}`;
  if (node.defaultBranchRef?.name) {
    url += `/${encodeURIComponent(node.defaultBranchRef.name)}`;
  }
  return (
    <div className="RepositoryPage__item">
      <div className="RepositoryPage__item--left">
        <Link href={url} className="RepositoryPage__name">
          {node.nameWithOwner}
        </Link>
        <div className="RepositoryPage__description">
          {node.description || "N.A"}
        </div>
        <div className="RepositoryPage__detail">
          {node.primaryLanguage && (
            <span className="RepositoryPage__detail-language">
              <span
                className="RepositoryPage__detail-language--color"
                style={{
                  background: node.primaryLanguage.color,
                }}
              />
              <span className="RepositoryPage__detail-language--content">
                {node.primaryLanguage && node.primaryLanguage.name}
              </span>
            </span>
          )}
          <span className="RepositoryPage__detail-stargazers">
            <Image src={"/stars.svg"} width={14} height={16} alt="stars" />
            <span className="RepositoryPage__detail-stargazers--text">
              {node.stargazers && node.stargazers.totalCount}
            </span>
          </span>

          <span className="RepositoryPage__detail-stargazers">
            <Image src={"/forks.svg"} width={10} height={16} alt="forks" />
            <span className="RepositoryPage__detail-stargazers--text">
              {node.forkCount}
            </span>
          </span>
        </div>
      </div>
      <div className="RepositoryPage__item--right">
        <span className="RepositoryPage-update">
          上次更新: {timeUtils(node.updatedAt)}
        </span>
        <span className="RepositoryPage-commitCount">
          提交次数:
          {node.object && node.object.history.totalCount}
        </span>

        <span className="RepositoryPage-link">
          {node.url && (
            <a
              className="RepositoryPage-link__item"
              rel="noopener noreferrer"
              target="_blank"
              href={node.url}
            >
              <Image src={"/github.svg"} width={16} height={16} alt="Github" />
            </a>
          )}
          {node.homepageUrl && (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={node.homepageUrl}
            >
              <span role="img" aria-label="websites">
                🌐
              </span>
            </a>
          )}
        </span>
        <span className="RepositoryPage-topic">
          {node.repositoryTopics.edges.map(
            (
              topic: { node: { url: string; topic: { name: string } } },
              i: number
            ) => (
              <a
                className="RepositoryPage-topic__item"
                key={i}
                href={topic.node.url}
              >
                {topic.node.topic.name}
              </a>
            )
          )}
        </span>
      </div>
    </div>
  );
}

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

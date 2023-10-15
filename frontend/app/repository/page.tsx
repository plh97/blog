import _ from "lodash";
import React, { Component } from "react";
import { timeUtils } from "@/utils/time";
import Viewer from "@/components/Viewer";
import starsSvg from "@/assets/stars.svg";
import githubSvg from "@/assets/github.svg";
import forksSvg from "@/assets/forks.svg";

import "./index.scss";
import Image from "next/image";
import Link from "next/link";
import { fetchUser } from "@/apis/user";
import { fetchRepositoryList } from "@/apis/repository";

export default async function RepositoryPage() {
  const userRes = await fetchUser();
  const repositoryRes = await fetchRepositoryList();
  const repository = _.get(
    repositoryRes,
    "data.repositoryOwner.repositories.edges",
    []
  );
  return (
    <div className="RepositoryPage">
      <Viewer title="前端组件" data={userRes.data.viewer} />
      <div className="RepositoryPage__content">
        {Array.prototype.slice.call(repository).map((e, i) => (
          <div className="RepositoryPage__item" key={i}>
            <div className="RepositoryPage__item--left">
              <Link
                href={`/repository/${encodeURIComponent(e.node.nameWithOwner)}`}
                className="RepositoryPage__name"
              >
                {e.node.nameWithOwner}
              </Link>
              <div className="RepositoryPage__description">
                {e.node.description}
              </div>
              <div className="RepositoryPage__detail">
                <span
                  className="RepositoryPage__detail-language--color"
                  style={{
                    background: `${
                      e.node.primaryLanguage && e.node.primaryLanguage.color
                    }`,
                  }}
                />
                <span className="RepositoryPage__detail-language--content">
                  {e.node.primaryLanguage && e.node.primaryLanguage.name}
                </span>

                <span className="RepositoryPage__detail-stargazers">
                  <Image src={starsSvg} alt="stars" />
                  <span className="RepositoryPage__detail-stargazers--text">
                    {e.node.stargazers && e.node.stargazers.totalCount}
                  </span>
                </span>

                <span className="RepositoryPage__detail-stargazers">
                  <Image src={forksSvg} alt="forks" />
                  <span className="RepositoryPage__detail-stargazers--text">
                    {e.node.forkCount}
                  </span>
                </span>
              </div>
            </div>
            <div className="RepositoryPage__item--right">
              <span className="RepositoryPage-update">
                上次更新: {timeUtils(e.node.updatedAt)}
              </span>
              <span className="RepositoryPage-commitCount">
                提交次数:
                {e.node.object && e.node.object.history.totalCount}
              </span>

              <span className="RepositoryPage-link">
                {e.node.url && (
                  <a
                    className="RepositoryPage-link__item"
                    rel="noopener noreferrer"
                    target="_blank"
                    href={e.node.url}
                  >
                    <Image src={githubSvg} alt="Github" />
                  </a>
                )}
                {e.node.homepageUrl && (
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={e.node.homepageUrl}
                  >
                    <span role="img" aria-label="websites">
                      🌐
                    </span>
                  </a>
                )}
              </span>
              <span className="RepositoryPage-topic">
                {e.node.repositoryTopics.edges.map(
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
        ))}
      </div>
    </div>
  );
}

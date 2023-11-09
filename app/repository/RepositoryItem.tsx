import React from "react";
import Link from "next/link";
import Image from "next/image";
import { timeUtils } from "@/utils/time";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function RepositoryItem({ node }: { node: any }) {
  let url = `/repository/${encodeURIComponent(node.nameWithOwner)}`;
  if (node.defaultBranchRef?.name) {
    url += `/${encodeURIComponent(node.defaultBranchRef.name)}`;
  }
  return (
    <div className="RepositoryPage__item md:w-[calc(50%-10px)] max-md:w-full">
      <div className="RepositoryPage__item--left flex-1">
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
      <div className="RepositoryPage__item--right flex flex-1 flex-col">
        <span className="RepositoryPage-update">
          上次更新: {timeUtils(node.updatedAt)}
        </span>
        <span className="RepositoryPage-commitCount">
          提交次数: {node.object?.history?.totalCount ?? 0}
        </span>

        <span className="flex flex-row justify-end gap-x-2.5 items-center">
          {node.url && (
            <a
              className="RepositoryPage-link__item"
              rel="noopener noreferrer"
              target="_blank"
              href={node.url}
            >
              <FontAwesomeIcon
                className="w-4 h-4 inline-block"
                icon={faGithub}
              />
            </a>
          )}
          {node.homepageUrl && (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={node.homepageUrl}
            >
              <FontAwesomeIcon className="w-4 h-4 inline-block" icon={faLink} />
            </a>
          )}
        </span>
        <span className="RepositoryPage-topic flex gap-1.5 flex-wrap justify-end">
          {node.repositoryTopics.edges.map(
            (topic: { node: { url: string; topic: { name: string } } }) => (
              <a
                className="RepositoryPage-topic__item"
                key={topic.node.url}
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

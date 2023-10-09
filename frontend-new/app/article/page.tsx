import _ from "lodash";
import React from "react";
import Viewer from "@/components/Viewer";

import "./index.scss";
import Link from "next/link";
import Image from "next/image";
import { IViewer, fetchUser } from "@/apis/user";
import { fetchHome } from "@/apis/home";
import { fetchArticleList } from "@/apis/article";

interface IProps {
  user: IViewer;
  article: string;
}

export default async function ArticlePage() {
  const user = await fetchUser();
  const articleRes = await fetchArticleList();
  const article = _.get(
    articleRes,
    'data.repositoryOwner.repository.issues.edges',
    []
  )
  return (
    <div className="ArticlePage">
      <Viewer title="文章列表" data={user.data.viewer} />
      <div className="ArticlePage__content">
        {Array.prototype.slice
          .call(article)
          .reverse()
          .map((e, i) => (
            <Link
              href={{
                pathname: `/article/${encodeURIComponent(e.node.title)}`,
              }}
              className="ArticlePage__item"
              key={i}
            >
              <Image src={e.node.author.avatarUrl} alt="头像" width={64} height={64} />
              <span className="ArticlePage__detail">
                <span className="ArticlePage__title">{e.node.title}</span>
                {e.node.labels.nodes.map(
                  (label: { color: string; name: string }, i: number) => (
                    <span
                      className="ArticlePage__label"
                      key={i}
                      style={{
                        background: `#${label.color}`,
                      }}
                    >
                      {label.name}
                    </span>
                  )
                )}
                <br />
                <span className="ArticlePage__name">{e.node.author.login}</span>
                {e.node.updatedAt}
              </span>
            </Link>
          ))}
      </div>
    </div>
  );
}
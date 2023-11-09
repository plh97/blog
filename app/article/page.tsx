import _ from "lodash";
import React from "react";
import Viewer from "@/components/Viewer";
import { fetchUser } from "@/apis/user";
import { fetchArticleList } from "@/apis/article";
import Article from "./article";
import "./index.scss";

export const metadata = {
  title: "Article List Page",
  description: "This is Article List Page | can view all articles here",
};

export default async function ArticlePage() {
  const user = await fetchUser();
  const articleRes = await fetchArticleList();
  const article = _.get(
    articleRes,
    "data.repositoryOwner.repository.issues.edges",
    []
  );
  return (
    <>
      <Viewer title="文章列表" data={user.data.viewer} />
      <div className="ArticlePage__content">
        {article.reverse().map(({ node }, i) => (
          <Article key={i} data={node} />
        ))}
      </div>
    </>
  );
}

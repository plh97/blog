import _ from "lodash";
import React from "react";

import Viewer from "@/components/Viewer";
import { fetchUser } from "@/apis/user";
import { fetchArticleDetail } from "@/apis/article";
import { PageProps } from "@/.next/types/app/article/[id]/page";
import Markdown from "@/components/Markdown";

export const metadata = {
  title: 'Article Detail Page',
  description: 'This is Article Detail Page | can view one articles here',
}

export default async function ArticleDetail({ params }: PageProps) {
  const user = await fetchUser();
  const articleRes = await fetchArticleDetail({
    issue: decodeURIComponent(params.id)
  });
  const article = _.get(articleRes, "data.search.edges[0].node", {
    title: "",
    body: ""
  });
  // article/%5BReact%5D%20上拉加载更多
  return (
    <>
      <Viewer title={article!.title} data={user.data.viewer} />
      <Markdown className="markdown-body">{article.body}</Markdown>
    </>
  );
}

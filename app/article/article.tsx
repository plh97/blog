import _ from "lodash";
import React from "react";
import moment from "dayjs";
import Link from "next/link";
import Image from "next/image";
import classNames from "classnames";
import { isDark } from "@/utils/color";
import { IArticleList } from "@/apis/article";

import "./index.scss";

export const metadata = {
  title: "Article List Page",
  description: "This is Article List Page | can view all articles here",
};

interface IProps {
  data: IArticleList;
}

export default async function Article({ data }: IProps) {
  return (
    <Link
      href={{
        pathname: `/article/${encodeURIComponent(data.title)}`,
      }}
      className="ArticlePage__item text-[#0288d1]"
    >
      <img src={data.author.avatarUrl} alt="头像" width={64} height={64} />
      <span className="ArticlePage__detail">
        <span className="ArticlePage__title">{data.title}</span>
        {data.labels.nodes.map((label) => (
          <span
            className={classNames("ArticlePage__label", 'mr-1.5', {
              'text-white': isDark(label.color),
              'text-black': !isDark(label.color),
            })}
            key={label.name}
            title={label.description}
            style={{
              background: `#${label.color}`,
            }}
          >
            {label.name}
          </span>
        ))}
        <br />
        <span className="ArticlePage__name">{data.author.login}</span>
        {moment(data.updatedAt).format("YYYY-MM-DD h:mm:ss A")}
      </span>
    </Link>
  );
}

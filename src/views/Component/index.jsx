// package
import React, { useState, useEffect } from 'react';
import ReactMarkdown from "react-markdown";
// local
import AxiosOrLocal from "../../utils/axiosOrLocal";
import Viewer from '../../components/Viewer';
import './index.scss';
// code
export default function (props) {
  const [viewer, setViewer] = useState("");
  const [article, setArticle] = useState("");
  const keyWord = decodeURI(props.location.hash).replace(/^#/, '')
  useEffect(() => {
    (async () => {
      const result = await new AxiosOrLocal({
        key: `_${keyWord}_`,
        url: 'https://api.pipk.top/graphql',
        method: 'post',
        data: {
          query: `{
            viewer {
              name avatarUrl login bio url createdAt isHireable
            }
            repositoryOwner(login: "pengliheng") {
              repositories(last:100,isFork:false,orderBy) {
                edges {
                  node {
                    sshUrl
                    description
                    homepageUrl
                    nameWithOwner
                    isFork
                  }
                }
              }
            }
          }`
        }
      });
      setViewer(result.data.data.viewer)
      if (result.data.data.search.edges.length > 0) {
        setArticle(result.data.data.search.edges[0].node);
      } else {
        console.log('文章不存在');
      }
    })()
  }, keyWord);
  return (
    <div className="ComponentPage">
      <Viewer data={viewer} />
      <div className="ComponentPage__content">
        <ReactMarkdown className="markdown-body" source={article.body} />
      </div>
    </div>
  );
};



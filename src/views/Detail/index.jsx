// package
import React, { useState,useEffect } from 'react';
import ReactMarkdown from "react-markdown";
import "prismjs"
// local
import './index.scss';
import AxiosOrLocal from "../../utils/axiosOrLocal"
// code
export default function (props) {
  const [viewer, setViewer] = useState("");
  const [article, setArticle] = useState("");
  const keyWord = decodeURI(props.location.hash).replace(/^#/,'')
  useEffect(() => {
    (async()=>{
      const result = await new AxiosOrLocal({
        key: `_${keyWord}_`,
        url: 'https://api.pipk.top/graphql',
        method: 'post',
        data: {
          query: `{
            viewer {
              name avatarUrl login bio url createdAt isHireable
            }
            search(
              first: 10, 
              query: "repo:pengliheng/pengliheng.github.io author:pengliheng type:Issues ${keyWord}", 
              type: ISSUE
            ) {
              edges {
                node {
                  ... on Issue {
                    body title
                  }
                }
              }
            }
          }`,
        }
      });
      setViewer(result.data.data.viewer)
      if(result.data.data.search.edges.length>0){
        setArticle(result.data.data.search.edges[0].node);
      }else{
        console.log('文章不存在');
      }
    })()
  },keyWord);
  return (
    <div className="DetailPage">
      <div className="DetailPage__background">
        <div className="DetailPage__container">
          <h1 className="DetailPage__title">{article.title}</h1>
          <div className="DetailPage__detail">
            <img alt="avatar" src={viewer.avatarUrl} />
            <span className="DetailPage__detail-list">
              <span className="DetailPage__detail-name">{viewer.name}</span>
              {/* <span className="DetailPage__detail-bio">__{typeWord}</span> */}
            </span>
          </div>
        </div>
      </div>
      <div className="DetailPage__content">
        <ReactMarkdown className="markdown-body" source={article.body} />
      </div>
    </div>
  );
};



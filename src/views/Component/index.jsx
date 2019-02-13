// package
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// local
import AxiosOrLocal from "../../utils/axiosOrLocal";
import Viewer from "../../components/Viewer";
import "./index.scss";
// code
export default function() {
  const [viewer, setViewer] = useState("");
  const [components, setComponents] = useState([]);
  const keyWord = "component";
  useEffect(() => {
    (async () => {
      const result = await new AxiosOrLocal({
        key: `_${keyWord}_`,
        url: "https://api.pipk.top/graphql",
        method: "post",
        data: {
          query: `{
            viewer {
              name avatarUrl login bio url createdAt isHireable
            }
            repositoryOwner(login: "pengliheng") {
              repositories(last: 100,isFork:false,orderBy:{field:UPDATED_AT,direction:ASC}) {
                edges {
                  node {
                    commitComments {
                      totalCount
                    }
                    url
                    description
                    homepageUrl
                    nameWithOwner
                    updatedAt
                    forkCount
                    primaryLanguage {
                      name
                      color
                    }
                    stargazers {
                      totalCount
                    }
                  }
                }
              }
            }
          }`
        }
      });
      setViewer(result.data.data.viewer);
      setComponents(
        result.data.data.repositoryOwner.repositories.edges.map(e => {
          const newE = e;
          newE.node.updatedAt = (() => {
            let res = new Date() - new Date(e.node.updatedAt);
            if (res < 60 * 1000 * 60) {
              return (res / (60 * 1000)).toFixed(0) + "分钟";
            } else if (res < 60 * 1000 * 60 * 24) {
              return (res / (60 * 1000 * 60)).toFixed(0) + "小时";
            } else if (res < 60 * 1000 * 60 * 24 * 30) {
              return (res / (60 * 1000 * 60 * 24)).toFixed(0) + "天";
            } else if (res < 60 * 1000 * 60 * 24 * 30 * 12) {
              return (res / (60 * 1000 * 60 * 24 * 30)).toFixed(0) + "个月";
            } else {
              return (res / (60 * 1000 * 60 * 24 * 30 * 12)).toFixed(0) + "年前"
            }
          })();
          return newE;
        })
      );
    })();
  }, keyWord);
  return (
    <div className="ComponentPage">
      <Viewer title="前端组件" data={viewer} />
      <div className="ComponentPage__content">
        {Array.prototype.slice
          .call(components)
          .reverse()
          .map((e, i) => (
            <div className="ComponentPage__item" key={i}>
              <div className="ComponentPage__item--left">
                <Link
                  to={`/detail#${e.node.nameWithOwner}`}
                  className="ComponentPage__name"
                >
                  {e.node.nameWithOwner}
                </Link>
                <div className="ComponentPage__description">
                  {e.node.description}
                </div>
                <div className="ComponentPage__detail">
                  <span
                    className="ComponentPage__detail-language--color"
                    style={{
                      background: `${e.node.primaryLanguage &&
                        e.node.primaryLanguage.color}`
                    }}
                  />
                  <span className="ComponentPage__detail-language--content">
                    {e.node.primaryLanguage && e.node.primaryLanguage.name}
                  </span>

                  <span className="ComponentPage__detail-stargazers">
                    <svg
                      aria-label="stars"
                      viewBox="0 0 14 16"
                      version="1.1"
                      width="14"
                      height="16"
                      role="img"
                    >
                      <path
                        fillRule="evenodd"
                        d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"
                      />
                    </svg>
                    <span className="ComponentPage__detail-stargazers--text">
                      {e.node.stargazers && e.node.stargazers.totalCount}
                    </span>
                  </span>

                  <span className="ComponentPage__detail-stargazers">
                    <svg aria-label="forks" viewBox="0 0 10 16" version="1.1" width="10" height="16" role="img">
                      <path fillRule="evenodd" d="M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/>
                    </svg>
                    <span className="ComponentPage__detail-stargazers--text">
                      {e.node.forkCount}
                    </span>
                  </span>
                </div>
              </div>

              <div className="ComponentPage__item--right">
                <div className="ComponentPage__item-update">
                  上次更新:{e.node.updatedAt}
                </div>

                <div className="ComponentPage__item-commitCount">
                  提交次数:{e.node.commitComments.totalCount}
                </div>

                <div className="ComponentPage__item-link">
                  {e.node.url && (
                    <a target="_blank" rel="noopener noreferrer" href={e.node.url}>
                      <svg width="16" height="16" viewBox="0 0 16 16" version="1.1" aria-hidden="true">
                        <path
                          fillRule="evenodd"
                          d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"
                        />
                      </svg>
                    </a>
                  )}
                  {e.node.homepageUrl && (
                    <a target="_blank" rel="noopener noreferrer" href={e.node.homepageUrl}><span role="img">🌐</span></a>
                  )}
                </div>
              </div>
              {/* {JSON.stringify(e.node)} */}
            </div>
          ))}
      </div>
    </div>
  );
}

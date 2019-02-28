// package
import React, { useState, useEffect,  } from 'react';
import ReactMarkdown from "react-markdown";
// local
import './index.scss';
import AxiosOrLocal from "../../../utils/axiosOrLocal"
import Viewer from '../../../components/Viewer';
// code
export default function (props) {
  const [viewer, setViewer] = useState("");
  const [repository, setRepository] = useState({
    object:{
      text:''
    }
  });
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
            search(first: 1, query: "repo:${keyWord}", type: REPOSITORY) {
              edges {
                node {
                  ... on Repository {
                    nameWithOwner
                    object(expression: "master:README.md") {
                      ... on Blob {
                        text
                      }
                    }
                  }
                }
              }
            }
          }`,
        }
      });
      setViewer(result.data.data.viewer)
      if(result.data.data.search.edges.length>0){
        setRepository(result.data.data.search.edges[0].node);
      }else{
        console.log('文章不存在');
      }
    })()
  },keyWord);
  return (
    <div className="DetailPage">
      <Viewer title={repository.nameWithOwner} data={viewer} />
      <div className="DetailPage__content">
        <ReactMarkdown className="markdown-body" source={repository.object.text} />
      </div>
    </div>
  );
};



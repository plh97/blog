import React,{Component} from "react";
import { Row, Col } from 'antd';
import PrismCode from '../../feature/Prism.js'

export default class realEstate extends Component {
  render() {
    return (
      <Col span={24}>
        <h3>git 基本命令使用篇</h3>
        <p>首先，git可以在服务器端和本地电脑端同时使用，现在发现atom编辑器(eletron)同样可以git上传</p>
        <PrismCode lang='js'>{`
          git init
          git add .
          git commit -am'😄'
          git push https://github.com/uname/uname.github.io.git master  //--
          git push                                                      // | - choose one
          git push -u origin                                            //--
          git pull   //同样适用，server端同样适用
          git reset --hard//滚回上一个commit版本，如果你代码提交错误的话
          git log    //查看每次commit的字段及hash码，并且git reset --hard<你的hash值>
          git checkout &lt;yourBranch>//<切换分支>
        `}</PrismCode>
      </Col>
    )
  }
}

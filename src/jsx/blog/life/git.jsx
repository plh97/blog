import React,{Component} from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { tomorrowNightEighties,xcode } from "react-syntax-highlighter/dist/styles";
import { Row, Col } from 'antd';

export default class realEstate extends Component {
  constructor() {
    super();
    this.state = {
      language: '',
      style: tomorrowNightEighties,
      showLineNumbers: true
    };
  }
  render() {
    const showLineNumbers = this.state.showLineNumbers;
    const language = this.state.language;
    const style = this.state.style;
    return (
      <Col span={24}>
        <h3>git 基本命令使用篇</h3>
        <p>首先，git可以在服务器端和本地电脑端同时使用，现在发现atom编辑器(eletron)同样可以git上传</p>
        <p><code>git init</code>建立仓库</p>
        <p><code>git add .</code></p>
        <p><code>git commit -am"😄"</code></p>
        <p><code>git push https://github.com/pengliheng/username.github.io.git master</code></p>
        <p><code>git push origin -u</code></p>
        <p><code>git pull origin -u//linux和本地同样适用，简洁的pull/push code 的方法</code></p>
        <p><code>git reset --hard//滚回上一个commit</code></p>
        <p><code>git log//查看每次commit的字段及hash码，并且git reset --hard&lt;yourCopyHash></code></p>
        <p><code>git checkout &lt;yourBranch>//切换分支></code></p>
      </Col>
    )
  }
}

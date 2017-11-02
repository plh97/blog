import React from "react";
import { Row, Col } from 'antd';
import PrismCode from '../../feature/Prism.js'

export default class Jsx extends React.Component {
  render() {
    return (
      <Col span={24}>
        <h3>介绍JXP</h3>
        <p>接下来看看下面这个声明:</p>
        <PrismCode lang='jsx'>{`const element = <h1>Hello World!;</h1>`}</PrismCode>
        <p>这个有趣的标记语法既不是字符串，也不是HTML。</p>
        <p>它叫是JSX，是Javascript的语法扩展。使用它的目的是为了让大家在写代码的时候更加舒适。JSX让你看起来像HTML模板语言，但她同时又具备Javascript的全部功能。</p>
        <p>JSX生成React元素，我们将在下一章节中探索如何将他们渲染到DOM上。下面，你可以找到一些必要的JSX基础来让你更好的展开学习React。</p>
        <h4>在JSX中嵌入表达式</h4>
        <p>你可以在JSX中用'{}'嵌入任何js表达式。</p>
        <p>例如，2+2，user.firstName，formatName(user)，这些都是有效的表达式。</p>
        <PrismCode lang='jsx'>{`
          function formatName(user){
            return user.firstName+' '+user.lastName;
          };

          const user = {
            firstName:"peng",
            lastName:'liheng'
          };

          function element=(){
            <h1>
              hello! {formatName(user)}.
            </h1>
          };

          ReactDOM.Render(
            element,
            document.getElementById('example')
          );
        `}</PrismCode>
        <p>可以在
          <a href="https://codepen.io/gaearon/pen/PGEjdG?editors=0010">CodePen</a>上面尝试一下。
        </p>
        <p>我们将JSX分割成多行，使其更加语义化。虽然这是不必要的，但我们仍然建议将他写在一个<code className="language-js">{'{}'}</code>里面，用来避免自动插入分号的陷阱。</p>
        <h4>JSX也是一个表达式</h4>
        <p>编译后，JSX表达式变成常规的js对象</p>
        <p>这意味着你可以在if语句for循环中使用JSX，给他传入变量，或者参数，并从函数中返回。</p>
        <h4>用JSX指定属性</h4>
        <p>maybe you can 用引号为字符串中文字指定属性。</p>
        <PrismCode lang='jsx'>{`const element = <div tabindex="0"></div>`}</PrismCode>
        <p>你也可以将js表达式用花括号包住嵌入到一个属性中</p>
        <PrismCode lang='jsx'>{`const element = <img src={user.avatarUrl} />`}</PrismCode>
        <p>当你想要将js表达式嵌入到一个属性中，不要<code className="language-js">{'{}'}</code>或者<code className="language-js">{'{}'}</code>这样，因为JSX会将这个属性原封不动的当作变量而不是一个表达式，你要么用''表示字符串值，要么用<code className="language-js">{'{}'}</code>表示js表达式，但是不要一起用在一个属性中。</p>
        <h4>用JSX指定子元素</h4>
        <p>如果是空标签，要用/>来闭合，就像XML那样</p>
        <PrismCode lang='jsx'>{`const element = <img src={user.avatarUrl} />`}</PrismCode>
        <p>JSX标签也许会包含子标签</p>
        <PrismCode lang='jsx'>{`
          const element = (
            <div>
              <h1>hello!</h1>
              <h2>good to see you here.</h2>
            </div>
          )
        `}</PrismCode>
        <h4>警告！</h4>
        <p>自从JSX比HTML更接近Javascript后，ReactDOM使用camlCase将属性重命名，用来替代HTML属性名。</p>
        <p>例如，class变成了className，tabindex变成了tabIndex。</p>
        <h4>JSX可防御注入攻击</h4>
        <p>在JSX里面嵌入用户信息相对安全</p>
        <PrismCode lang='jsx'>{`
          const title = response.pontentiallyMaliciousInput;
            //This is safe;
            const element = <h1>{title}</h1>;
          )
        `}</PrismCode>
        <p>默认情况下，ReactDOM在其渲染之前转义任意值并嵌入JSX中。因此它可以确保你绝不注射任何东西在你未明确写在要注射的应用程序，所有的东西都被转换成一个字符串直到要渲染的时候。这有助于防御XSS(跨域名脚本)攻击</p>
        <h4>JSX的代表性对象</h4>
        <p>Babel将JSX编译与React.createrElement()的区别</p>
        <p>以下这两个例子是相同的。</p>
        <PrismCode lang='jsx'>{`
          const element=(
            <h1 className="greeting">
              Hello,world!
            </h1>
          );

          const element=React.createElement(
            'h1',
            {className:'greeting'},
            'Hello world!'
          );
        `}</PrismCode>
        React.createElement()执行一些检查来帮助你来写无BUG代码，但是它本质上是创造了一个这样的对象。
        <PrismCode lang='jsx'>{`
          //Note:这个结构是简化的
          const element={
            type:'h1',
            props:{
              className:'greeting',
              children:'Hello,world'
            }
          }
        `}</PrismCode>
        <p>这些对象叫做“React元素”，你可以想象他们作为描述你所想在屏幕上看到的，React 读取这些对象并用他们构建DOM并时刻保持更新。</p>
        <p>我们将会在下一章节继续探索渲染React元素到DOM上面。</p>
        <h4>Tip:</h4>
        <p>建议您search一个叫"Babel"的语法格式来供你的编辑器选择，这样的话无论是ES6还是JSX代码都可以正确的高亮。</p>
      </Col>
    )
  }
}

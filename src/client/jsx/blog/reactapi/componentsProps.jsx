import React from "react";
import { Row, Col } from 'antd';
import PrismCode from '../../feature/Prism.js'

export default class Jsx extends React.Component {
  render() {
    return (
      <Col span={24}>
        <h3>Components(组件)和Props(道具)</h3>
        <p>组件让你可以将整个UI分解成独立的可重复使用的，并且独立思考每一部分。</p>
        <p>从概念上讲，组件像js函数，他们可以接受任意参数(props)并且返回那些将要出现在屏幕上面的React元素</p>
        <h4>function组件和class组件</h4>
        <p>最简单的去定义一个组件是写一个js函数</p>
        <PrismCode lang='jsx'>{`
          function Welcome(props){
            return <h1>Hello, {props.name}</h1>;
          }
        `}</PrismCode>
        <p>这个函数是一个有效的React组件因为它可以接受一个单一的<code>props</code>对象，参数携带数据并且返回一个<code>React</code>元素，我们叫这样的组件为函数化因为他是真真的js函数。</p>
        <p>你也可以用ES6 class来定义一个组件:</p>
        <PrismCode lang='jsx'>{`
          class Welcome extends React.Component {
            render(){
              return <h1>Hello,{this.props.name}</h1>
            }
          }
        `}</PrismCode>
        <p>以上这两种组件从<code>React</code>的角度来看是相等的。</p>
        <p>Classes有一些额外功能，下一章节会探讨。到目前为止，我们将会使用函数化组件，因为简洁。</p>
        <h4>渲染一个组件</h4>
        <p>上一章节，我们仅仅只遇到React元素的纯标签。</p>
        <PrismCode lang='jsx'>{`const element = <div/>`}</PrismCode>
        <p>然而，元素也能扮演用户自定义组件。</p>
        <PrismCode lang='jsx'>{`const element = <div name="Sara"/>`}</PrismCode>
        <p>当React看到一个元素有用户自定义组件，他会通过JSX属性来执行组件作为一个单一的对象，我们将这对象称之为props对象。</p>
        <p>例如，下面这个，将会渲染<code>"Hello,Sara"</code>到页面上。</p>
        <PrismCode lang='jsx'>{`
          function Welcome(props){
            return <h1>hello,{props,name}</h1>
          }

          const element = <Welcome name="Sara"/>;
          ReactDOM.render(
            element,
            document.getElementById('root')
          )
        `}</PrismCode>
        <p>你可以在<a href="https://codepen.io/gaearon/pen/YGYmEG?editors=0010">CodePen</a>里面尝试一下。</p>
        <p>让我们大概分析一下，例子中到底发生了什么</p>
        <ol type="1">
          <li>我们调用<code>ReactDOM.render()</code>,里面带有<code className="language-html">&lt;Welcome name="Sara"/></code>元素</li>
          <li>React调用welcome组件，并把<code>{`{name:'Sara'}`}</code>当作props。</li>
          <li>我们的Welcome组件返回一个<code className="language-html">&lt;h1>hello, Sara&lt;/h1></code>元素作为结果。</li>
          <li>React DOM快速更新DOM来匹配<code className="language-html">&lt;h1>hello, Sara&lt;/h1></code></li>
        </ol>
        <h4>警告：</h4>
        <p>组件名称必须大写开头</p>
        <p>例如<code className="language-html">&lt;div/></code>是一个DOM标签,而<code className="language-html">&lt;Welcome/></code>是一个组件，并且需要Welcome作用。</p>
        <h4>组件构成</h4>
        <p>组件可以参照其他组件，在输出，这让我们用一样的组件</p>
        <p>例如，我们可以创造一个App组件，他可以在Welcome组件里面渲染很多次。</p>
        <PrismCode lang='jsx'>{`
          function Welcome(props){
            return <h1>Hello,{props.name}</h1>
          }
          function App(){
            return(
              <div>
                <Welcome name="Sara"/>
                <Welcome name="Cahal"/>
                <Welcome name="Edite"/>
              </div>
            )
          }
          ReactDOM.render(
            <App/>,
            document.getElementById('root')
          );
        `}</PrismCode>
        <p>你可以在<a href="https://codepen.io/gaearon/pen/KgQKPr?editors=0010">CodePen</a>里面尝试一下。</p>
        <p>通常，新的React程序有一个单一的App组件在顶部。然而，如果你想把React整合到一个已经存在的app里面，你可能要开始一个按钮附带一个组件，像"Button"这样，并逐步工作到视图层次结构的顶部。</p>
        <h4>警告：</h4>
        <p>组件必须返回一个单一的根元素，这就是为什么我们上一个例子中要用一个div元素包裹所有的Welcome组件。</p>
        <h4>提取组件</h4>
        <p>不要害怕把组件split成更小的组件。</p>
        <p>例如，思考一下下面这个Comment组件吧。</p>
        <PrismCode lang='jsx'>{`
          function Comment(prop){
            return(
              <div className="Comment">
                <div className="UserInfo">
                  <img
                    src={props.author.avatarUrl}
                    alt={prop.author.name}
                    className="Avatar"
                  />
                  <div className="UserInfo-name">
                    {props.author.name}
                  </div>
                </div>
                <div className="Comment-text">
                  {props.text}
                </div>
                <div className="Comment-date">
                  {formatDate(props.date)}
                </div>
              </div>
            );
          }
        `}</PrismCode>
        <p>你可以在<a href="https://codepen.io/gaearon/pen/VKQwEo?editors=0010">CodePen</a>里面尝试一下。</p>
        <p>它接收author(对象)，text(字符串)，date(数据)作为参数，并且描述一个评论在社交媒体网站</p>
        <p>这个组件由于有很多嵌套，所以它难以修改，并且他的各个部分也很难重复利用，因此，建议从中提取一小部分组件。</p>
        <p>首先我们会提取Avatar组件，</p>
        <PrismCode lang='jsx'>{`
          function Avatar(props){
            return (
              <img
                src={props.author.avatarUrl}
                alt={prop.author.name}
                className="Avatar"
              />
            )
          }
        `}</PrismCode>
        <p>这个Avatar不需要知道要被渲染在Comment的哪个地方。这也是为什么我们给他传递的参数是一个更加通用的名称user而不是author</p>
        <p>我们建议命名参数的名字的时候应该从组件本身的角度来命名，而不是通过它正在使用的上下文。</p>
        <p>我们现在可以开始简化Comment组件一丝丝。</p>
        <PrismCode lang='jsx'>{`
          function Avatar(props){
            return (
              <img
                src={props.author.avatarUrl}
                alt={prop.author.name}
                className="Avatar"
              />
            )
          };

          function Comment(prop){
            return(
              <div className="Comment">
                <div className="UserInfo">
                  <Avatar user={props.author}/>
                  <div className="UserInfo-name">
                    {props.author.name}
                  </div>
                </div>
                <div className="Comment-text">
                  {props.text}
                </div>
                <div className="Comment-date">
                  {formatDate(props.date)}
                </div>
              </div>
            );
          }
        `}</PrismCode>
        <p>接下来，我们将会提取一个UserInfo组件，这个组件会渲染一个Avatar组件在用户名后面。</p>
        <PrismCode lang='jsx'>{`
          function UserInfo(props){
            return(
              <div className="UserInfo">
                <Avatar user={props.user}/>
                <div className="UserInfo-name">
                  {props.user.name}
                </div>
              </div>
            )
          }
        `}</PrismCode>
        <p>这将会更加简化Comment组件</p>
        <PrismCode lang='jsx'>{`
          function Comment(props){
            return(
              <div className="Comment">
                <UserInfo user={props.author}/>
                <div className="Comment-text">{props.text}</div>
                <div className="Comment-date">{props.date}</div>
              </div>
            )
          }
        `}</PrismCode>
        <p>你可以在<a href="https://codepen.io/gaearon/pen/rrJNJY?editors=0010">CodePen</a>里面尝试一下。</p>
        <p>刚开始的时候提取组件也许像是一件简单乏味的工作，但是拥有一个可重复使用的组件调色板，在更大的app中是会有很大回报的。一个很好的经验，如果你的UI的一部分被重复使用了很多次(Button,Panel,Avatar),或者它足够复杂(App,FeedStory,Comment),这种组件化仍旧是一种不错的选择，</p>
        <h4>个人经验：</h4>
        <p>从最开始的一个组件Comment,它拥有属性，author，我们给他赋予{`comment.author`}花括号开始用js解析，括号开始解析html，变量comment.text,于是这个属性就能传递下去，接下来看Comment组件的构成，他有一个props参数，先看里面Comment组件最简单的div元素，他直接赋予变量{`props.text`},这个变量props参数里面的text是从上一个Comment里面传递下来的参数，props.text，于是就会从之前里面去查询text属性，有，就看text属性等于comment.text，这就是最基本的传递参数。。拥有最基本的js概念就能看懂react了。花括号开始解析js，括号开始解析html，参数传递概念，传递的就是所运用的属性，但是不建议在每一个内嵌组件里面运用同样的属性，例如comment.author，已经有author，那么里面的内嵌组件UserInfo不建议再次使用author属性，防止js可读性降低，例如再次使用UserInfo.author.</p>
        <h4>Props 是仅仅之能读取</h4>
        <p>无论你function一个组件或者class一个组件，他必须是从不能修改他自己的props参数，思考一下下面这个sum函数吧。</p>
        <PrismCode lang='jsx'>{`
          function sum(a,b){
            return a+b;
          }
        `}</PrismCode>
        <p>这叫做纯函数'pure'，因为他们不会去改变他们的输入值，并且在同样参数的情况下会输出同样的结果。</p>
        <p>下面例子刚好相反，因为他改变了他自己的输入。</p>
        <PrismCode lang='jsx'>{`
          function withdraw(account,amount){
            account.total -= amount;
          }
        `}</PrismCode>
        <p>React反应灵活，但是他有一个非常严格的规则：</p>
        <p>所有React组件必须表现的像纯函数那样来尊重他们的props参数</p>
        <p>当然，UI应用是动态的，并且时刻变化的，在下一章节，我们将会介绍一个新的概念'state',State允许所有的React组件随着时间和用户操作来响应，来改变通过用户行为和网络响应或者其他东西多次改变输出，但是不能改变这条规则。</p>
      </Col>
    )
  }
}

import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { monokai,androidstudio } from 'react-syntax-highlighter/dist/styles';
export default class ReactAPI extends React.Component{
  constructor(){
    super();
    this.state = {
      language:"",
      style:androidstudio,
      showLineNumbers: true,
    }
  }
  render(){
    const showLineNumbers = this.state.showLineNumbers;
    const language = this.state.language;
    const style = this.state.style;
    return(
<div class="container-context container">
<div class="col-sm-12">
  <h3>介绍JXP</h3>
  <p>接下来看看下面这个声明:</p>
  <SyntaxHighlighter showLineNumbers={showLineNumbers} language={language} style={style}>{`const element = <h1>Hello World!;</h1>`}</SyntaxHighlighter>
  <p>这个有趣的标记语法既不是字符串，也不是HTML。</p>
  <p>它叫是JSX，是Javascript的语法扩展。使用它的目的是为了让大家在写代码的时候更加舒适。JSX让你看起来像HTML模板语言，但她同时又具备Javascript的全部功能。</p>
  <p>JSX生成React元素，我们将在下一章节中探索如何将他们渲染到DOM上。下面，你可以找到一些必要的JSX基础来让你更好的展开学习React。</p>
  <h4>在JSX中嵌入表达式</h4>
  <p>你可以在JSX中用'{}'嵌入任何js表达式。</p>
  <p>例如，2+2，user.firstName，formatName(user)，这些都是有效的表达式。</p>
<SyntaxHighlighter showLineNumbers={showLineNumbers} language={language} style={style}>{`
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
`}</SyntaxHighlighter>
<p>可以在
<a href="https://codepen.io/gaearon/pen/PGEjdG?editors=0010">CodePen</a>上面尝试一下。
</p>
<p>我们将JSX分割成多行，使其更加语义化。虽然这是不必要的，但我们仍然建议将他写在一个'{}'里面，用来避免自动插入分号的陷阱。</p>
<h4>JSX也是一个表达式</h4>
<p>编译后，JSX表达式变成常规的js对象</p>
<p>这意味着你可以在if语句for循环中使用JSX，给他传入变量，或者参数，并从函数中返回。</p>
<h4>用JSX指定属性</h4>
<p>maybe you can 用引号为字符串中文字指定属性。</p>
<SyntaxHighlighter showLineNumbers={showLineNumbers} language={language} style={style}>{`
const element = <div tabindex="0"></div>
`}</SyntaxHighlighter>
<p>你也可以将js表达式用花括号包住嵌入到一个属性中</p>
<SyntaxHighlighter showLineNumbers={showLineNumbers} language={language} style={style}>{`
const element = <img src={user.avatarUrl}/>
`}</SyntaxHighlighter>
<p>当你想要将js表达式嵌入到一个属性中，不要'{}'或者"{}"这样，因为JSX会将这个属性原封不动的当作变量而不是一个表达式，你要么用''表示字符串值，要么用{}表示js表达式，但是不要一起用在一个属性中。</p>
<h4>用JSX指定子元素</h4>
<p>如果是空标签，要用/>来闭合，就像XML那样</p>
<SyntaxHighlighter showLineNumbers={showLineNumbers} language={language} style={style}>{`
const element = <img src={user.avatarUrl}/>
`}</SyntaxHighlighter>
<p>JSX标签也许会包含子标签</p>
<SyntaxHighlighter showLineNumbers={showLineNumbers} language={language} style={style}>{`
const element = (
  <div>
    <h1>hello!</h1>
    <h2>good to see you here.</h2>
  </div>
)
`}</SyntaxHighlighter>
<h4>警告！</h4>
<p>自从JSX比HTML更接近Javascript后，ReactDOM使用camlCase将属性重命名，用来替代HTML属性名。</p>
<p>例如，class变成了className，tabindex变成了tabIndex。</p>
<h4>JSX可防御注入攻击</h4>
<p>在JSX里面嵌入用户信息相对安全</p>
<SyntaxHighlighter showLineNumbers={showLineNumbers} language={language} style={style}>{`
const title = response.pontentiallyMaliciousInput;
//This is safe;
const element = <h1>{title}</h1>;
`}</SyntaxHighlighter>
<p>默认情况下，ReactDOM在其渲染之前转义任意值并嵌入JSX中。因此它可以确保你绝不注射任何东西在你未明确写在要注射的应用程序，所有的东西都被转换成一个字符串直到要渲染的时候。这有助于防御XSS(跨域名脚本)攻击</p>
<h4>JSX的代表性对象</h4>
<p>Babel将JSX编译与React.createrElement()的区别</p>
<p>以下这两个例子是相同的。</p>
<SyntaxHighlighter showLineNumbers={showLineNumbers} language={language} style={style}>{`
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
`}</SyntaxHighlighter>
React.createElement()执行一些检查来帮助你来写无BUG代码，但是它本质上是创造了一个这样的对象。
<SyntaxHighlighter showLineNumbers={showLineNumbers} language={language} style={style}>{`
//Note:这个结构是简化的
const element={
  type:'h1',
  props:{
    className:'greeting',
    children:'Hello,world'
  }
}
`}</SyntaxHighlighter>
<p>这些对象叫做“React元素”，你可以想象他们作为描述你所想在屏幕上看到的，React 读取这些对象并用他们构建DOM并时刻保持更新。</p>
<p>我们将会在下一章节继续探索渲染React元素到DOM上面。</p>
<h4>Tip:</h4>
<p>建议您search一个叫"Babel"的语法格式来供你的编辑器选择，这样的话无论是ES6还是JSX代码都可以正确的高亮。</p>
</div>
<div class="col-sm-12">
<h3>渲染元素</h3>
<p>element是Reactapps里面最小的构建块。</p>
<p>把一个element写成你想要见到的样子，出现在屏幕上。</p>
<SyntaxHighlighter showLineNumbers={showLineNumbers} language={language} style={style}>{`
const element = <h1>Hello,world</h1>;
`}</SyntaxHighlighter>
<p>和浏览器的DOM不一样，React element是简单的对象，而且便于创造。React DOM负责更新DOM来和React element相匹配。</p>
<h4>Note:</h4>
<p>有人可能会混淆element与另一个更为人知的概念--components相混淆，我们将会在下一章节介绍components(组件)，组件由元素构成，本章以下内容希望你不要跳过。</p>
<h4>渲染一个元素到DOM上面</h4>
<p>这有一个&lt;div>在你的HTML文档中某一处</p>
<SyntaxHighlighter showLineNumbers={showLineNumbers} language={language} style={style}>{`
<div id="root"></div>
`}</SyntaxHighlighter>
<p>我们称它为'root'DOM节点，因为所有里面的东西都被ReactDOM掌控，用React构建的应用通常只有一个根DOM节点。如果你想要整合一个React到一个已经存在的app里面，你可能会有任意多个DOM根节点。如果你想要渲染一个React元素，请将两者都传递给ReactDOM.render();</p>
<SyntaxHighlighter showLineNumbers={showLineNumbers} language={language} style={style}>{`
const element = <h1>hello,world</h1>;
ReactDOM.render(
  element,
  document.getElementById('root')
);
`}</SyntaxHighlighter>
<p>你可以在<a href="https://codepen.io/gaearon/pen/rrpgNB?editors=1010">CodePen</a>里面尝试一下。</p>
<p>页面会显示“hello world！”</p>
<h4>更新已渲染的元素</h4>
<p>React元素是<a href="https://en.wikipedia.org/wiki/Immutable_object">immutable</a>(不可变的)，一旦你创建了一个元素，你不可改变他的子元素或者属性，一个元素就像电影中某一帧，他代表某一时间节点上面的UI，到目前为止根据我们的认知，唯一改变UI的方法就是创造一个新的元素并把他传递给ReactDOM.render()</p>
<p>思考下面这个时钟案例</p>
<SyntaxHighlighter showLineNumbers={showLineNumbers} language={language} style={style}>{`
function tick (){
  const element={
    <div>
      <h1>Hello,wrold!</h1>
      <h2>it is {new.Date().toLocaleTimeString()}.</h2>
    </div>
  };
  ReactDOM.render(
    element,
    document.getElementById('root')
  )
}
setInterval(tick,1000);
`}</SyntaxHighlighter>
<p>你可以在<a href="https://codepen.io/gaearon/pen/gwoJZk?editors=0010">CodePen</a>里面尝试一下。</p>
<p>它每秒都通过serInterval回掉函数执行一次ReactDOM</p>
<h4>Note:</h4>
<p>实际上，大多数Reactapp只呼叫一次ReactDOM.render(),再下一章节，我们将会学习如何将这些代码封装在组件里面.</p>
<h4>React只更新必需品。</h4>
<p>ReactDOM会拿它本身的元素及子元素去和上一个相比较，并且只应用更新必要的DOM使得DOM实现它想要的状态。</p>
<p>你可以用浏览器工具来检查最后一个例子</p>
<img src="https://facebook.github.io/react/img/docs/granular-dom-updates.gif"/>
<p>尽管我们创建了一个元素每秒来描述整个UI树，仅仅只有变化的文本节点会通过ReactDOM获得更新。</p>
<p>在我们的这些实验中，思考UI应该如何关注给定的时刻，而不是如何随着时间而改变它，从而消除了一类bug。</p>
</div>
<div class="col-sm-12">
<h3>Components(组件)和Props(道具)</h3>
<p>组件让你可以将整个UI分解成独立的可重复使用的，并且独立思考每一部分。</p>
<p>从概念上讲，组件像js函数，他们可以接受任意参数(props)并且返回那些将要出现在屏幕上面的React元素</p>
<h4>function组件和class组件</h4>
<p>最简单的去定义一个组件是写一个js函数</p>
<SyntaxHighlighter showLineNumbers={showLineNumbers} language={language} style={style}>{`
function Welcome(props){
  return <h1>Hello, {props.name}</h1>;
}
`}</SyntaxHighlighter>
<p>这个函数是一个有效的React组件因为它可以接受一个单一的'props'对象，参数携带数据并且返回一个React元素，我们叫这样的组件为函数化因为他是真真的js函数。</p>
<p>你也可以用ES6 class来定义一个组件:</p>
<SyntaxHighlighter showLineNumbers={showLineNumbers} language={language} style={style}>{`
class Welcome extends React.Component {
  render(){
    return <h1>Hello,{this.props.name}</h1>
  }
}
`}</SyntaxHighlighter>
<p>以上这两种组件从React的角度来看是相等的。</p>
<p>Classes有一些额外功能，下一章节会探讨。到目前为止，我们将会使用函数化组件，因为简洁。</p>
<h4>渲染一个组件</h4>
<p>上一章节，我们仅仅只遇到React元素的纯标签。</p>
<SyntaxHighlighter showLineNumbers={showLineNumbers} language={language} style={style}>{`const element = <div/>`}</SyntaxHighlighter>
<p>然而，元素也能扮演用户自定义组件。</p>
<SyntaxHighlighter showLineNumbers={showLineNumbers} language={language} style={style}>{`const element = <div name="Sara"/>`}</SyntaxHighlighter>
<p>当React看到一个元素有用户自定义组件，他会通过JSX属性来执行组件作为一个单一的对象，我们将这对象称之为props对象。</p>
<p>例如，下面这个，将会渲染"Hello,Sara"到页面上。</p>
<SyntaxHighlighter showLineNumbers={showLineNumbers} language={language} style={style}>{`
function Welcome(props){
  return <h1>hello,{props,name}</h1>
}

const element = <Welcome name="Sara"/>;
ReactDOM.render(
  element,
  document.getElementById('root')
)
`}</SyntaxHighlighter>
<p>你可以在<a href="https://codepen.io/gaearon/pen/YGYmEG?editors=0010">CodePen</a>里面尝试一下。</p>
<p>让我们大概分析一下，例子中到底发生了什么</p>
<ol type="1">
<li>我们调用ReactDOM.render(),里面带有<welcome name="Sara"/>元素</li>
<li>React调用welcome组件，并把{`name:'Sara'`}当作props。</li>
<li>我们的Welcome组件返回一个<h1>hello, Sara</h1>元素作为结果。</li>
<li>React DOM快速更新DOM来匹配<h1>hello, Sara</h1></li>
</ol>
<h4>警告：</h4>
<p>组件名称必须大写开头</p>
<p>例如<div/>是一个DOM标签,而&lt;Welcome/>是一个组件，并且需要Welcome作用。</p>
<h4>组件构成</h4>
<p>组件可以参照其他组件，在输出，这让我们用一样的组件</p>
<p>例如，我们可以创造一个App组件，他可以在Welcome组件里面渲染很多次。</p>
<SyntaxHighlighter showLineNumbers={showLineNumbers} language={language} style={style}>{`
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
`}</SyntaxHighlighter>
<p>你可以在<a href="https://codepen.io/gaearon/pen/KgQKPr?editors=0010">CodePen</a>里面尝试一下。</p>
<p>通常，新的React程序有一个单一的App组件在顶部。然而，如果你想把React整合到一个已经存在的app里面，你可能要开始一个按钮附带一个组件，像"Button"这样，并逐步工作到视图层次结构的顶部。</p>
<h4>警告：</h4>
<p>组件必须返回一个单一的根元素，这就是为什么我们上一个例子中要用一个div元素包裹所有的Welcome组件。</p>
<h4>提取组件</h4>
<p>不要害怕把组件split成更小的组件。</p>
<p>例如，思考一下下面这个Comment组件吧。</p>
<SyntaxHighlighter showLineNumbers={showLineNumbers} language={language} style={style}>{`
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
`}</SyntaxHighlighter>
<p>你可以在<a href="https://codepen.io/gaearon/pen/VKQwEo?editors=0010">CodePen</a>里面尝试一下。</p>
<p>它接收author(对象)，text(字符串)，date(数据)作为参数，并且描述一个评论在社交媒体网站</p>
<p>这个组件由于有很多嵌套，所以它难以修改，并且他的各个部分也很难重复利用，因此，建议从中提取一小部分组件。</p>
<p>首先我们会提取Avatar组件，</p>
<SyntaxHighlighter showLineNumbers={showLineNumbers} language={language} style={style}>{`
function Avatar(props){
  return (
    <img 
      src={props.author.avatarUrl}
      alt={prop.author.name} 
      className="Avatar"
    />
  )
}
`}</SyntaxHighlighter>
<p>这个Avatar不需要知道要被渲染在Comment的哪个地方。这也是为什么我们给他传递的参数是一个更加通用的名称user而不是author</p>
<p>我们建议命名参数的名字的时候应该从组件本身的角度来命名，而不是通过它正在使用的上下文。</p>
<p>我们现在可以开始简化Comment组件一丝丝。</p>
<SyntaxHighlighter showLineNumbers={showLineNumbers} language={language} style={style}>{`

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
`}</SyntaxHighlighter>
<p>接下来，我们将会提取一个UserInfo组件，这个组件会渲染一个Avatar组件在用户名后面。</p>
<SyntaxHighlighter showLineNumbers={showLineNumbers} language={language} style={style}>{`
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
`}</SyntaxHighlighter>
<p>这将会更加简化Comment组件</p>
<SyntaxHighlighter showLineNumbers={showLineNumbers} language={language} style={style}>{`
function Comment(props){
  return(
    <div className="Comment">
      <UserInfo user={props.author}/>
      <div className="Comment-text">{props.text}</div>
      <div className="Comment-date">{props.date}</div>
    </div>
  )
}
`}</SyntaxHighlighter>
<p>你可以在<a href="https://codepen.io/gaearon/pen/rrJNJY?editors=0010">CodePen</a>里面尝试一下。</p>
<p>刚开始的时候提取组件也许像是一件简单乏味的工作，但是拥有一个可重复使用的组件调色板，在更大的app中是会有很大回报的。一个很好的经验，如果你的UI的一部分被重复使用了很多次(Button,Panel,Avatar),或者它足够复杂(App,FeedStory,Comment),这种组件化仍旧是一种不错的选择，</p>
<h4>个人经验：</h4>
<p>从最开始的一个组件Comment,它拥有属性，author，我们给他赋予{`comment.author`}花括号开始用js解析，括号开始解析html，变量comment.text,于是这个属性就能传递下去，接下来看Comment组件的构成，他有一个props参数，先看里面Comment组件最简单的div元素，他直接赋予变量{`props.text`},这个变量props参数里面的text是从上一个Comment里面传递下来的参数，props.text，于是就会从之前里面去查询text属性，有，就看text属性等于comment.text，这就是最基本的传递参数。。拥有最基本的js概念就能看懂react了。花括号开始解析js，括号开始解析html，参数传递概念，传递的就是所运用的属性，但是不建议在每一个内嵌组件里面运用同样的属性，例如comment.author，已经有author，那么里面的内嵌组件UserInfo不建议再次使用author属性，防止js可读性降低，例如再次使用UserInfo.author.</p>
<h4>Props 是仅仅之能读取</h4>
<p>无论你function一个组件或者class一个组件，他必须是从不能修改他自己的props参数，思考一下下面这个sum函数吧。</p>
<SyntaxHighlighter showLineNumbers={showLineNumbers} language={language} style={style}>{`
function sum(a,b){
  return a+b;
}
`}</SyntaxHighlighter>
<p>这叫做纯函数'pure'，因为他们不会去改变他们的输入值，并且在同样参数的情况下会输出同样的结果。</p>
<p>下面例子刚好相反，因为他改变了他自己的输入。</p>
<SyntaxHighlighter showLineNumbers={showLineNumbers} language={language} style={style}>{`
function withdraw(account,amount){
  account.total -= amount;
}
`}</SyntaxHighlighter>
<p>React反应灵活，但是他有一个非常严格的规则：</p>
<p>所有React组件必须表现的像纯函数那样来尊重他们的props参数</p>
<p>当然，UI应用是动态的，并且时刻变化的，在下一章节，我们将会介绍一个新的概念'state',State允许所有的React组件随着时间和用户操作来响应，来改变通过用户行为和网络响应或者其他东西多次改变输出，但是不能改变这条规则。</p>
</div>
<div class="col-sm-12">
<h3>State和生命周期</h3>
<p>思考时钟这个例子，可以在前面几个章节查询一下。</p>
<p>到目前为止，我们唯一学过的更新UI的方式。</p>
<p>我们调用ReactDOM.render()来改变那些已经渲染过的输出。</p>
<SyntaxHighlighter showLineNumbers={showLineNumbers} language={language} style={style}>{`
function tick(){
  const element = (
    <div>
      <h1>hello,world!</h1>
      <h2>it is {new Date().toLocaleTimeString()}</h2>
    </div>
  );
  ReactDOM.render(
    element,
    document.getElementById('example')
  );
}
setInterval(tick,1000);
`}</SyntaxHighlighter>
<p>在这一章节，我们将会学习如何制作一个Clock组件,这组件将会真正的复用化封装化的。他将会设置自己的计时器，并每秒更新一次。</p>
<p>我们可以从封装时钟开始：</p>
<SyntaxHighlighter showLineNumbers={showLineNumbers} language={language} style={style}>{`
function Clock (props){
  return (
    <div>
      <h1>hello,world! </h1>
      <h2>it is {props.date.toLocaleTimeString()}</h2>
    </div>
  )
}
function tick(){
  ReactDOM.render(
    <Clock date={new Date()}/>,
    document.getElementById('example')
  );
}
setInterval(tick,1000);
`}</SyntaxHighlighter>
<p>然而，它忽略了一个关键的要求：事实上，Clock组件设置了一个计时器，并时刻更新UI，这要求他是一个Clock组件的实现细节。</p>
<p>更理想化的是，我们想要它写一次并且Clock组件可以自我更新。</p>
<SyntaxHighlighter showLineNumbers={showLineNumbers} language={language} style={style}>{`
ReactDOM.render(
  <Clock />,
  document.getElementById('example')
)
`}</SyntaxHighlighter>
<p>为了实现这个，我们需要加入一个'state'属性给Clock组件</p>
<p>State和props类似，但是他是私有化，并完全由组件控制。</p>
<p>我们<a href="https://facebook.github.io/react/docs/components-and-props.html#functional-and-class-components">之前</a>提到,组件被定义成类(classes)会多一些新增功能，局部state就恰好是一个只可用于类的特性。</p>
<h4>Function转化为Class</h4>
<p>你可以通过以下五个步骤，来让function转化成class</p>
<ol type="1">
<li>创造一个ES6的class，名字字样，然后加上extends React.Component.</li>
<li>增加一个单一的空的方法，让他可以调用render()</li>
<li>将所有div元素移入render()里面。</li>
<li>将props替换为this.props,并且放置在render()里面。</li>
<li>删除空的function声明。</li>
</ol>
<SyntaxHighlighter showLineNumbers={showLineNumbers} language={language} style={style}>{`
class Clock extends React.Component{
  render(){
    return(
      &le;div>
        <h1>Hello,world!</h1>
        <h2>It is {this.props.date.toLocaleTimeString()}.</h2>
      </div>
    )
  }
}
`}</SyntaxHighlighter>
<p>你可以在<a href="https://codepen.io/gaearon/pen/zKRGpo?editors=0010">CodePen</a>里面看看~</p>
<p>现在Clock被定义成一个class而不是一个function。</p>
<p>这让我们用一些新增的功能，例如local state，lifecycle hooks。</p>
<h4>将Local State添加到class里面</h4>
<p>我们将会通过下面三个步骤把date从props转化为state：</p>
<p>1)将this.props.date替换为this.state.date,在render()方法里面：</p>
<SyntaxHighlighter showLineNumbers={showLineNumbers} language={language} style={style}>{`
class Clock extends React.Component {
  render(){
    return(
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString().}</h2>
      </div>
    )
  }
}
`}</SyntaxHighlighter>
<p>2)添加一个类的构造函数并且指定初始化值this.state,super(props)出现的目的是为了this这个值能够使用，在子类constructor中必须先调用super才能调用this。</p>
<SyntaxHighlighter showLineNumbers={showLineNumbers} language={language} style={style}>{`
class Clock extends React.Component{
  constructor(props){
    super(props);
    this.state={date:new Date()}S
  }
  render(){
    return(
      <div>
        <h1>Hello,world!</h1>
        <h2>it is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
`}</SyntaxHighlighter>
<p>注意，我们是如何将porps参数传递给子类constructor的：</p>
<SyntaxHighlighter showLineNumbers={showLineNumbers} language={language} style={style}>{`
constructor(){
  super(props);
  this.state:{date:new Date()};
}
`}</SyntaxHighlighter>
<p>类组件应该经常调用基层constructor，通过props</p>
<p>3)将date属性从Clock元素中移除。</p>
<SyntaxHighlighter showLineNumbers={showLineNumbers} language={language} style={style}>{`
ReactDOM.render(
  <Clock/>,
  document.getElement('example')
)
`}</SyntaxHighlighter>
<p>接下来我们将会将计时器的代码重新加回给组件自身。</p>
<SyntaxHighlighter showLineNumbers={showLineNumbers} language={language} style={style}>{`
class Clock extends React.Component{
  constructor(){
    super(props);
    this.state={date:new Date()}
  }
  render(
    return(
      <div>
        <h1>Hello,world!</h1>
        <h2>it is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    )
  )
}
ReactDOM.render(
  <Clock/>,
  document.getElement('example')
)
`}</SyntaxHighlighter>
<p>现在Clock设置好了他自己的计时器，并时刻自我更新。</p>
<h4>增加lifecycle方法到class里面</h4>
<p>在一个应用，里面有很多组件，那么当应用销毁的时候，释放资源是非常重要的。</p>
<p>每当Clock组件第一次渲染在DOM上面，我们就像设置一个计时器，在React里面这个就叫做'mounting'。</p>
<p>我们也想清除计时器，每当这个Clock组件创造的DOM被移除的时候，这个在React里面叫做'unmounting'</p>
<p>我可以声明特殊方法在组件class里面，比如执行一些代码，当组件mounts或者unmounts的时候</p>
<SyntaxHighlighter showLineNumbers={showLineNumbers} language={language} style={style}>{`
class Clock extends React.Component{
  constructor(props){
    super(props);
    this.state = {date:new Date()};
  }
  componentDidMount(){
    //
  }
  componentWillUnmount(){
    //
  }
  render(){
    return (
      <div>
        <h1>Hello,world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    )
  }
}
`}</SyntaxHighlighter>
<p>这个方法叫做生命周期钩子'lifecycle hooks'.</p>
<p>componentDidMount()钩子在组件输出渲染到DOM之后运行，这是一个设置解释器的好地方。</p>
<SyntaxHighlighter showLineNumbers={showLineNumbers} language={language} style={style}>{`
componentDidMount(){
  this.timerID=serInterval(
    ()=>this.tick(),
    1000
  )
}
`}</SyntaxHighlighter>
<p>注意我们是如何正确保存timer ID在this中。</p>
<p>当this.props被React自己设置好后，this.state有了一个特殊的意义，你可以手动添加一些额外存储到class里面，如果你需要存储一些不需要可视化输出的东西。</p>
<p>如果你不需要使用一些东西在render()里面，他不应该在state里面。</p>
<p>我们将会拆除计时器在componentWillUnmount()生命钩子里面:</p>
<SyntaxHighlighter showLineNumbers={showLineNumbers} language={language} style={style}>{`
compinentWillUnmount(){
  clearInterval(this.timerID);
}
`}</SyntaxHighlighter>
<p>最终，我们将会完善tick()方法，让他运行每一秒。</p>
<p>他将会用到this.setState()来计划性更新component local state：</p>
<SyntaxHighlighter showLineNumbers={showLineNumbers} language={language} style={style}>{`
class Clock extends React.Component{
  constructor(props){
    super(props);
    this.state={date:new Date()};
  }
  componentDidMount(){
    this.timerId=setInterval(
      () => this.tick(),
      1000
    )
  }
  componentWillUnmout(){
    clearInterVal(this.tinerID);
  }
  tick(){
    this.setState({
      date:new Date()
    })
  }
  render(){
    return (
      <div>
        <h1>Hello,world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    )
  }
}
ReactDOM.render(
  <Clock />,
  document.getElementById("example")
);
`}</SyntaxHighlighter>
<p>现在，滴答时钟响应每一秒了。</p>
<p>让我们快速复述一次，到底发生了什么，以及方法调用的顺序。</p>
<p>1)当&lt;CLock/>被传递给ReactDOM.render()时,React调用Clock组件构造器，知道Clock需要显示当前时间，它初始化this.state通过一个对象包括当前时间，我们之后就会更新这个state。</p>
<p>2)React接着会调用Clock组件的render()方法，这就是React如何得知什么东西应该显示在屏幕上面。React接着会更新DOM来匹配Clock的渲染输出。</p>
<p>3)当Clock输出并且被嵌入到DOM中，React调用componentDidMount()lifecycle hook，其中，Clock组件请求浏览器来加载一个计时器来时刻调用tick()</p>
<p>4)每秒浏览器都会调用tick()方法,里面,Click组件安排UI更新通过调用setState(),通过一个对象包括当前时间，多亏了setState()的调用，React知道state已经被改变了，并且再次调用render()方法来得知什么需要显示在屏幕上。这个时候，this.state.date在render()方法里面将会不同，并且英雌渲染输出将会包括这个更新的时间，React也因此更新DOM。</p>
<p>5)如果Clock组件是曾经被从DOM中移除，React调用componentWillUnmount()生命钩子，以便于停止计时器。</p>
<h4>正确使用State</h4>
<p>这里有三件，你必须了解的关于setState().</p>
<h4>不要直接修改State</h4>
<p>例如，浙江不会再次渲染一个组件</p>
<SyntaxHighlighter showLineNumbers={showLineNumbers} language={language} style={style}>{`
//Wrong
this.state.comment = 'Hello';
`}</SyntaxHighlighter>
<p>相反，应该使用setState():</p>
<SyntaxHighlighter showLineNumbers={showLineNumbers} language={language} style={style}>{`
//Correct
this.setState({comment:'Hello'});
`}</SyntaxHighlighter>
<p>你只能在constructor里面给this.state赋值。</p>
<h4>State更新也许是异步的</h4>
<p>React也许会调用多个setState()来进行一次性能更新。</p>
<p>因为this.props和this.state是异步的，你应该不依赖他们的值来计算下一个state。</p>
<p>例如，这个代码是错误的来更新counter</p>
<SyntaxHighlighter showLineNumbers={showLineNumbers} language={language} style={style}>{`
//wrong
this.setState({
  counter:this.state.counter+this.props.increment,
})
`}</SyntaxHighlighter>
<p>来修复他把，用setState()的另一种形式来接受一个函数而不是一个对象，这个函数将会接受之前的state来作为第一个argument，并且props在这个时间将会依赖第二个argument来更新</p>
<SyntaxHighlighter showLineNumbers={showLineNumbers} language={language} style={style}>{`
//Correct
this.setState((prevState,props) => ({
  counter:prevState.counter + props.increment
}));
`}</SyntaxHighlighter>
<p>上边例子我们用一个箭头函数，但是它的依赖一般函数来运转。</p>
<SyntaxHighlighter showLineNumbers={showLineNumbers} language={language} style={style}>{`
//Correct
this.setState(function(prevState,props){
  return {
    counter: prevState.counter + props.increment
  }
})
`}</SyntaxHighlighter>
<h4>state 更新合并</h4>
<p>当你调用<code>setState()</code>,<code>React</code>合并这个对象，你提供的当前state.</p>
<p>例如，你的state也许包含数个独立的变量。</p>
<SyntaxHighlighter showLineNumbers={showLineNumbers} language={language} style={style}>{`
constructor(props){
  super(props);
  this.state = {
    props:[],
    comments:[]
  };
}
`}</SyntaxHighlighter>
<p>那么你可以独立的更新他们通过分开的setState()调用：</p>
<SyntaxHighlighter showLineNumbers={showLineNumbers} language={language} style={style}>{`
componentDidMount(){
  fetchPosts().then(response => {
    this.setState({
      posts: response.posts
    });
  });
  fetchComments().then(response => {
    this.setState({
      comments: response.comments
    });
  });
}
`}</SyntaxHighlighter>
<p>这个合并是很浅显的，所以this.setState({`{comments}`})完整的分离了this.state.posts,并且完全取代了this.state.comments.</p>
<h4>数据流</h4>
<p>既不是父元素或者子元素组件可以知道，如果一个确定的组件是有状态或者无状态的，并且他们不应该在意，不管他是被定义成一个函数或者一个class.</p>
<p>这就是为什么state时常被调用在本地或者被封装，它是不被一些组件访问，除了一些他自己或者它设置的。</p>
<p>一个组件也许是选择当作props来传递他的state给他自己的子组件。</p>
<SyntaxHighlighter showLineNumbers={showLineNumbers} language={language} style={style}>{`
<h2>It is {this.state.date.toLocaleTimeString()}.</h2>
`}</SyntaxHighlighter>
<p>他也为未定义组件工作。</p>
<SyntaxHighlighter showLineNumbers={showLineNumbers} language={language} style={style}>{`
<FormattedDate date={this.state.date} />
`}</SyntaxHighlighter>
<p>这个FormattedDate组件将会接受这个date在他自己的props并且不知道它来自于Clock的state或者来自于Clock的props或者是手写的：</p>
<SyntaxHighlighter showLineNumbers={showLineNumbers} language={language} style={style}>{`
function FormattedDate(props){
  return &ltl;h2>It is {props.date.toLocaleTimeString()}.</h2>
}
`}</SyntaxHighlighter>
<p>这一般叫做‘top-down’或者“unidirectional”数据流。一些state经常备用有，通过一些特定的组件，而且许多数据或者UI得到的state只能影响以下的组件，在这个结构树中。</p>
<p>如果你想一个组件书作为一种瀑布props，每个组件的state像一个新增的资源刘，可以加入它作为一个运动点也作为一个流动的。</p>
<p>为了展示所有的组件都孤立了，我们可以创造一个app组件渲染3个Clock</p>
<SyntaxHighlighter showLineNumbers={showLineNumbers} language={language} style={style}>{`
function App(){
  return(
    <div>
      <Clock/>
      <Clock/>
      <Clock/>
    </div>
  )
}
ReactDOM.render(
  <App/>,
  document.getElementById('example')
)
`}</SyntaxHighlighter>
<p>每一个Clock设置了他们自己的计时器并且独立更新。</p>
<p>在React app，无论组件是有状态或者无状态，被考虑成一个组件的实现细节，他可能时刻改变。你可以用无状态组件在有状态组件里面，反之亦然。</p>
</div>
<div class="col-sm-12">
<h3>处理事件</h3>
<p>处理React元素的事件，和处理DOM元素事件很像，这里有一些语法不一致</p>
<ul>
<li>React事件是驼峰命名，而不是小写</li>
<li>通过JSX，你传递了一个函数作事件处理，而不是一个字符串。</li>
</ul>
<p>例如,下面两个HTML和React对比</p>
<SyntaxHighlighter showLineNumbers={showLineNumbers} language={language} style={style}>{`
<button onclick="activateLasers()">
  Active Lasers
</button>
`}</SyntaxHighlighter>
<p>有轻微的不同在React里面</p>
<SyntaxHighlighter showLineNumbers={showLineNumbers} language={language} style={style}>{`
<button onclick="{activateLasers}">
  Activate Lasers
</button>
`}</SyntaxHighlighter>
<p>另外一个不同是不能输出false来阻止不履行行为在React里面，你必须明确的调用preventDefault，例如，为了阻止HTML里面a标签的默认事件，你可以做以下代码</p>
<SyntaxHighlighter showLineNumbers={showLineNumbers} language={language} style={style}>{`
<a href="#" onclick="console.log('the link was clicked.'); return false">Click me</a>
`}</SyntaxHighlighter>
<p>在react里面，应该这么写</p>
<SyntaxHighlighter showLineNumbers={showLineNumbers} language={language} style={style}>{`
function ActionLink(){
  function handleClick(e){
    e.preventDefault();
    console.log("The link was Clicked!")
  }

  return (
    <a href="#" onclick={handleClick}>
      Click me
    </a>
  )
}
`}</SyntaxHighlighter>
<p>这里e是一个合成的事件，React丁一这些合成事件通过W3C标准，所以你不用担心浏览器兼容问题，去看一下<a href="https://facebook.github.io/react/docs/events.html">SyntheticEvent</a>文献来指导你学习。</p>
<p>当使用React你通常不用调用addEventListener来增加DOM元素的监听，在他被创造之后，相反的，只要提供一个监听器当元素被初始化渲染。</p>
<p>当你定义一个组件用ES6class，通常模式是在class上使用时间处理器来作为一个方法。例如，这个Toggle组件渲染一个按钮，让使用者在ON和OFF之间切换。</p>
<SyntaxHighlighter showLineNumbers={showLineNumbers} language={language} style={style}>{`
class Toggle extends React.Component{
  constructor(props){
    super(props);
    this.state = {isToggleOn:true};

    //这个绑定是必须的 来制作this通过回调来作用
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(){
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }
  render(){
    <button>
      {this.state.isToggleOn ? 'No' : 'OFF'}
    </button>
  }
}
ReactDOM.render(
  <Toggle />,
  document.getElementById('example')
)
`}</SyntaxHighlighter>
<p>你不得不小心，关于this在JSX回调里面的含义。在js，class方法是不不被default绑定，如果你忘记绑定this.handleClick,并且传递它到onclick，this将会undefined，当函数被调用的时候。</p>
<p>这不是React的特定行为，这是function在js中运行的一部分，一般来说，如果你提到方法，不用()在这之后，例如onclick={this.handleClick},你必须绑定这个方法。</p>
<p>如果调用bind困扰你，这里有两条路你可以绕过，，如果你用实验，你可以用property初始化来准确绑定回调</p>
<SyntaxHighlighter showLineNumbers={showLineNumbers} language={language} style={style}>{`
class LoggingButton extends React.Component{
  //这个语法确保this是绑定在handleClick里面
  //注意：this是实验性语法
  handleClick() => {
    console.log('this is:',this);
  }
  render(){
    return (
      <button onclick={this.handleClick}>
        Click me
      </button>
    )
  }
}
`}</SyntaxHighlighter>
<p>在默认情况下启动该语法在<a href="https://github.com/facebookincubator/create-react-app">Create React App</a></p>
<p>如果你不用属性初始化语法，你可以用一个箭头函数在回调里面。</p>
<SyntaxHighlighter showLineNumbers={showLineNumbers} language={language} style={style}>{`
class LoggingButton extends React.Component{
  handleClick(){
    console.log('this is:',this);
  }
  render(){
    //这个语法确保this被绑定在handleClick内
    return(
  <button onclick={(e) => this.handleClick(e)}>
    Click me
  </button>
    )
  }
}
`}</SyntaxHighlighter>
<p>这个问题带有这些语法，是一个不同的回调。在大多数情况，这是OK的，然而，如果这个回调被作为一个prop来传递给内部组件，这些组件也许会做多一个额外的重复渲染，我们通常建议绑定在构造器或者用属性初始化语法，来避免这类性能问题。</p>
</div>
<div class="col-sm-12">
<h3>有条件的渲染</h3>
<p>在react，你可以创建一个独特的组件，封装一些你需要的行为，然后，你可以只渲染他，这取决于你的应用的state。</p>
<p>有条件的渲染在react里面，工作于同一种条件工作于js，用js运算符，像if这样的，或者条件运算符<code>condition ? expr1 : expr2</code>来创建元素来呈现当前state，并且让React更新UI来匹配他们。</p>
<p>思考这两个组件:</p>
<SyntaxHighlighter showLineNumbers={showLineNumbers} language={language} style={style}>{`
function UserGreeting(props){
  return <h1>Welcome back!</h1>;
}
function GuestGreeting(props){
  return <h1>Please sign up.</h1>;
}
`}</SyntaxHighlighter>
<p>我们将会创建一个Greeting组件，会显示，无论用户登录与否:</p>
<SyntaxHighlighter showLineNumbers={showLineNumbers} language={language} style={style}>{`
function Greeting(props){
  const isLoggedIn = props.isLoggedIn;
  if(isLoggedIn){
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}
ReactDOM.render(
//Try changing to isLoggedIn = {true};
<Greeting isLoggedIn={false} />,
document.getElementById('root')
)
`}</SyntaxHighlighter>
<p>这个例子渲染了两个不同的greeting，依靠isLoggedIn给prop传递的值。</p>
<h4>元素变量</h4>
<p>你可以用变量储存元素，这可以帮助你有条件的渲染组件的一部分，当输出的一部分不用改变的时候。</p>
<SyntaxHighlighter showLineNumbers={showLineNumbers} language={language} style={style}>{`
function LoginButton(props){
  return (
  <button onClick={props.onClick}>
    Login
  </button>
  )
}
function LogoutButton(props){
  return (
  <button onClick={props.onClick}>
    Logout
  </button>
  )
}
`}</SyntaxHighlighter>
<p>在下面这个例子，我们将会创造一个有状态的组件被LoginControl调用。</p>
<p>它将会渲染<code>&lt;LoginButton /></code>和<code>&lt;LogoutButton /></code>,并且去取决于他们当前的状态，它也会渲染一个<code>&lt;Greeting/></code>,请查看之前的例子。</p>
<SyntaxHighlighter showLineNumbers={showLineNumbers} language={language} style={style}>{`
class LoginControl extends React.Component{
  constructor(props){
    super(props);
  this.handleLoginClick = this.handleLoginClick.bind(this);
  this.handleLogoutClick = this.handleLogoutClick.bind(this);
  this.state = {isLoggedIn:false}
  }
  handleLoginClick(){
    this.setState({isLoggedIn:true});
  }
  handleLogoutClick(){
    this.setState({isLoggedIn:false});
  }
  render(){
    const isLoggedIn = this.state.isLoggedIn;
    let button = null;
    if(isLoggedIn){
      button = <LogoutButton onClick={this.handleLogoutClick}/>;
    }else{
      button = <LogoutButton onClick={this.handleLoginClick}/>;
    }
    return (
    <div>
      <Greeting isLoggedIn={isLoggedIn}/>
      {buttton}
    </div>
    )
  }
}

ReactDOM.render(
<LoginControl/>,
document.getElementById('example')
)
`}</SyntaxHighlighter>
<p>当声明一个变量并且用if来陈述是一个好的方式来条件化的渲染一个组件，有时候，你也许想要用一个更短的语法。有几个内联条件的JSX，下面解释一下。</p>
<h4>内联if带有逻辑运算符&&</h4>
<p>你可能会在JSX中嵌入任何表达式，通过将它们封装在{}中。这个包括了js&&逻辑运算符。他可以便捷的有条件的报过一个元素。</p>
<SyntaxHighlighter showLineNumbers={showLineNumbers} language={language} style={style}>{`
function Mailbox(props){
  const unreadMessages = props.unreadMessage;
  return(
  <div>
    <h1>Hello!</h1>
    {unreadMessage.length > 0 &&
      <h2>
        You have {unreadMessages.length} unread message.
      </h2>
    }
  </div>
  )
}
const message = ['React','Re: React','Re:Re: React'];
ReactDOM.render(
<Mailbox unreadMessage={message}/>,
document.getElementById('example')
)
`}</SyntaxHighlighter>
<p>在js里面这个是可以运行的，<code>true && expression</code>等价于<code>expression</code>,<code>false && expression</code>等价于<code>false</code>.</p>
<p>因此，如果条件为ture，这个元素在&&后面的会输出，反之相反，React会跳过它。</p>
<h4>内联if-else条件运算符</h4>
<p>另一个方法，渲染内联元素，可以使用js条件运算符<code>condition ? true : false</code></p>
<p>在下面这个例子，我们用它条件化渲染一个小块</p>
<SyntaxHighlighter showLineNumbers={showLineNumbers} language={language} style={style}>{`
render(){
  const isLoggedIn = this.state.isLoggedIn;
  return (
  <div>
    The user is <b>{isLoggedIn ? 'currently' : 'not'}</b> logged in.
  </div>
  )
}
`}</SyntaxHighlighter>
<p>他也经常被用来给一些大的表达式，尽管他明显小于接下来的</p>
<SyntaxHighlighter showLineNumbers={showLineNumbers} language={language} style={style}>{`
render(){
  const isLoggedIn=this.state.isLoggedIn;
  return (
  <div>
    {isLoggedIn ?(
      <LogoutButton onClick={this.handleLogoutClick}/>
    ):(
      <LogoutButton onClick={this.handleLoginClick}/>
    )}
  </div>
  )
}
`}</SyntaxHighlighter>
<p>就像在js里面，这取决于你选择一个适当的风格基于，基于你和你的团队考虑让他更具可读性。也要记得，无论条件变得过于复杂，这可能是一个好时机来精炼一个函数。</p>
<h4>Preventing组件渲染</h4>
<p>在极少数情况，你可能想要一个组件隐藏他自己，甚至他是被另一个组件渲染，来实现这个可以通过返回<code>null</code>替代他的渲染输出。</p>
<p>在下面这个例子，<code>&lt;WarningBanner /></code>是被渲染，取决于这个prop调用的<code>warn</code>值，如果这个prop的值是<code>false</code>,那么组件不会被渲染。</p>
<SyntaxHighlighter showLineNumbers={showLineNumbers} language={language} style={style}>{`
function WarningBanner(props){
  if(!props.warn){
    return null;
  }
  return(
  <div className="warning">
    Warning!
  </div>
  )
}

class Page extends React.Component{
  constructor(props){
    super(props);
    this.state={showWarning:true}
    this.handleToggleClick = this.handleToggleClick.bind(this)
  }
  handleToggleClick(){
    this.setState(prevState =>({
      showWarning:!prevState.showWarning
    }))
  }
  render(){
    return(
    <div>
      <WarningBanner warn={this.state.showWarning} />
      <button onClick={this.handleToggleClick}>
        {this.state.showWarning ? 'Hide' : 'Show'}
      </button>
    </div>
    )
  }
  ReactDOM.render(
  <Page />
  ,document.getElementById('root')
  )
}
`}</SyntaxHighlighter>
<p>返回<code>null</code>,来自组建的<code>render</code>方法不影响组件的生命周期方法。例如<code>componentWillUpdate</code>和<code>componentDidUpdate</code>仍被调用。</p>
</div>
<div class="col-sm-12">
<h3>列表和键值<a class="hash-link" href="#key">#</a></h3>
<p>首先，让我们回顾，你如何转换列表到js里面</p>
<p>下面代码，我们用<code>map()</code>函数来吧一个数组<code>numbers</code>并把他的值双倍。我们加入新数组，通过<code>map()</code>讲新数组返回给<code>doubled</code>并且<code>console.log</code>他。</p>
<SyntaxHighlighter showLineNumbers={showLineNumbers} language={language} style={style}>{`
const numbers = [1,2,3,4,5];
const doubled = number.map((number) => number*2);
console.log(doubled);
`}</SyntaxHighlighter>
<p>这代码会输出<code>[2,4,6,8,10]</code></p>
<p>在React里面，将数组转化成元素列表是等价转换。</p>
<h4>渲染多个组件</h4>
<p>你可以建立一个元素收集器并且用{}将他们包括在JSX里面</p>
<p>下面，我们循环<code>numbers</code>数组，通过js <code>map()</code>函数，我们可以返回一个<code>&lt;li></code>元素，给每个数组，最终，我们将会分配这些数组给<code>listItems</code>:</p>
<SyntaxHighlighter showLineNumbers={showLineNumbers} language={language} style={style}>{`
const numbers = [1,2,3,4,5];
const listItems = numbers.map((number) => 
<li>{number}</li>
);
ReactDOM.render(
<ul>{listItems}</ul>,
document.getElementById('root')
);
`}</SyntaxHighlighter>
<p>这个代码会显示1到5</p>
<h4>基础列表组件</h4>
<p>经常，你可能会把列表渲染到一个组件上面。</p>
<p>我们可以重构上一个例子，通过一个组件，接受一个数组<code>numbers</code>并且输出一个无序列表元素。</p>
<SyntaxHighlighter showLineNumbers={showLineNumbers} language={language} style={style}>{`
function NumberList(props){
  const numberts = props.numbers;
  const listItems = numbers.map((number) =>
    <li>{number}</li>
  );
  return (
    <ul>{listItems}</ul>
  );
}
const numbers = [1,2,3,4,5];
ReactDOM.render(
  <NumberLish number={numbers} />,
  document.getElementById('root')
);
`}</SyntaxHighlighter>
<p>当你运行这个代码，你将会得到一个警告，一个兼职应该提供给这个列表项。一个'Key'兼职是一个特殊的字符串属性，你应该包括，每当创建一个列表元素，我们将会讨论，为什么这个这个重要，在下一个章节。</p>
<p>让我们加入一个<code>key</code>到我们列表项目通过<code>numbers.map()</code>,并且修复这个丢失键值的错误</p>
<SyntaxHighlighter showLineNumbers={showLineNumbers} language={language} style={style}>{`
function NumberList(props){
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    <li key={number.toString()}>
      {number}
    </li>
  );
  return (
    <ul>{listItems}</ul>
  );
}
const numbers = [1,2,3,4,5];
ReactDOM.render(
  <NumberList numbers = {numbers} />,
  document.getElementById('root')
);
`}</SyntaxHighlighter>
<p>当你运行这段代码的时候，你将会得到一个warning，你需要提供一个key给列表项。"key"是一个特殊的字符串属性，你需要囊括的，当你创建一个元素列表，我们将会讨论在下一章节，问什么这个key这么重要。</p>
<p>让我们加入一个key给我们的列表项，来修复这个丢失key的错误。</p>
<SyntaxHighlighter showLineNumbers={showLineNumbers} language={language} style={style}>{`
function NumberList(props){
  const numbers = props.numbers;
  const listItems = numbers.map((number) => 
    <l1 key={number.toString()}>
      {number}
    </l1>
  )
  return (
    <ul>{listItem}</ul>
  );
}
const numbers = [1,2,3,4,5];
ReactDOM.render(
  <NumberList number={number}/>,
  document.getElementById('root')
);
`}</SyntaxHighlighter>
<h3>Keys</h3>
<p>Keys帮助React识别身份，每当item改变，增减的时候。Keys应该被提供给元素一个稳定的身份。</p>
<SyntaxHighlighter showLineNumbers={showLineNumbers} language={language} style={style}>{`
const numbers = [1,2,3,4,5];
const listItems = numbers.map((number) =>
  <li key={number.toString()}>
    {number}
  </li>
)
`}</SyntaxHighlighter>
<p>最好的方式来得到一个key是用一个字符串，可以独特的识别一个列表项，与他的兄弟元素对比。大多数时候，你会用IDs来自于你的数据来当做keys</p>
<SyntaxHighlighter showLineNumbers={showLineNumbers} language={language} style={style}>{`
const todoItems = todos.map((todo) =>
  <li key={todo.id}>
    {todo.text}
  </li>
)
`}</SyntaxHighlighter>
<p>当你不有合适的IDs来渲染这些数列，你可以用项目索引当作为key来作为最后的手段。</p>
<SyntaxHighlighter showLineNumbers={showLineNumbers} language={language} style={style}>{`
const todoItems = todos.map((todo,index) => 
  //只做this，如果项目没有合适IDs
  <li key={index}>{todo.text}</li>
)
`}</SyntaxHighlighter>
<p>如果项目可以重新排序，我们不考虑使用索引来当做keys，这样会很慢。你也许可以阅读一篇文章<a href="https://facebook.github.io/react/docs/reconciliation.html#recursing-on-children">深入解释why keys是必须</a>如果你有兴趣。</p>
<h4>通过Keys提取组件</h4>
<p>Keys只在周围数组的内容中有意义。为什么呢，因为原文：Keys only make sense in the context of the surrounding array.我真心看不懂翻译软件也不行，surrounding array到底什么意思。</p>
<p>例如，如果你提取一个<code>ListItem</code>组件，你应该将key放在<code>&lt;ListItem/></code>元素的数组里面，而不是在他本身的根元素<code>&lt;li></code>里面。</p>
<h4>例子：不正确的Key用法</h4>
<SyntaxHighlighter showLineNumbers={showLineNumbers} language={language} style={style}>{`
function ListItem(props){
  const value = props.value;
  return(
    //错误用法！不需要将key放置这里。
    <li key={value.toString()}>
      {value}
    </li>
  );
}
function NumberList(props){
  const number = props.numbers;
  const listItems = number.map((number) =>
    //错误！key属性应该在这里被指定。
    <ListItem value={number} />
  );
  return (
    <ul>{listItems}</ul>
  )
}
const numbers = [1,2,3,4,5];
ReactDOM.render(
  <NumberList number={numbers} />,
  document.getElementById('root')
);
`}</SyntaxHighlighter>
<p>举栗：正确的Key用法</p>
<SyntaxHighlighter showLineNumbers={showLineNumbers} language={language} style={style}>{`
function ListItem(props){
  //正确！这里不需要key在这里
  return <li>{props.value}</li>
}
function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) => 
    //正确！Key应该被设置在数组里面。
    <ListItem key={number.toString()} value={number}/>
  );
  return (
    <ul>{listItems}</ul>
  );
}
const number = [1,2,3,4,5];
ReactDOM.render(
  <NumberList numbers={numbers}/>,
  document.getElementById('root')
)
`}</SyntaxHighlighter>
<p>一个比较好的经验法则，就是<code>map()</code>的调用需要key（键值）。</p>
<h4>keys在它相邻的元素中应该是独一无二的</h4>
<p>在数组中使用Keys必须是唯一的。然而，我们不需要全局的独一无二，我们可以在两个不同数组中使用同一个键值：</p>
<SyntaxHighlighter showLineNumbers={showLineNumbers} language={language} style={style}>{`
cont posts = [
  {id:1,title:'Hello World',content:'welcome to learn React!'},
  {id:2,title:'Installation',content:'You can install React from npm.'}
];
function Blog(props){
  const sidebar = (
    <ul>
      {props.posts.map((post) => 
        <li key={post.id}>
          {props.title}
        </li>
      )}
    </ul>
  )
  const content = props.posts.map((post) =>
    <div key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
    </div>
  )
  return (
    {sidebar}
    <hr/>
    {content}
  )
}
ReactDOM.render(
  <Blog posts={posts}/>,
  document.getElementById('root')
)
`}</SyntaxHighlighter>
<p>在<a href="https://codepen.io/gaearon/pen/NRZYGN?editors=0010" target="_blank">CodePen</a>试试吧！</p>
<p>Keys给React提供了一些提示，但它不传递给组件。如果你想传，那看下面代码啊</p>
<SyntaxHighlighter showLineNumbers={showLineNumbers} language={language} style={style}>{`
function content = posts.map((post) => 
  <Post
    key={post.id}
    id={post.id}
    title={post.title}
  />
);
`}</SyntaxHighlighter>
<p>上述例子，Post组件可以读取<code>posts.id</code>,但不能读取<code>posts.key</code>.</p>
<h3>在JSX里面内嵌map()</h3>
<p>在上述例子我们声明了一个<code>listItems</code>变量，并且将他包括在JSX里面：</p>
<SyntaxHighlighter showLineNumbers={showLineNumbers} language={language} style={style}>{`
function NumberList(props){
  const numbers = props.numbers;
  const listItems = numbers.map((number) => 
    <ListItem key={number.toString()} value={number}/>
  )
};
return(
  <ul>
    {listItems}
  </ul>
)
`}</SyntaxHighlighter>
<p>JSX允许嵌入任何表达式在花括号中，所以我们可以内联<code>map()</code>的结果：</p>
<SyntaxHighlighter showLineNumbers={showLineNumbers} language={language} style={style}>{`
function NumberList(props){
  const numbers = props.numbers;
  return (
    <ul>
      {number.map((number) => 
        <ListItem key={number.toString()} value={number} />
      )}
    </ul>
  )
}
`}</SyntaxHighlighter>
<p>在<a href="https://codepen.io/gaearon/pen/BLvYrB?editors=0010" target="_blank">CodePen</a>里面试试吧！</p>
<p>有时候，这可以是更加清晰的代码，但样式也可能被滥用，就像在js里面，这取决于你的决定是否为了可读性而提取一个变量。记住，如果map()的主体是嵌套的，这可能就需要去提取一个组件了。</p>
</div>
<div class="col-sm-12">
<h3>Forms</h3>
<p>in React,HTML form元素和HTML的其他元素相比，工作方式略有不同，应为表格元素天然的保存一些internal状态，例如，下面这个表格就是为了HTML接受一个单一的名字。</p>
<SyntaxHighlighter showLineNumbers={showLineNumbers} language={language} style={style}>{`
<form>
  <label>
    Name:
    <input type="text" name="name">
  </label>
  <input type="submit" value="Submit">
</form>
`}</SyntaxHighlighter>
<p>当用户提交信息的时候，这个表格有默认的浏览器行为来跳到新页面。如果你想要在React里面也有这个行为，他只是运行。但是在大多数例子里面。如果让js函数来处理表单提交，并且接受用户输入的数据，这是很方便的。标准方式来获取这个可以通过一个技巧“控制组件”</p>
<h4>受控的组件</h4>
<p>在HTML里面，表单元素例如<code>&lt;input></code><code>&lt;textarea></code>和<code>&lt;select></code>经常维护他们自己的状态并且基于用户输入来更新。in react，可变的状态通常保存在组件的state属性里面，并且只能用<code>setState()</code>来更新。</p>
<p>我们可以将两者结合起来，使React state成为“单一来源的真理”。所以，React组件渲染一个表格同时也控制用户表格输入。一个输入表格元素的值同时也被react控制着，这种方式叫做“controlled component”。</p>
<p>例如。如果你想使得上一个例子输出名字，当用户提交的时候。我们可以写表格，按照一个控制组件来写。</p>
<SyntaxHighlighter showLineNumbers={showLineNumbers} language={language} style={style}>{`
calss NmaeForm extends React.Component {
  constructor(props){
    super(props);
    this.state={value:''}
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event){
    this.setState({value:event.target.value});
  }
  handleSubmit(event){
    alert('A name was submit: '+this.state.value);
    event.preventDefault()
  }
  render(){
    return (
    <form onSubmit={this.handleSubmit}>
      <label>
        Name:
        <input type="text" value={this.state.value} onChange={this.handleChange}>
      </label>
      <input type="submit" value="Submit" />
    </form>
    )
  }
}
`}</SyntaxHighlighter>
<p>直到<code>value</code>属性被设置在我们的表格元素中，它显示的值永远是<code>this.state.value</code>，使得React状态准确。直到<code>handleChange</code>运行，使得每一个键盘敲击都会更新React状态，这个显示的值会按照用户种类进行更新。</p>
<p>with一个被控制的组件，每一个state的变化都会有一个被关联的函数处理器。这使得它更简单的修改或者验证用户输出。举栗，如果我们想强制用户大写字母，我们可以将<code>handleChange</code>这样写:</p>
<SyntaxHighlighter showLineNumbers={showLineNumbers} language={language} style={style}>{`
handleChange(event){
  this.setState({value:e.target.value.toUpperCase()});
}
`}</SyntaxHighlighter>
<h4>textarea标签</h4>
<p>在HTML，一个<code>&lt;textarea></code>这样写:</p>
<SyntaxHighlighter showLineNumbers={showLineNumbers} language={language} style={style}>{`
<textarea>Hello there, this is some text in a text area</textarea>
`}</SyntaxHighlighter>
<p>in React，一个<code>{`<textarea/>`}</code>用一个<code>value</code>属性代替。这样，一个表单用一个<code>{`<textarea/>`}</code>，可以写成非常相似于一个表单，这样使用单行输出。</p>
<SyntaxHighlighter showLineNumbers={showLineNumbers} language={language} style={style}>{`
calss NmaeForm extends React.Component {
  constructor(props){
    super(props);
    this.state={value:'please write an essay about your favorite DOM element!'};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event){
    this.setState({value:event.target.value});
  }
  handleSubmit(event){
    alert('A name was submit: '+this.state.value);
    event.preventDefault()
  }
  render(){
    return (
    <form onSubmit={this.handleSubmit}>
      <label>
        Name:
        <textarea value={this.state.value} onChange={this.handleChange}/>
      </label>
      <input type="submit" value="Submit" />
    </form>
    )
  }
}
`}</SyntaxHighlighter>
<p>注意了，<code>this.state.value</code>在constructor中初始化，所以里面有一些内容。</p>
<h4>select标签</h4>
<p>在HTML,<code>&lt;select></code>创建了一个下拉列表，</p>
<SyntaxHighlighter showLineNumbers={showLineNumbers} language={language} style={style}>{`
<select>
  <option value="grapefruit">Grapefruit</option>
  <option value="lime">Lime</option>
  <option selected value="coconut">Coconut</option>
  <option value="mango">Mango</option>
</select>
`}</SyntaxHighlighter>
<p>注意，这个Coconut是最初选项，因为他有<code>selected</code>属性，in React,替代selected属性的是，使用一个<code>value</code>属性在他的根标签，<code>select</code>里面。这样在一个控制组件里面更便捷，因为你只需要更新一个地方。下面代码例子：</p>
<SyntaxHighlighter showLineNumbers={showLineNumbers} language={language} style={style}>{`
calss FlavorForm extends React.Component {
  constructor(props){
    super(props);
    this.state={value:'coconut'};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event){
    this.setState({value:event.target.value});
  }
  handleSubmit(event){
    alert('A name was submit: '+this.state.value);
    event.preventDefault()
  }
  render(){
    return (
    <form onSubmit={this.handleSubmit}>
      <label>
        Pick your favorite La Croix flavor:
        <select value={this.state.value} onChange={this.handleChange}>
          <option value="grapefruit">Grapefruit</option>
          <option value="lime">Lime</option>
          <option value="coconut">Coconut</option>
          <option value="mango">Mango</option>
        </select>
      </label>
      <input type="submit" value="Submit" />
    </form>
    )
  }
}
`}</SyntaxHighlighter>
<p>你可以在<a href="https://codepen.io/gaearon/pen/JbbEzX?editors=0010">CodePen</a>里面尝试一下</p>
<p>以上，这使得<code>&lt;input type="text"></code><code>&lt;textarea/></code><code>&li;select></code>全部都工作很相似，他们都接受一个<code>value</code>属性，你可以用它来实现一个控制组件。</p>
<h4>处理多个inputs</h4>
<p>当你需要处理多个被控制的<code>input</code>元素，你可以加入一个<code>name</code>属性给每个元素，并且让函数处理器来基于<code>event.target.name</code>来做一些事情。</p>
<SyntaxHighlighter showLineNumbers={showLineNumbers} language={language} style={style}>{`
class EssayForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isGoing: true,
      numberOfGuests: 2
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.check : target.value;
    const name = target.name;
    this.setState({[name]: value});
  }
  render() {
    return (
      <form>
        <label>
          is going:
          <input 
            name="isGoing" 
            type="checkbox" 
            checked={this.state.isGoing}
            onChange={this.handleChange}/>
        </label>
        <br/>
        <label>
          Number of guests:
          <input 
            name="numberOfGuests" 
            type="number" 
            checked={this.state.numberOfGuests}
            onChange={this.handleChange}/>
        </label>
      </form>
    );
  }
}
`}</SyntaxHighlighter>
<p>注意，我们是如何使用ES6的<a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Object_initializer#Computed_property_names">computed property name</a>语法来更新state的键值，并相应的给定输出名称：</p>
<SyntaxHighlighter showLineNumbers={showLineNumbers} language={language} style={style}>{`
this.setState({
  [name]:value
})
`}</SyntaxHighlighter>
<p>same to es5 below</p>
<SyntaxHighlighter showLineNumbers={showLineNumbers} language={language} style={style}>{`
var partiaState = {};
partiaState[name] = value;
this.setState(partiaState);
`}</SyntaxHighlighter>
<p>also,现在<code>setState()</code>自动的合并一部分state到当前state，我们只需要调用改变的部分。</p>
<h4>Controlled Component备胎</h4>
<p>有时候用控制组件很烦，因为你需要为数据更改来编写一个事件处理并且通过React组件管理全部的输入state。更烦的是，当你给react转换一个预存代码库给React,或者整合一个React应用通过一个没有React的library。这种情况下，你可能会想要试试uncontrolled components,一个输入表格的备用技术。</p>
</div>
<div class="col-sm-12">
<h3>state状态提升</h3>
<p>经常，多个组件需要映射同一变化的数据，我们考虑提升共享状态，给他们最近的共同祖先，让我们看看这是如何工作的。</p>
<p>在这一章节，我们将会创造一个温度计算器来计算在我们给定温度下，水是否会沸腾。</p>
<p>我们将会通过一个组件<code>BoilingVerdict</code>开始.它接受<code>celsius</code>温度作为一个传递的参数，并且打印它是否足够让水沸腾。</p>
<SyntaxHighlighter showLineNumbers={showLineNumbers} language={language} style={style}>{`
function BoilingVerdict(props){
  if(props.celsius >= 100){
    return <p>The water would boil.</p>
  }
  return <p>The water would not boil.</p>
}
`}</SyntaxHighlighter>
<p>接下来，我们将会创造一个组件<code>BoilingVerdict</code>。它渲染一个<code>&lt;input/></code>让你输入温度，并且将值保存在<code>this.state.temperature</code>.</p>
<p>另外，它为当前输出值渲染<code>BoilingVerdict</code>.</p>
<SyntaxHighlighter showLineNumbers={showLineNumbers} language={language} style={style}>{`
class Calculator extends React.Component{
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {tempeature:''}
  }
  handleChange(e){
    this.setState({temperature:e.target.value})
  }
  render(){
    const temperature = this.state.temperature;
    return(
    <fieldset>
      <legend>Enter temperature in Celsius:</legend>
      <input
        value={temperature}
        onChange={this.handleChange}
      />
      <BoilingVerdict
        celsius={parseFloat(tempareture)}/>
    </fieldset>
    )
  }
}
`}</SyntaxHighlighter>
<h3>增加第二个input</h3>
<p>我们新的需求是这样，另外增加一个摄氏度的输入框，我们提供一个华氏度输入框。他们是保持同步更新的。</p>
<p>我们可以从<code>Calculator</code>中提取一个<code>TemparetureInput</code>组件，我们还增加一个新的<code>scale</code>给他，这既可以是'c'也可以是'f':</p>
<SyntaxHighlighter showLineNumbers={showLineNumbers} language={language} style={style}>{`
const scaleName = {
  c:'Celsius',
  f:'Fahrenheit'
}
class TemparetureInput extends React.Component{
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state={temperature:''};
  }
  handleChange(e){
    this.setState({temperature: e.target.value});
  }
  render(){
    const temperature = this.state.temperature;
    const scale = this.props.scale;
    return(
      <fieldset>
        <legend>Enter temperature in {scaleName[scale]}:</legend>
        <input value = {temperature} 
          onChange = {this.handleChange}/>
      </fieldset>
    )
  }
}
`}</SyntaxHighlighter>
<p>我们可以现在改变<code>Calculate</code>来渲染两个分离的温度输出。</p>
<SyntaxHighlighter showLineNumbers={showLineNumbers} language={language} style={style}>{`
class Calculator extends React.Component{
  render(){
    return(
      <div>
        <TemperatureInput scale="c"/>
        <TemperatureInput scale="f"/>
      </div>
    )
  }
}
`}</SyntaxHighlighter>
<p>你可以在<a href="http://codepen.io/valscion/pen/GWKbao?editors=0010">CodePen</a>里面尝试一下。</p>
<p>我们有两个input，现在，但是，当你登入任何一个input的时候，另外一个不运行，这与我们需求相矛盾：我希望他们保持同步：</p>
<p>我们也不希望显示这个<code>BoilingVerdict</code>,which come from <code>Calculator</code>,这个计算器组件不知道当前温度，因为它发生在<code>TemperatureInput</code>里面。</p>
<h4>写转换函数</h4>
<p>首先，我们将会写两个函数将摄氏度与温度之间相互转换，并返回；</p>
<SyntaxHighlighter showLineNumbers={showLineNumbers} language={language} style={style}>{`
function toCelsius(fahrenheit){
  return (fahrenheit-32)*5/9;
}
function toFahrenheit(celsius){
  return (fahrenheit*9/5)+32;
}
`}</SyntaxHighlighter>
<p>这两个函数转换数字，我们将会写另一个函数，这个函数需要一个字符串<code>temperature</code>,并且转换一个函数当作一个内置对象<code>arguments</code>,并且返回一个字符串。我们将会用它来计算出一个input的值基于另一个input。</p>
<p>它返回一个空的字符串在一个无效的<code>temperature</code>,并且它保持输出小数后面三位数。</p>
<SyntaxHighlighter showLineNumbers={showLineNumbers} language={language} style={style}>{`
function tryConvert (temperature,convert){
  const input = parseFloor(temperature);
  if(Number.isNaN(input)){
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000)/1000;
  return rounded.toString();
}
`}</SyntaxHighlighter>
<p>例如，<code>tryConvert('abc',toCelsius)</code>返回一个空的字符串，然而<code>tryConvert('10.22',toFahrenheit)</code>返回<code>'50.396'</code></p>
<h4>状态提升(Lifting State Up)</h4>
<p>目前，俩个<code>TemperatureInput</code>组件独立的保存他们的值在本地状态。</p>
<SyntaxHighlighter showLineNumbers={showLineNumbers} language={language} style={style}>{`
class TemperatureInput extends React.Component{
  consturctor(props){
    super(props);
    this.handleChange = this. handleChange.bind(this);
    this.state = {temperature:''};
  }
  handleChange(e){
    this.setState({temperature:e.target.value});
  }
  render(){
    const temperature = this.state.temperature;
  }
}
`}</SyntaxHighlighter>
<p>然而，我们想要这两个input同步，我们应该更新摄氏度输出，并且华氏度输出应该反应转换温度，反之亦然。</p>
<p>在React里面，共享状态可以通过提升他到最近的被需要的父元素来完成。这个就叫做状态提升。我们将会从<code>TemperatureInput</code>组件中移除本地状态，并且将他移入<code>Calcultor</code>里面。如果<code>Calcultor</code>拥有共享的状态，这就变成真理之源为当前温度提供到两个inputs。这可以指导他们两个所拥有的值互相之间是一致的。直到这两个<code>TemparentureInput</code>组件的props，来自于他们共同的父组件<code>Calculator</code>，这两个输出经常是一致的。</p>
<p>让我们看看这个是如何运作的，一步一步看。</p>
<p>首先，我们将会在组件<code>TemperatureInput</code>里面将<code>this.state.temperature</code>替换成<code>this.props.temperature</code>。现在，让我们假装<code>this.props.temperature</code>已经存在，尽管我们将来需要从计算器中传递他。</p>
<SyntaxHighlighter showLineNumbers={showLineNumbers} language={language} style={style}>{`
render(){
  //之前：const temperature = this.state.temperature;
  const temperature = this.props.temperature;
}
`}</SyntaxHighlighter>
<p>我们知道props只能读取。当<code>temperature</code>在本地状态的时候，他可以调用<code>this.setState()</code>来改变它。然而现在它作为props来自父组件，<code>Temperatures</code>没有他的控制权。</p>
<p>在react里面，这通常用<code>controlled component</code>来解决，就像DOM元素<code>&lt;input></code>接受同一个<cdoe>value</cdoe>和一个<code>onChange</code>props,所以，可以让<code>Temperatures</code>接受<code>Temperatures</code>和<code>TemperatureInput</code>的props来自于他们的父<code>Calculator</code>。</p>
<p>现在，当<code>TemperatureInput</code>想要更新温度，他会调用<code>this.props.onTemperatureChange</code>:</p>
<SyntaxHighlighter showLineNumbers={showLineNumbers} language={language} style={style}>{`
handleChange(e){
  //this.setState({temperature:e.target.value})
  this.props.onTemperatureChange(e.target.value);
}
`}</SyntaxHighlighter>
<p>注意：<code>Temperature</code>或者<code>TemperatureInput</code>名字没有特殊含义，我们也可以给他们取其他名字。</p>
<p><code>onTemperatureChange</code>的prop将会被一起提供，<code>temperature</code>prop通过他们的父组件<code>Calculator</code>,这将会处理这个变化，他们自己的的本地状态修改的变化。因此重复渲染在他们的新值。我们将很快看到新的<code>Calculator</code>实现。在深入了解Calculator组件的变化之前，让我们回顾一下我们对<code>TemperatureInput</code>组件所做出的改变，我们已经把本地状态移除，替换了<code>this.state.temperature</code>,我们现在有的是<code>this.props.tempareture</code>,将<code>this.setState()</code>替换成<code>this.props.onTemperatureChange()</code>:</p>
<SyntaxHighlighter showLineNumbers={showLineNumbers} language={language} style={style}>{`
class TemperatureInput extends React.Component{
  constructor{
    sunper(props);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e){
    this.props.onTemperatureInput(e.target.value);
  }
  render(){
    const temperature = this.props.temperature;
    const scale = this.props.scale;
    return(
      <fieldset>
        <legend>Enter temperature in {scaleNames[scale]}:</legend>
        <input value = {temperature}
          onChange = {this.handleChange}>
        }
      </fieldset>
    )
  }
}
`}</SyntaxHighlighter>
<p>现在我们将注意力转到<code>Calculator</code>组件</p>
<p>我们将储存当前input的<code>temperature</code>，和scale在本地状态。这个state我们从inputs中提升上来的，被称作两者来源，这是为了呈现两个输入，我们需要知道的所有数据的最小表示。</p>
<p>例如，如果我们登入37在其中一个摄氏度input，calculatro组件状态如下：</p>
<SyntaxHighlighter showLineNumbers={showLineNumbers} language={language} style={style}>{`
{
  temperature:37,
  scale:'c'
}
`}</SyntaxHighlighter>
<p>如果我们接下来我们稍后将华氏度编成212，calculator状态如下</p>
<SyntaxHighlighter showLineNumbers={showLineNumbers} language={language} style={style}>{`
{
  temperature:212,
  scale:'f'
}
`}</SyntaxHighlighter>
<p>我们可以储存两个值，但事实证明这个是不必要的，储存当前改变的输出值，并且由scale来表现他，我们可以推断这个值，分别基于另一个值当前的<code>temperature</code>和<code>scale</code></p>
<p>这个输出可以保持同步，因为这个值是基于同一个state来计算的</p>
<SyntaxHighlighter showLineNumbers={showLineNumbers} language={language} style={style}>{`
class Calculator extends React.Component{
  constructor(props){
    super(props);
    this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
    this.handleFehrenheitChange = this.handleFehrenheitChange.bind(this);
    this.state = {temperature: '',scale:'c'}
  }
  handleCelsiusChange(temperature){
    this.setState({scale:'c',temperature})
  }
  handleFehrenheitChange(temperature){
    this.setState({scale:'f',temperature})
  }
  render(){
    const scale = this.state.scale;
    const temperature = this.state.temperature;
    const celsius = scale === 'c' ? tryConvert(temperature,toCelsius) : temperature;
    const fehrenheit = scale === 'f' ? tryConvert(temperature,toFehrenheit) : temperature;
    return(
      <div>
        <TemperatureInput scale='c'
          temperature = {celsius}
          onTemperatureChange = {this.handleCelsiusChange}/>
        <TemperatureInput scale='f'
          temperature = {fehrenheit}
          onTemperatureChange = {this.handleFehrenheitChange}/>
        <BoilingVerdict 
          celsius = {parseFloat(celsius)} />
      </div>
    )
  }
}
`}</SyntaxHighlighter>
<p>你可以在<a href="https://codepen.io/valscion/pen/jBNjja?editors=0010">CodePen</a>尝试一下</p>
<p>现在，无论那个input你改变，<code>this.state.temperature</code>和<code>this.state.scale</code>也会同步更新。其中一个input会得到这个值，所以，任何用户输入都可以被保留，并且另一个input的值常常基于此重新计算。</p>
<p>让我们重新回顾一下，到底发生了什么。当你编辑input的时候：</p>
<ul>
<li>React调用函数在<code>&lt;input></code>的onChange方法。在我们的例子中，这就是<code>TemperatureInput</code>组件中的<code>handleChange</code>方法。</li>
<li><code>TemperatureInput</code>组件中的<code>handleChange</code>方法调用<code>this.props.TemperatureChange</code>通过新的期望值。在props，包括onTemperatureChange是被他们的父组件Calculator提供的。</li>
<li>渲染之前，calculator被规定摄氏度input的onTemperatureChange是calculator的handleCelsiusChange方法，并且华氏度组件的onTemperatureChange是calculator的方法，所以这两个calculator方法调用取决于那个input我们编辑。</li>
<li>在这些方法中，calculator组件请求React再次渲染他自己，通过调用<code>this.setState()</code>并且附带新的我们编辑的那个input的输入值和当前scale。</li>
<li>React调用Calculator组件的render方法来了解UI的外观，这两个input的值被重新计算，基于当前温度和当前scale，这里进行温度装换。</li>
<li>React调用每个<code>TemperatureInput</code>组件的render方法，附带被calculator规定的新的props  ，他了解他们UI的样子。</li>
<li>React DOM更新DOM来匹配所期待的输入值，这个我们刚才编辑的input接受他当前值，并且另外一个input被更新temperature在装换后。</li>
<p>每一个更新通过同样的步骤，所以两个input保持同步。</p>
</ul>
<h4>所学到的</h4>
<p>这里应该有一个真理来给每一个数据和和改变。经常state加给一些需要被渲染的组件，如果其他组件也需要他来渲染，你可以提升状态给他们共同的父组件，而不是尝试去同步不同的组件，你需要依赖自上而下的数据流。</p>
<p>状态提升涉及比双向绑定更多的的样板代码，但是同时也有个好处，找bug，隔离bug比较容易。直到一些state生活在一些组件中，组件可以独立改变他们，bug的表面积大大降低.另外，你可以实现任何逻辑来拒绝或者转换用户输入。</p>
<p>如果一些东西可以从state或者props中派生出来，他可能不应该在state中，例如，不要储存celsiusValue或者fahrenheitValue,我们储存最后一个被编辑的temperature和scale，这些输入值总是能通过render()方法计算出来。这让我们清除或者应用四舍五入而不用让用户丢失精准度在输入过程中。</p>
<p>当你在UI中看到一些错误，你可以用<a href="https://github.com/facebook/react-devtools">react开发者工具</a>来检查你的代码，检查props，将鼠标移动代这个开发者工具的树状标签组件中，你可以看到state的更新</p>
<p>这可以让你跟踪bug并且找到他们的源头。</p>
<img src="https://facebook.github.io/react/img/docs/react-devtools-state.gif" alt="React Developer Tools"/>
<p>还剩下最后一章翻译，这里吐槽一下，虽然可能没人会看这文章，因为里面翻译太烂只有我一个人看得懂，有始有终我还是检查翻译完成吧。</p>
<h4>不要为了学英语而学英语</h4>
<p>有些程序员喜欢看国内什么慕课网，极客学院视频，为什么不上YouTube看呢，稍微分析一下，看，因为他不会翻墙，</p>
<p>那英语学来有什么用，为了看代码里面那些for,in,if????所以奉劝一句，不想翻墙，那么英语你也没有必要学了。u can't make sense of learning english。</p>
<p>我想翻墙看得懂国外的资源视频，所以我学英语，多么简单的逻辑，但是在国内学英语，这逻辑变得极为奢侈。</p>
</div>
<div class="col-sm-12">
<h3>组件与继承</h3>
<p>React有强大的构成模型，并且我们考虑使用，构成替代继承来复用组件。</p>
<p>在这一章，我们将会考虑一些问题，开发者刚开始用react经常遇到继承，并且展示我们如何通过composition来解决这些的问题。</p>
<h4>Comtainment</h4>
<p>一些组件不会提前知道他们的子元素，这在<code>sidebar</code>和<code>Dialog</code>中很常见，代表通用盒子</p>
<p>我们考虑这样的组件用特殊的子元素，</p>
<SyntaxHighlighter showLineNumbers={showLineNumbers} language={language} style={style}>{`
function FancyBorder (props){
  return (
    <div className={'FancyBorder FancyBorder-'+props.color}>
      {props.children}
    </div>
  )
}
`}</SyntaxHighlighter>
<p>通过嵌套JSX，这可以让其他的组件传递任意个数的子元素：</p>
<SyntaxHighlighter showLineNumbers={showLineNumbers} language={language} style={style}>{`
function WelcomeDialog(){
  return{
    <FancyBorder color='blue'>
      <h1 className="Dialog-title">
        Welcome
      </h1>
      <p className="Dialog-message">
        Thanking for visiting our spacecraft!
      </p>
    </FancyBorder>
  }
}
`}</SyntaxHighlighter>
<p>所有在<code>&lt;FancyBorder></code>里面的JSX标签都会传递props.children，具体看代码，很浅显，不解释。</p>
<p>你也可以这么写</p>
<SyntaxHighlighter showLineNumbers={showLineNumbers} language={language} style={style}>{`
function SplitPane(props){
  return{
    <div class="SplitPane">
      <div class="SplitPane-left">
        {props.left}
      </div>
      <div class="SplitPane-right">
        {props.right}
      </div>
    </div>
  }
}
function App(props){
  return(
    <!--//are author foolish to create this useless things?-->
    <SplitPane left={<contact/>} right={<chat/>}/>
  )
}
`}</SyntaxHighlighter>
<p>像COntact,Chat这样的元素仅仅只是对象，所以你可以传递他们通过props就像其他data那样。</p>
<h4>专业化用法？</h4>
<p>有时候我们考虑组件的特殊情况对于其他组件而言，例如，我们可能会用WlcomeDialog是Dialog的特例。</p>
<p>在react里面，下面也是用组合实现的，一个特殊组件渲染一个通用组件并且通过props来配置。</p>
<SyntaxHighlighter showLineNumbers={showLineNumbers} language={language} style={style}>{`
function Dialog(props){
  return(
    <FancyBorder color="blue">
      <h1 className="Dialog-title">
        {props.title}
      </h1>
      <p className="Dialog-message">
        {props.message}
      </p>
    </FancyBorder>
  );
}
function WelcomeDialog(){
  return(
    <Dialog title="Welcome"
      message='thanks for your visiting'/>
  )
}
`}</SyntaxHighlighter>
<p>组合对于定义为class的组件同样适用</p>
<SyntaxHighlighter showLineNumbers={showLineNumbers} language={language} style={style}>{`
function Dialog(props){
  return(
    <FancyBorder color="blue">
      <h1 className="Dialog-title">
        {props.title}
      </h1>
      <p className="Dialog-message">
        {props.message}
      </p>
      {props.children}
    </FancyBorder>
  )
}
class SignUpDialog extends ReactDOM.Component{
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this)
    this.handleSignUp = this.handleSignUp.bind(this)
    this.state = {login:''}
  }
  render(){
    return(
      <Dialog title='Mars Exploration Program' message='How should we refer to you?'>
        <input value={this.state.login} onChange={this.handleChange} />
        <button onClick={this.handleSignUp}>
          Sign My Up!
        </button>
      </Dialog>
    )
  }
  handleChange(e){
    this.setState({login:e.target.value})
  }
  handleSignUp(e){
    alert('Welcome aboard， $'{this.state.login})
  }
}
`}</SyntaxHighlighter>
<h3>那么继承又是如何呢？</h3>
<p>在脸书，我们使用react上千的组件，然而我们还没有找到案例，我们可以考虑创造组件继承阶层。</p>
<p>props和构成给了你灵活性，你所需要定做组件的外观和行为，用一种明确的可靠地方式。记住组件可以任意props，包括原始的value，React元素，或者函数。</p>
<p>如果你想要在组件之间使用没有UI功能，我们建议提取他到一个分离的js模块，组件会导入他，用他的函数，对象，类，而不用扩展他。</p>
</div>
<div class="col-sm-12">
<h3>思考React</h3>
<p>React是，在我们的观点中，第一方式要建立一个快大的webapp通过js来写，他在facebook和instagram中对我们影响非常大。</p>
<p>React的一个最伟大的部分就是是你考虑关于app正如你说建造的。在这篇文中，我们将会带你建立一个可搜索的产品数据。</p>
<h4>通过一个模仿开始</h4>
<p>想象我们已经有一个json api，和一个设计稿，样子如下。</p>
<img src="https://facebook.github.io/react/img/blog/thinking-in-react-mock.png"/>
<p>我们的jsonapi输出一些数据，像下面这个样子。</p>
<SyntaxHighlighter showLineNumbers={showLineNumbers} language={language} style={style}>{`
[
  {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
  {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
  {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
  {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
  {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
  {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
];
`}</SyntaxHighlighter>
<h4>第一步：将UI化解成组件层次结构</h4>
<p>你所需要做的第一件事情。就是在模拟中给每一个组件(子组件)绘制一个边框，并给他们命名。如果你和设计师一起工作，他们可能已经做完这些了，所以就只需要和他们讨论，他们ps的层次命名可能成为你组件的名字。</p>
<p>但是如何才能知道这是他自己的组件呢，如果你需要创建函数或者对象，用相同的技术来决定。一个这样的技术是单一负责责任，这就是为什么一个组件制作好一件事。如果他成熟了，那么应该被分解成更小的组件。因为你经常向用户展示一个json数据模型。你将会发现，如果你的模型建设准确，你的UI(组件结构)将会很好的映射。这个就是因为UI和数据模型倾向于坚持用样的信息结构。这意味着将UI分离成组件常常是微不足道的。只需要将他分解成只表示数据模型的一部分。</p>
<img src="https://facebook.github.io/react/img/blog/thinking-in-react-components.png"/>
<p>你将会看到我们有5个组件在你的单页面应用里面。我们将会对每个组件表示的数据结构进行分析。</p>
<ol>
<li><code>FilterableProductTable</code>(orange):包含这个例子的全部。</li>
<li><code>SearchBar</code>(blue):接受全部用户输入。</li>
<li><code>ProductTable</code>(green):基于用户输入，显示并且过滤信息收集</li>
<li><code>ProductCategoryRow</code>(turquoise):显示每个种类的标题。</li>
<li><code>ProductRow</code>(red):为每个产品显示一行。</li>
</ol>
<p>如果你在看<code>ProducTable</code>，你将会看到顶部表格(包括Name，Price标签)，不是他自己的组件。这是偏好的问题，并且无论哪种方式都是有理由的。例如我们将它作为<code>ProductTable</code>的一部分。因为这是渲染数据收集的一部分，这个是他的责任。然而如果这个头变得复杂(如果我么你要为排序添加可提供的系统)，这绝对是有意义的去做他自己的<code>ProductTableHeader</code>组件.</p>
<p>现在我们已经确定了模型中的组件。让我们把它排列成一个层次结构。这个简单。这个模型中，组件出现在另一个组件之内，这个应该作为一个子元素出现，如下层次结构</p>
<ul>
<li><code>FilterableProductTable</code></li>
<ul>
  <li><code>SearchBar</code></li>
  <li><code>ProductTable</code></li>
  <ul>
    <li><code>ProductCategoryRow</code></li>
    <li><code>ProductRow</code></li>
  </ul>
</ul>
</ul>
<h4>第二步，建立React版本的静态页面</h4>
<SyntaxHighlighter showLineNumbers={showLineNumbers} language={language} style={style}>{`
class ProductCategoryRow extends React.Component{
  render(){
    return <tr><th colSpan="2">{this.props.category}</th></tr>
  }
}

class ProductRow extends React.Component{
  render(){
    var name = this.props.product.stocked ?
      this.props.product.name :
      <span style={{color:'red'}}>
        {this.props.product.price}
      </span>;
    return(
      <tr>
        <td>{name}</td>
        <td>{this.props.product.price}</td>
      </tr>
    );
  }
}

class ProducTable extends React.Component{
  render(){
    return(
      <table>
        <thead>
          <tr>Name</tr>
          <tr>Price</tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    )
  }
}

class SearchBar extends React.Component{
  render(){
    return(
      <form>
        <input type="text" placeholder="Search.....">
        <p>
          <input type="checkbox" />
          {' '}
          only show products in stock
        </p>
      </form>
    )
  }
}

class FilterableProductTable extends React.Component{
  render(){
    return(
      <div>
        <SearchBar />
        <ProductTable products={this.props.products}/>
      </div>
    )
  }
}

var PRODUCTS = [
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
]

ReactDOM.render(
  <FilterableProductTable products={PRODUCTS}/>,
  document.getElementById('root')
);
`}</SyntaxHighlighter>
<p>现在你有了组件阶层，现在是时候来完成你的app了，最简单的方式来建立一个版本，保管你的数据模型，并且渲染UI，但是这其中没有交互。</p>
<p>最好将这些流程解耦，因为建立一个静态模型需要大量写代码而不需要思考，然而添加交互性需要大量思考而不需要打太多字，我们将会见证这是为什么。</p>
<p>为你的app建立静态版本，并且渲染动态模型，你将会想要建立组件，通过复用其他组件，并且用props传递数据。这是其中方式。如果你熟悉state的概念，不要用state来构建静态版本，state只用来写交互，这就是随时间变化的data，因为这是静态app，你不需要state。</p>
<p>你可以从上到下，或者从下到上来构建，这就是你可以从更高层次组件开始，反过来也可以，在一个简单例子里面，自上而下比较容易，大项目，自底向上更好。</p>
<p>最后，你将会有一个复用组件的图书馆来渲染你的数据模型，组件将会只有<code>render()</code>方法，直到你的app成为一个动态版本。阶层顶部组件将会带着你的数据模型，封装成props。如果你改变了底层数据模型，并在此调用<code>ReactDOM.render()</code>方法，UI就会更新。这很容易看到你的UI是如何更新的，哪里做了改变，直到这没有什么复杂的事情发生。React的单向数据流(单向数据绑定)，保持所有模块并且迅速。</p>
<p>如果你在这一步需要帮助，那么看<a href="https://facebook.github.io/react/docs/hello-world.html">文献</a>吧</p>
<h4>tip：Props VS State</h4>
<p>这里有两种数据模型，props和state，这很重要，去明白两者区别，查阅<a href="https://facebook.github.io/react/docs/state-and-lifecycle.html">文献</a>,如果你还不太清楚的话。</p>
<h4>第三步：识别UI最小表示方式。</h4>
<p>使你的UI具备交互性，你需要触发这些变化来给你底层数据模型，通过state这很简单。</p>
<p>为了正确建立你的app，你首先需要思考app所需要的最小应用。关键在于，不要自我重复，了解绝对最小state的你的app所需要的，计算所有你需要的。例如，如果你建立一个<code>TODO</code>列表，不要为了计算而保留一个独立的state，相反，当你想要渲染<code>TODO</code>，只需要使用TODO的数组长度</p>
<p>思考我们应用中所有数据片段，我们有：</p>
<ul>
<li>product的original列表</li>
<li>用户登入的检索文字</li>
<li>checkbox的值</li>
<li>product的被过滤后的列表</li>
</ul>
<p>让我们每一个都看一下，哪个是state，关于每段数据简单问一下以下三个问题：</p>
<ol>
<li>他是通过props传递给父组件的吗？如果是，那么这肯定不是state</li>
<li>他不随着时间而改变，如果是的，那么他也不是state。</li>
<li>你可以计算他，基于一些其他的state或者props在你的组件里面吗？如果是的，那他肯定也不是state。</li>
</ol>
<p>product最初的列表作为一个props传递，所以这肯定不是state。这个search文本和checkbox看起来要state直到他们随时间变化，并且无法计算出任何东西。最后，product被过滤的列表不是state，因为他可以被计算出来，通过组合product的源列表并附带search的内容和checkbox的值。</p>
<p>所以最后，我们的state就是如下：</p>
<ul>
<li>用户登入的检索内容</li>
<li>checkbox的值</li>
</ul>
<h4>step 4：确立你的state应该存在的地方。</h4>
<SyntaxHighlighter showLineNumbers={showLineNumbers} language={language} style={style}>{`
class ProductCategoryRow extends React.Component{
  render(){
    return <tr><th colSpan="2">{this.props.category}</th></tr>
  }
}

class ProductRow extends React.Component{
  render(){
    var name = this.props.product.stocked ?
      this.props.product.name :
      <span style={{color:'red'}}>
        {this.props.product.price}
      </span>;
    return(
      <tr>
        <td>{name}</td>
        <td>{this.props.product.price}</td>
      </tr>
    );
  }
}

class ProducTable extends React.Component{
  render(){
    var rows = [];
    var lastCategory = null;
    this.props.products.forEach((product) => {
      if(product.name.indexOf(this.props.filterText) === -1 || (!Product.stocked && this.props.inStockOnly)){
        return;
      }
      if(product.category !== lastCategory){
        rows.push(<ProductCategoryRow category = {product.category} key={product.category} />)
      }
      rows.push(<ProductRow category = {product} key={product.name} />)
      lastCategory = product.category;
    })
    return(
      <table>
        <thead>
          <tr>Name</tr>
          <tr>Price</tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    )
  }
}

class SearchBar extends React.Component{
  render(){
    return(
      <form>
        <input type="text" placeholder="Search....." value={this.props.filterText}>
        <p>
          <input type="checkbox" checked={this.props.inStockOnly} />
          {' '}
          only show products in stock
        </p>
      </form>
    )
  }
}

class FilterableProductTable extends React.Component{
  render(){
    return(
      <div>
        <SearchBar filterText = {this.state.filterText} inStockOnly={this.state.inStockOnly />
        <Product products={this.props.products} filterText = {this.state.filterText} inStockOnly={this.state.inStockOnly />
      </div>
    )
  }
}

var PRODUCTS = [
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
]

ReactDOM.render(
  <FilterableProductTable products={PRODUCTS}/>,
  document.getElementById('root')
);
`}</SyntaxHighlighter>
<p>好了，我们之前识别了app最小的state设置是什么，接下来，我们将要识别哪个组件有突变或者拥有这个state。</p>
<p>记住，React是关于组件结构层次的单向数据流，他不会立即知道哪个组件拥有什么state。对于新手，这通常是具有挑战性的一部分，所以跟着这些步骤来解决问题：</p>
<p>为了每一片app中的state：</p>
<ul>
<li>识别每个组件，基于state渲染一些。</li>
<li>找一个常用所有者组件(单个组件高于所有组件，这个在结构层次中需要state的组件。)</li>
<li>公共拥有者或者另一个在结构层次中更高的组件，应该拥有state</li>
<li>如果你找不到拥有state的组件，那么创建一个仅用来保存state的新组件并添加它到在公共拥有者的组件之上的层次结构。</li>
</ul>
<p>那么让我们为我们的组件运行这个策略：</p>
<ul>
<li><code>ProductTable</code>需要基于state来过滤product列表，<code>SearchBar</code>需要显示被search的内容并检查state。</li>
<li>这个公共拥有者组件是<code>FilterableProductTable</code></li>
<li>这个概念的意义是过滤文本并且检查状态，可以在<code>FilterableProductTable</code>中生效。</li>
</ul>
<p>cool，我们决定我们的状态在<code>{`FilterableProductTable`}</code>中生效，首先，添加一个例子属性<code>this.state={`filterText:'',inStockOnly:false`}</code>给组件<code>FilterableProductTable's</code>的<code>constructor</code>来为你的应用初始化state。然后，作为一个props传递filterText和inStockOnly给ProductTable和SearchBar组件。最后，使用这些props来过滤<code>ProductTable</code>组件中的rows，并在SearchBar中设置表单字段值。</p>
<p>你可以开始看看你的app如何运作，用‘ball’来过滤并更新app，你可以看到数据表单准确更新。</p>
<SyntaxHighlighter showLineNumbers={showLineNumbers} language={language} style={style}>{`
class ProductCategoryRow extends React.Component {
  render() {
    return (<tr><th colSpan="2">{this.props.category}</th></tr>);
  }
}

class ProductRow extends React.Component {
  render() {
    var name = this.props.product.stocked ?
      this.props.product.name :
      <span style={{color: 'red'}}>
        {this.props.product.name}
      </span>;
    return (
      <tr>
        <td>{name}</td>
        <td>{this.props.product.price}</td>
      </tr>
    );
  }
}

class ProductTable extends React.Component {
  render() {
    var rows = [];
    var lastCategory = null;
    console.log(this.props.inStockOnly)
    this.props.products.forEach((product) => {
      if (product.name.indexOf(this.props.filterText) === -1 || (!product.stocked && this.props.inStockOnly)) {
        return;
      }
      if (product.category !== lastCategory) {
        rows.push(<ProductCategoryRow category={product.category} key={product.category} />);
      }
      rows.push(<ProductRow product={product} key={product.name} />);
      lastCategory = product.category;
    });
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleFilterTextInputChange = this.handleFilterTextInputChange.bind(this);
    this.handleInStockInputChange = this.handleInStockInputChange.bind(this);
  }
  
  handleFilterTextInputChange(e) {
    this.props.onFilterTextInput(e.target.value);
  }
  
  handleInStockInputChange(e) {
    this.props.onInStockInput(e.target.checked);
  }
  
  render() {
    return (
      <form>
        <input
          type="text"
          placeholder="Search..."
          value={this.props.filterText}
          onChange={this.handleFilterTextInputChange}
        />
        <p>
          <input
            type="checkbox"
            checked={this.props.inStockOnly}
            onChange={this.handleInStockInputChange}
          />
          {' '}
          Only show products in stock
        </p>
      </form>
    );
  }
}

class FilterableProductTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      inStockOnly: false
    };
    
    this.handleFilterTextInput = this.handleFilterTextInput.bind(this);
    this.handleInStockInput = this.handleInStockInput.bind(this);
  }

  handleFilterTextInput(filterText) {
    this.setState({
      filterText: filterText
    });
  }
  
  handleInStockInput(inStockOnly) {
    this.setState({
      inStockOnly: inStockOnly
    })
  }

  render() {
    return (
      <div>
        <SearchBar
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
          onFilterTextInput={this.handleFilterTextInput}
          onInStockInput={this.handleInStockInput}
        />
        <ProductTable
          products={this.props.products}
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
        />
      </div>
    );
  }
}


var PRODUCTS = [
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];

ReactDOM.render(
  <FilterableProductTable products={PRODUCTS} />,
  document.getElementById('container')
);
`}</SyntaxHighlighter>
        <p>到目前为止，我们已经创建了一个APP，他可以准确渲染，作为function可以准确显示props和state流向下的层次结构。现在是时候支持数据流动的另一种方式，在<code>FilterableProductTable</code>层次结构中深层次表单组件需要更新state。</p>
        <p>React使得这种数据流动更精确，从而使得更加能看的明白他是如何运转的，但是这确实需要写更多代码来，相对于双向数据绑定来说。</p>
        <p>如果你尝试写代码或检查当前例子版本的盒子，你可能会看见react忽略你的输入，这个是故意的，正如我们给<code>input</code>设置成<code>value</code>prop始终等于state并传递给<code>FilterableProductTable</code>。</p>
        <p>让我们思考关于，我们想要发生什么。我们想要确认每当用户改变表单，我们更新state来反映用户输入，直到组件应该只更新他们自己的state，<code>FilterableProductTable</code>将会传递回调函数给<code>SearchBar</code>，这样每当state更新。我们可以用onChange事件对input进行通知，这个回调会通过<code>FilterableProductTable</code>调用<code>setState()</code>,之后app会更新。</p>
        <p>尽管这听起来复杂，但其实就几行代码，并且他真的准切的，在App中你的数据是如何流动的。</p>
        <h4>就这样吧</h4>
        <p>希望，这能给你idear关于通过react如何建造组件和应用，他可能比以前需要写更多代码，记住代码读取远超过编写，并且这个模块易读明确，当你开始建立一个大的组件图书馆，你会欣赏这种明确性和模块性，通过代码复用，你的代码数列开始大大减小。</p>
      </div>
    </div>
    )
  }
}
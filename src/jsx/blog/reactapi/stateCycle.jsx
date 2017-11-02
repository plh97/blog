import React from "react";
import { Row, Col } from 'antd';
import PrismCode from '../../feature/Prism.js'

export default class Jsx extends React.Component {
  render() {
    return (
      <Col span={24}>
        <h3>State和生命周期</h3>
        <p>思考时钟这个例子，可以在前面几个章节查询一下。</p>
        <p>到目前为止，我们唯一学过的更新UI的方式。</p>
        <p>我们调用<code>ReactDOM.render()</code>来改变那些已经渲染过的输出。</p>
        <PrismCode lang='jsx'>{`
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
        `}</PrismCode>
        <p>在这一章节，我们将会学习如何制作一个Clock组件,这组件将会真正的复用化封装化的。他将会设置自己的计时器，并每秒更新一次。</p>
        <p>我们可以从封装时钟开始：</p>
        <PrismCode lang='jsx'>{`
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
        `}</PrismCode>
        <p>然而，它忽略了一个关键的要求：事实上，Clock组件设置了一个计时器，并时刻更新UI，这要求他是一个Clock组件的实现细节。</p>
        <p>更理想化的是，我们想要它写一次并且Clock组件可以自我更新。</p>
        <PrismCode lang='jsx'>{`
          ReactDOM.render(
            <Clock />,
            document.getElementById('example')
          )
        `}</PrismCode>
        <p>为了实现这个，我们需要加入一个'state'属性给Clock组件</p>
        <p>State和props类似，但是他是私有化，并完全由组件控制。</p>
        <p>我们<a href="https://facebook.github.io/react/docs/components-and-props.html#functional-and-class-components">之前</a>提到,组件被定义成类(classes)会多一些新增功能，局部state就恰好是一个只可用于类的特性。</p>
        <h4>Function转化为Class</h4>
        <p>你可以通过以下五个步骤，来让function转化成class</p>
        <ol type="1">
        <li>创造一个ES6的class，名字字样，然后加上<code>extends React.Component.</code></li>
        <li>增加一个单一的空的方法，让他可以调用render()</li>
        <li>将所有div元素移入<code>render()</code>里面。</li>
        <li>将<code>props</code>替换为<code>this.props</code>,并且放置在<code>render()</code>里面。</li>
        <li>删除空的<code>function</code>声明。</li>
        </ol>
        <PrismCode lang='jsx'>{`
          class Clock extends React.Component{
            render(){
              return(
                <div>
                  <h1>Hello,world!</h1>
                  <h2>It is {this.props.date.toLocaleTimeString()}.</h2>
                </div>
              )
            }
          }
        `}</PrismCode>
        <p>你可以在<a href="https://codepen.io/gaearon/pen/zKRGpo?editors=0010">CodePen</a>里面看看~</p>
        <p>现在Clock被定义成一个class而不是一个function。</p>
        <p>这让我们用一些新增的功能，例如local state，lifecycle hooks。</p>
        <h4>将Local State添加到class里面</h4>
        <p>我们将会通过下面三个步骤把date从props转化为state：</p>
        <p>1)将<code>this.props.date</code>替换为<code>this.state.date</code>,在<code>render()</code>方法里面：</p>
        <PrismCode lang='jsx'>{`
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
        `}</PrismCode>
        <p>2)添加一个类的构造函数并且指定初始化值<code>this.state,super(props)</code>出现的目的是为了this这个值能够使用，在子类constructor中必须先调用super才能调用this。</p>
        <PrismCode lang='jsx'>{`
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
        `}</PrismCode>
        <p>注意，我们是如何将porps参数传递给子类constructor的：</p>
        <PrismCode lang='jsx'>{`
          constructor(){
            super(props);
            this.state:{date:new Date()};
          }
        `}</PrismCode>
        <p>类组件应该经常调用基层constructor，通过props</p>
        <p>3)将date属性从Clock元素中移除。</p>
        <PrismCode lang='jsx'>{`
          ReactDOM.render(
            <Clock/>,
            document.getElement('example')
          )
        `}</PrismCode>
        <p>接下来我们将会将计时器的代码重新加回给组件自身。</p>
        <PrismCode lang='jsx'>{`
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
        `}</PrismCode>
        <p>现在Clock设置好了他自己的计时器，并时刻自我更新。</p>
        <h4>增加lifecycle方法到class里面</h4>
        <p>在一个应用，里面有很多组件，那么当应用销毁的时候，释放资源是非常重要的。</p>
        <p>每当Clock组件第一次渲染在DOM上面，我们就像设置一个计时器，在React里面这个就叫做'mounting'。</p>
        <p>我们也想清除计时器，每当这个Clock组件创造的DOM被移除的时候，这个在React里面叫做'unmounting'</p>
        <p>我可以声明特殊方法在组件class里面，比如执行一些代码，当组件mounts或者unmounts的时候</p>
        <PrismCode lang='jsx'>{`
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
        `}</PrismCode>
        <p>这个方法叫做生命周期钩子'lifecycle hooks'.</p>
        <p><code>componentDidMount()</code>钩子在组件输出渲染到DOM之后运行，这是一个设置解释器的好地方。</p>
        <PrismCode lang='jsx'>{`
          componentDidMount(){
            this.timerID=serInterval(
              ()=>this.tick(),
              1000
            )
          }
        `}</PrismCode>
        <p>注意我们是如何正确保存timer ID在this中。</p>
        <p>当this.props被React自己设置好后，this.state有了一个特殊的意义，你可以手动添加一些额外存储到class里面，如果你需要存储一些不需要可视化输出的东西。</p>
        <p>如果你不需要使用一些东西在render()里面，他不应该在state里面。</p>
        <p>我们将会拆除计时器在componentWillUnmount()生命钩子里面:</p>
        <PrismCode lang='jsx'>{`
          compinentWillUnmount(){
            clearInterval(this.timerID);
          }
        `}</PrismCode>
        <p>最终，我们将会完善tick()方法，让他运行每一秒。</p>
        <p>他将会用到this.setState()来计划性更新component local state：</p>
        <PrismCode lang='jsx'>{`
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
        `}</PrismCode>
        <p>现在，滴答时钟响应每一秒了。</p>
        <p>让我们快速复述一次，到底发生了什么，以及方法调用的顺序。</p>
        <p>1)当<code>&lt;CLock/></code>被传递给<code>ReactDOM.render()</code>时,React调用Clock组件构造器，知道Clock需要显示当前时间，它初始化this.state通过一个对象包括当前时间，我们之后就会更新这个state。</p>
        <p>2)React接着会调用Clock组件的render()方法，这就是React如何得知什么东西应该显示在屏幕上面。React接着会更新DOM来匹配Clock的渲染输出。</p>
        <p>3)当Clock输出并且被嵌入到DOM中，React调用<code>componentDidMount()</code>lifecycle hook，其中，Clock组件请求浏览器来加载一个计时器来时刻调用tick()</p>
        <p>4)每秒浏览器都会调用tick()方法,里面,Click组件安排UI更新通过调用setState(),通过一个对象包括当前时间，多亏了setState()的调用，React知道state已经被改变了，并且再次调用render()方法来得知什么需要显示在屏幕上。这个时候，this.state.date在render()方法里面将会不同，并且英雌渲染输出将会包括这个更新的时间，React也因此更新DOM。</p>
        <p>5)如果Clock组件是曾经被从DOM中移除，React调用componentWillUnmount()生命钩子，以便于停止计时器。</p>
        <h4>正确使用State</h4>
        <p>这里有三件，你必须了解的关于setState().</p>
        <h4>不要直接修改State</h4>
        <p>例如，浙江不会再次渲染一个组件</p>
        <PrismCode lang='js'>{`
          //Wrong
          this.state.comment = 'Hello';
        `}</PrismCode>
        <p>相反，应该使用setState():</p>
        <PrismCode lang='js'>{`
          //Correct
          this.setState({comment:'Hello'});
        `}</PrismCode>
        <p>你只能在constructor里面给this.state赋值。</p>
        <h4>State更新也许是异步的</h4>
        <p>React也许会调用多个setState()来进行一次性能更新。</p>
        <p>因为this.props和this.state是异步的，你应该不依赖他们的值来计算下一个state。</p>
        <p>例如，这个代码是错误的来更新counter</p>
        <PrismCode lang='js'>{`
          //Wrong
          this.setState({
            counter:this.state.counter+this.props.increment,
          })
        `}</PrismCode>
        <p>来修复他把，用setState()的另一种形式来接受一个函数而不是一个对象，这个函数将会接受之前的state来作为第一个argument，并且props在这个时间将会依赖第二个argument来更新</p>
        <PrismCode lang='js'>{`
          //Correct
          this.setState((prevState,props) => ({
            counter:prevState.counter + props.increment
          }));
        `}</PrismCode>
        <p>上边例子我们用一个箭头函数，但是它的依赖一般函数来运转。</p>
        <PrismCode lang='js'>{`
          //Correct
          this.setState(function(prevState,props){
            return {
              counter: prevState.counter + props.increment
            }
          })
        `}</PrismCode>
        <h4>state 更新合并</h4>
        <p>当你调用<code>setState()</code>,<code>React</code>合并这个对象，你提供的当前state.</p>
        <p>例如，你的state也许包含数个独立的变量。</p>
        <PrismCode lang='js'>{`
          constructor(props){
            super(props);
            this.state = {
              props:[],
              comments:[]
            };
          }
        `}</PrismCode>
        <p>那么你可以独立的更新他们通过分开的setState()调用：</p>
        <PrismCode lang='js'>{`
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
        `}</PrismCode>
        <p>这个合并是很浅显的，所以this.setState({`{comments}`})完整的分离了this.state.posts,并且完全取代了this.state.comments.</p>
        <h4>数据流</h4>
        <p>既不是父元素或者子元素组件可以知道，如果一个确定的组件是有状态或者无状态的，并且他们不应该在意，不管他是被定义成一个函数或者一个class.</p>
        <p>这就是为什么state时常被调用在本地或者被封装，它是不被一些组件访问，除了一些他自己或者它设置的。</p>
        <p>一个组件也许是选择当作props来传递他的state给他自己的子组件。</p>
        <pre><code className="language-html">{`<h2>It is {this.state.date.toLocaleTimeString()}.</h2>`}</code></pre>
        <p>他也为未定义组件工作。</p>
        <pre><code className="language-html">{`<FormattedDate date={this.state.date} />`}</code></pre>
        <p>这个FormattedDate组件将会接受这个date在他自己的props并且不知道它来自于Clock的state或者来自于Clock的props或者是手写的：</p>
        <PrismCode lang='jsx'>{`
          function FormattedDate(props){
            return <h2>It is {props.date.toLocaleTimeString()}.</h2>
          }
        `}</PrismCode>
        <p>这一般叫做‘top-down’或者“unidirectional”数据流。一些state经常备用有，通过一些特定的组件，而且许多数据或者UI得到的state只能影响以下的组件，在这个结构树中。</p>
        <p>如果你想一个组件书作为一种瀑布props，每个组件的state像一个新增的资源刘，可以加入它作为一个运动点也作为一个流动的。</p>
        <p>为了展示所有的组件都孤立了，我们可以创造一个app组件渲染3个Clock</p>
        <PrismCode lang='jsx'>{`
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
        `}</PrismCode>
        <p>每一个Clock设置了他们自己的计时器并且独立更新。</p>
        <p>在React app，无论组件是有状态或者无状态，被考虑成一个组件的实现细节，他可能时刻改变。你可以用无状态组件在有状态组件里面，反之亦然。</p>
      </Col>
    )
  }
}

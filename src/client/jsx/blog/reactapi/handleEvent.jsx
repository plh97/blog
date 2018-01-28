import React from "react";
import { Row, Col } from 'antd';
import PrismCode from '../../feature/Prism.js'

export default class Jsx extends React.Component {
  render() {
    return (
      <Col span={24}>
        <h3>处理事件</h3>
        <p>处理React元素的事件，和处理DOM元素事件很像，这里有一些语法不一致</p>
        <ul>
        <li>React事件是驼峰命名，而不是小写</li>
        <li>通过JSX，你传递了一个函数作事件处理，而不是一个字符串。</li>
        </ul>
        <p>例如,下面两个HTML和React对比</p>
        <PrismCode lang='jsx'>{`
          <button onclick="activateLasers()">
            Active Lasers
          </button>
        `}</PrismCode>
        <p>有轻微的不同在React里面</p>
        <PrismCode lang='jsx'>{`
          <button onclick="{activateLasers}">
            Activate Lasers
          </button>
        `}</PrismCode>
        <p>另外一个不同是不能输出false来阻止不履行行为在React里面，你必须明确的调用preventDefault，例如，为了阻止HTML里面a标签的默认事件，你可以做以下代码</p>
        <pre><code className="language-html">{`<a href="#" onclick="console.log('the link was clicked.'); return false">Click me</a>`}</code></pre>
        <p>在react里面，应该这么写</p>
        <PrismCode lang='jsx'>{`
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
        `}</PrismCode>
        <p>这里e是一个合成的事件，React丁一这些合成事件通过W3C标准，所以你不用担心浏览器兼容问题，去看一下<a href="https://facebook.github.io/react/docs/events.html">SyntheticEvent</a>文献来指导你学习。</p>
        <p>当使用React你通常不用调用addEventListener来增加DOM元素的监听，在他被创造之后，相反的，只要提供一个监听器当元素被初始化渲染。</p>
        <p>当你定义一个组件用ES6class，通常模式是在class上使用时间处理器来作为一个方法。例如，这个Toggle组件渲染一个按钮，让使用者在ON和OFF之间切换。</p>
        <PrismCode lang='jsx'>{`
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
        `}</PrismCode>
        <p>你不得不小心，关于this在JSX回调里面的含义。在js，class方法是不不被default绑定，如果你忘记绑定this.handleClick,并且传递它到onclick，this将会undefined，当函数被调用的时候。</p>
        <p>这不是React的特定行为，这是function在js中运行的一部分，一般来说，如果你提到方法，不用()在这之后，例如onclick={this.handleClick},你必须绑定这个方法。</p>
        <p>如果调用bind困扰你，这里有两条路你可以绕过，，如果你用实验，你可以用property初始化来准确绑定回调</p>
        <PrismCode lang='jsx'>{`
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
        `}</PrismCode>
        <p>在默认情况下启动该语法在<a href="https://github.com/facebookincubator/create-react-app">Create React App</a></p>
        <p>如果你不用属性初始化语法，你可以用一个箭头函数在回调里面。</p>
        <PrismCode lang='jsx'>{`
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
        `}</PrismCode>
        <p>这个问题带有这些语法，是一个不同的回调。在大多数情况，这是OK的，然而，如果这个回调被作为一个prop来传递给内部组件，这些组件也许会做多一个额外的重复渲染，我们通常建议绑定在构造器或者用属性初始化语法，来避免这类性能问题。</p>
      </Col>
    )
  }
}

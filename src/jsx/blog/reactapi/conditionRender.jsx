import React from "react";
import {Row, Col} from 'antd';
import PrismCode from '../../feature/Prism.js'

export default class Jsx extends React.Component {
  render() {
    return (
      <Col span={24}>
        <h3>有条件的渲染</h3>
        <p>在react，你可以创建一个独特的组件，封装一些你需要的行为，然后，你可以只渲染他，这取决于你的应用的state。</p>
        <p>有条件的渲染在react里面，工作于同一种条件工作于js，用js运算符，像if这样的，或者条件运算符<code>condition ? expr1 : expr2</code>来创建元素来呈现当前state，并且让React更新UI来匹配他们。</p>
        <p>思考这两个组件:</p>
        <PrismCode lang='jsx'>{`
          function UserGreeting(props){
            return <h1>Welcome back!&le;/h1>;
          }
          function GuestGreeting(props){
            return <h1>Please sign up.&le;/h1>;
          }
        `}</PrismCode>
        <p>我们将会创建一个Greeting组件，会显示，无论用户登录与否:</p>
        <PrismCode lang='jsx'>{`
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
        `}</PrismCode>
        <p>这个例子渲染了两个不同的greeting，依靠isLoggedIn给prop传递的值。</p>
        <h4>元素变量</h4>
        <p>你可以用变量储存元素，这可以帮助你有条件的渲染组件的一部分，当输出的一部分不用改变的时候。</p>
        <PrismCode lang='jsx'>{`
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
        `}</PrismCode>
        <p>在下面这个例子，我们将会创造一个有状态的组件被LoginControl调用。</p>
        <p>它将会渲染<code>&lt;LoginButton /></code>和<code>&lt;LogoutButton /></code>,并且去取决于他们当前的状态，它也会渲染一个<code>&lt;Greeting/></code>,请查看之前的例子。</p>
        <PrismCode lang='jsx'>{`
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
        `}</PrismCode>
        <p>当声明一个变量并且用if来陈述是一个好的方式来条件化的渲染一个组件，有时候，你也许想要用一个更短的语法。有几个内联条件的JSX，下面解释一下。</p>
        <h4>内联if带有逻辑运算符&&</h4>
        <p>你可能会在JSX中嵌入任何表达式，通过将它们封装在{}
        中。这个包括了js && 逻辑运算符。他可以便捷的有条件的报过一个元素。 < /p>
        <PrismCode lang='jsx'>{`
          function Mailbox(props){
            const unreadMessages = props.unreadMessage;
            return(
              <div>
                <h1>Hello!</h1>
                {unreadMessage.length > 0 && <h2>
                  You have {unreadMessages.length}
                  unread message.
                </h2>}
              </div>
            )
          }
          const message = ['React','Re: React','Re:Re: React'];
          ReactDOM.render(
            <Mailbox unreadMessage={message}/ >,
          document.getElementById('example'))
        `}</PrismCode>
        <p>在js里面这个是可以运行的，<code>true && expression</code>等价于<code>expression</code>,<code>false && expression</code>等价于<code>false</code>.</p>
        <p>因此，如果条件为ture，这个元素在&&后面的会输出，反之相反，React会跳过它。</p>
        <h4>内联if-else条件运算符</h4>
        <p>另一个方法，渲染内联元素，可以使用js条件运算符<code>condition ? true : false</code></p>
        <p>在下面这个例子，我们用它条件化渲染一个小块</p>
        <PrismCode lang='jsx'>{`
          render(){
            const isLoggedIn = this.state.isLoggedIn;
            return (
              <div>
                The user is <b>{isLoggedIn ? 'currently' : 'not'}</b> logged in.
              </div>
            )
          }
        `}</PrismCode>
        <p>他也经常被用来给一些大的表达式，尽管他明显小于接下来的</p>
        <PrismCode lang='jsx'>{`
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
        `}</PrismCode>
        <p>就像在js里面，这取决于你选择一个适当的风格基于，基于你和你的团队考虑让他更具可读性。也要记得，无论条件变得过于复杂，这可能是一个好时机来精炼一个函数。</p>
        <h4>Preventing组件渲染</h4>
        <p>在极少数情况，你可能想要一个组件隐藏他自己，甚至他是被另一个组件渲染，来实现这个可以通过返回<code>null</code>替代他的渲染输出。</p>
        <p>在下面这个例子，<code>&lt;WarningBanner /></code>是被渲染，取决于这个prop调用的<code>warn</code>值，如果这个prop的值是<code>false</code>,那么组件不会被渲染。</p>
        <PrismCode lang='jsx'>{`
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
              <Page />,
              document.getElementById('root')
            )
          }
          `}</PrismCode>
        <p>返回<code>null</code>,来自组建的<code>render</code>方法不影响组件的生命周期方法。例如<code>componentWillUpdate</code>和<code>componentDidUpdate</code>仍被调用。</p>
      </Col>
    )
  }
}

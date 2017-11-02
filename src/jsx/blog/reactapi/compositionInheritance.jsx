import React from "react";
import { Row, Col } from 'antd';
import PrismCode from '../../feature/Prism.js'

export default class Compositionlnheritance extends React.Component {
  render() {
    return (
      <Col span={24}>
        <h3>组件与继承</h3>
        <p>React有强大的构成模型，并且我们考虑使用，构成替代继承来复用组件。</p>
        <p>在这一章，我们将会考虑一些问题，开发者刚开始用react经常遇到继承，并且展示我们如何通过composition来解决这些的问题。</p>
        <h4>Comtainment</h4>
        <p>一些组件不会提前知道他们的子元素，这在<code>sidebar</code>和<code>Dialog</code>中很常见，代表通用盒子</p>
        <p>我们考虑这样的组件用特殊的子元素，</p>
        <PrismCode lang='jsx'>{`
          function FancyBorder (props){
            return (
              <div className={'FancyBorder FancyBorder-'+props.color}>
                {props.children}
              </div>
            )
          }
        `}</PrismCode>
        <p>通过嵌套JSX，这可以让其他的组件传递任意个数的子元素：</p>
        <PrismCode lang='jsx'>{`
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
        `}</PrismCode>
        <p>所有在<code>&lt;FancyBorder></code>里面的JSX标签都会传递props.children，具体看代码，很浅显，不解释。</p>
        <p>你也可以这么写</p>
        <PrismCode lang='jsx'>{`
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
        `}</PrismCode>
        <p>像COntact,Chat这样的元素仅仅只是对象，所以你可以传递他们通过props就像其他data那样。</p>
        <h4>专业化用法？</h4>
        <p>有时候我们考虑组件的特殊情况对于其他组件而言，例如，我们可能会用WlcomeDialog是Dialog的特例。</p>
        <p>在react里面，下面也是用组合实现的，一个特殊组件渲染一个通用组件并且通过props来配置。</p>
        <PrismCode lang='jsx'>{`
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
        `}</PrismCode>
        <p>组合对于定义为class的组件同样适用</p>
        <PrismCode lang='jsx'>{`
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
        `}</PrismCode>
        <h3>那么继承又是如何呢？</h3>
        <p>在脸书，我们使用react上千的组件，然而我们还没有找到案例，我们可以考虑创造组件继承阶层。</p>
        <p>props和构成给了你灵活性，你所需要定做组件的外观和行为，用一种明确的可靠地方式。记住组件可以任意props，包括原始的value，React元素，或者函数。</p>
        <p>如果你想要在组件之间使用没有UI功能，我们建议提取他到一个分离的js模块，组件会导入他，用他的函数，对象，类，而不用扩展他。</p>
      </Col>
    )
  }
}

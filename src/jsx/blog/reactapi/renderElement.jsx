import React from "react";
import { Row, Col } from 'antd';
import PrismCode from '../../feature/Prism.js'

export default class Jsx extends React.Component {
  render() {
    return (
      <Col span={24}>
        <h3>渲染元素</h3>
        <p>element是Reactapps里面最小的构建块。</p>
        <p>把一个element写成你想要见到的样子，出现在屏幕上。</p>
        <PrismCode lang='jsx'>{`const element = <h1>Hello World!</h1>`}</PrismCode>
        <p>和浏览器的DOM不一样，React element是简单的对象，而且便于创造。React DOM负责更新DOM来和React element相匹配。</p>
        <h4>Note:</h4>
        <p>有人可能会混淆element与另一个更为人知的概念--components相混淆，我们将会在下一章节介绍components(组件)，组件由元素构成，本章以下内容希望你不要跳过。</p>
        <h4>渲染一个元素到DOM上面</h4>
        <p>这有一个&lt;div>在你的HTML文档中某一处</p>
        <PrismCode lang='jsx'>{`<div id="root"></div>`}</PrismCode>
        <p>我们称它为'root'DOM节点，因为所有里面的东西都被ReactDOM掌控，用React构建的应用通常只有一个根DOM节点。如果你想要整合一个React到一个已经存在的app里面，你可能会有任意多个DOM根节点。如果你想要渲染一个React元素，请将两者都传递给ReactDOM.render();</p>
        <PrismCode lang='js'>{`
          ReactDOM.render(
            element,
            document.getElementById('root')
          );
        `}</PrismCode>
        <p>你可以在<a href="https://codepen.io/gaearon/pen/rrpgNB?editors=1010">CodePen</a>里面尝试一下。</p>
        <p>页面会显示“hello world！”</p>
        <h4>更新已渲染的元素</h4>
        <p>React元素是<a href="https://en.wikipedia.org/wiki/Immutable_object">immutable</a>(不可变的)，一旦你创建了一个元素，你不可改变他的子元素或者属性，一个元素就像电影中某一帧，他代表某一时间节点上面的UI，到目前为止根据我们的认知，唯一改变UI的方法就是创造一个新的元素并把他传递给ReactDOM.render()</p>
        <p>思考下面这个时钟案例</p>
        <PrismCode lang='jsx'>{`
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
        `}</PrismCode>
        <p>你可以在<a href="https://codepen.io/gaearon/pen/gwoJZk?editors=0010">CodePen</a>里面尝试一下。</p>
        <p>它每秒都通过serInterval回掉函数执行一次ReactDOM</p>
        <h4>Note:</h4>
        <p>实际上，大多数Reactapp只呼叫一次ReactDOM.render(),再下一章节，我们将会学习如何将这些代码封装在组件里面.</p>
        <h4>React只更新必需品。</h4>
        <p>ReactDOM会拿它本身的元素及子元素去和上一个相比较，并且只应用更新必要的DOM使得DOM实现它想要的状态。</p>
        <p>你可以用浏览器工具来检查最后一个例子</p>
        <p>尽管我们创建了一个元素每秒来描述整个UI树，仅仅只有变化的文本节点会通过ReactDOM获得更新。</p>
        <p>在我们的这些实验中，思考UI应该如何关注给定的时刻，而不是如何随着时间而改变它，从而消除了一类bug。</p>
      </Col>
    )
  }
}

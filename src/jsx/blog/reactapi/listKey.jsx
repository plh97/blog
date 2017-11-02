import React from "react";
import { Row, Col } from 'antd';
import PrismCode from '../../feature/Prism.js'

export default class ListKey extends React.Component {
  render() {
    return (
      <Col span={24}>
        <h3>列表和键值</h3>
        <p>首先，让我们回顾，你如何转换列表到js里面</p>
        <p>下面代码，我们用<code>map()</code>函数来吧一个数组<code>numbers</code>并把他的值双倍。我们加入新数组，通过<code>map()</code>讲新数组返回给<code>doubled</code>并且<code>console.log</code>他。</p>
        <PrismCode lang='jsx'>{`
          const numbers = [1,2,3,4,5];
          const doubled = number.map((number) => number*2);
          console.log(doubled);
        `}</PrismCode>
        <p>这代码会输出<code>[2,4,6,8,10]</code></p>
        <p>在React里面，将数组转化成元素列表是等价转换。</p>
        <h4>渲染多个组件</h4>
        <p>你可以建立一个元素收集器并且用{}将他们包括在JSX里面</p>
        <p>下面，我们循环<code>numbers</code>数组，通过js <code>map()</code>函数，我们可以返回一个<code>&lt;li></code>元素，给每个数组，最终，我们将会分配这些数组给<code>listItems</code>:</p>
        <PrismCode lang='jsx'>{`
          const numbers = [1,2,3,4,5];
          const listItems = numbers.map((number) =>
            <li>{number}</li>
          );
          ReactDOM.render(
            <ul>{listItems}</ul>,
            document.getElementById('root')
          );
        `}</PrismCode>
        <p>这个代码会显示1到5</p>
        <h4>基础列表组件</h4>
        <p>经常，你可能会把列表渲染到一个组件上面。</p>
        <p>我们可以重构上一个例子，通过一个组件，接受一个数组<code>numbers</code>并且输出一个无序列表元素。</p>
        <PrismCode lang='jsx'>{`
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
        `}</PrismCode>
        <p>当你运行这个代码，你将会得到一个警告，一个兼职应该提供给这个列表项。一个'Key'兼职是一个特殊的字符串属性，你应该包括，每当创建一个列表元素，我们将会讨论，为什么这个这个重要，在下一个章节。</p>
        <p>让我们加入一个<code>key</code>到我们列表项目通过<code>numbers.map()</code>,并且修复这个丢失键值的错误</p>
        <PrismCode lang='jsx'>{`
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
        `}</PrismCode>
        <p>当你运行这段代码的时候，你将会得到一个warning，你需要提供一个key给列表项。"key"是一个特殊的字符串属性，你需要囊括的，当你创建一个元素列表，我们将会讨论在下一章节，问什么这个key这么重要。</p>
        <p>让我们加入一个key给我们的列表项，来修复这个丢失key的错误。</p>
        <PrismCode lang='jsx'>{`
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
        `}</PrismCode>
        <h3>Keys</h3>
        <p>Keys帮助React识别身份，每当item改变，增减的时候。Keys应该被提供给元素一个稳定的身份。</p>
        <PrismCode lang='jsx'>{`
          const numbers = [1,2,3,4,5];
          const listItems = numbers.map((number) =>
            <li key={number.toString()}>
              {number}
            </li>
          )
        `}</PrismCode>
        <p>最好的方式来得到一个key是用一个字符串，可以独特的识别一个列表项，与他的兄弟元素对比。大多数时候，你会用IDs来自于你的数据来当做keys</p>
        <PrismCode lang='jsx'>{`
          const todoItems = todos.map((todo) =>
            <li key={todo.id}>
              {todo.text}
            </li>
          )
        `}</PrismCode>
        <p>当你不有合适的IDs来渲染这些数列，你可以用项目索引当作为key来作为最后的手段。</p>
        <PrismCode lang='jsx'>{`
          const todoItems = todos.map((todo,index) =>
            //只做this，如果项目没有合适IDs
            <li key={index}>{todo.text}</li>
          )
        `}</PrismCode>
        <p>如果项目可以重新排序，我们不考虑使用索引来当做keys，这样会很慢。你也许可以阅读一篇文章<a href="https://facebook.github.io/react/docs/reconciliation.html#recursing-on-children">深入解释why keys是必须</a>如果你有兴趣。</p>
        <h4>通过Keys提取组件</h4>
        <p>Keys只在周围数组的内容中有意义。为什么呢，因为原文：Keys only make sense in the context of the surrounding array.我真心看不懂翻译软件也不行，surrounding array到底什么意思。</p>
        <p>例如，如果你提取一个<code>ListItem</code>组件，你应该将key放在<code>&lt;ListItem/></code>元素的数组里面，而不是在他本身的根元素<code>&lt;li></code>里面。</p>
        <h4>例子：不正确的Key用法</h4>
        <PrismCode lang='jsx'>{`
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
        `}</PrismCode>
        <p>举栗：正确的Key用法</p>
        <PrismCode lang='jsx'>{`
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
        `}</PrismCode>
        <p>一个比较好的经验法则，就是<code>map()</code>的调用需要key（键值）。</p>
        <h4>keys在它相邻的元素中应该是独一无二的</h4>
        <p>在数组中使用Keys必须是唯一的。然而，我们不需要全局的独一无二，我们可以在两个不同数组中使用同一个键值：</p>
        <PrismCode lang='jsx'>{`
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
        `}</PrismCode>
        <p>在<a href="https://codepen.io/gaearon/pen/NRZYGN?editors=0010" target="_blank">CodePen</a>试试吧！</p>
        <p>Keys给React提供了一些提示，但它不传递给组件。如果你想传，那看下面代码啊</p>
        <PrismCode lang='jsx'>{`
          function content = posts.map((post) =>
            <Post
              key={post.id}
              id={post.id}
              title={post.title}
            />
          );
        `}</PrismCode>
        <p>上述例子，Post组件可以读取<code>posts.id</code>,但不能读取<code>posts.key</code>.</p>
        <h3>在JSX里面内嵌map()</h3>
        <p>在上述例子我们声明了一个<code>listItems</code>变量，并且将他包括在JSX里面：</p>
        <PrismCode lang='jsx'>{`
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
        `}</PrismCode>
        <p>JSX允许嵌入任何表达式在花括号中，所以我们可以内联<code>map()</code>的结果：</p>
        <PrismCode lang='jsx'>{`
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
        `}</PrismCode>
        <p>在<a href="https://codepen.io/gaearon/pen/BLvYrB?editors=0010" target="_blank">CodePen</a>里面试试吧！</p>
        <p>有时候，这可以是更加清晰的代码，但样式也可能被滥用，就像在js里面，这取决于你的决定是否为了可读性而提取一个变量。记住，如果map()的主体是嵌套的，这可能就需要去提取一个组件了。</p>
      </Col>
    )
  }
}

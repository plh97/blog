import React from "react";
import { Row, Col } from 'antd';

export default class Form extends React.Component {
  render() {
    return (
      <Col span={24}>
        <h3>Forms</h3>
<p>in React,HTML form元素和HTML的其他元素相比，工作方式略有不同，应为表格元素天然的保存一些internal状态，例如，下面这个表格就是为了HTML接受一个单一的名字。</p>
<pre><code className="language-html">{
`<form>
  <label>
    Name:
    <input type="text" name="name">
  </label>
  <input type="submit" value="Submit">
</form>`
}</code></pre>
<p>当用户提交信息的时候，这个表格有默认的浏览器行为来跳到新页面。如果你想要在React里面也有这个行为，他只是运行。但是在大多数例子里面。如果让js函数来处理表单提交，并且接受用户输入的数据，这是很方便的。标准方式来获取这个可以通过一个技巧“控制组件”</p>
<h4>受控的组件</h4>
<p>在HTML里面，表单元素例如<code>&lt;input></code><code>&lt;textarea></code>和<code>&lt;select></code>经常维护他们自己的状态并且基于用户输入来更新。in react，可变的状态通常保存在组件的state属性里面，并且只能用<code>setState()</code>来更新。</p>
<p>我们可以将两者结合起来，使React state成为“单一来源的真理”。所以，React组件渲染一个表格同时也控制用户表格输入。一个输入表格元素的值同时也被react控制着，这种方式叫做“controlled component”。</p>
<p>例如。如果你想使得上一个例子输出名字，当用户提交的时候。我们可以写表格，按照一个控制组件来写。</p>
<pre><code className="language-javascript">{
`calss NmaeForm extends React.Component {
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
        &lt;/label>
        <input type="submit" value="Submit" />
      &lt;/form>
    )
  }
}`
}</code></pre>
<p>直到<code>value</code>属性被设置在我们的表格元素中，它显示的值永远是<code>this.state.value</code>，使得React状态准确。直到<code>handleChange</code>运行，使得每一个键盘敲击都会更新React状态，这个显示的值会按照用户种类进行更新。</p>
<p>with一个被控制的组件，每一个state的变化都会有一个被关联的函数处理器。这使得它更简单的修改或者验证用户输出。举栗，如果我们想强制用户大写字母，我们可以将<code>handleChange</code>这样写:</p>
<pre><code className="language-javascript">{
`handleChange(event){
  this.setState({value:e.target.value.toUpperCase()});
}`
}</code></pre>
<h4>textarea标签</h4>
<p>在HTML，一个<code>&lt;textarea></code>这样写:</p>
<pre><code className="language-html">{`
  <textarea>Hello there, this is some text in a text area</textarea>
`}</code></pre>
<p>in React，一个<code>{`<textarea/>`}</code>用一个<code>value</code>属性代替。这样，一个表单用一个<code>{`<textarea/>`}</code>，可以写成非常相似于一个表单，这样使用单行输出。</p>
<pre><code className="language-javascript">{
`calss NmaeForm extends React.Component {
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
}`
}</code></pre>
<p>注意了，<code>this.state.value</code>在constructor中初始化，所以里面有一些内容。</p>
<h4>select标签</h4>
<p>在HTML,<code>&lt;select></code>创建了一个下拉列表，</p>
<pre><code className="language-html">{
`<select>
  <option value="grapefruit">Grapefruit</option>
  <option value="lime">Lime</option>
  <option selected value="coconut">Coconut</option>
  <option value="mango">Mango</option>
</select>`
}</code></pre>
<p>注意，这个Coconut是最初选项，因为他有<code>selected</code>属性，in React,替代selected属性的是，使用一个<code>value</code>属性在他的根标签，<code>select</code>里面。这样在一个控制组件里面更便捷，因为你只需要更新一个地方。下面代码例子：</p>
<pre><code className="language-javascript">{
`calss FlavorForm extends React.Component {
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
}`
}</code></pre>
<p>你可以在<a href="https://codepen.io/gaearon/pen/JbbEzX?editors=0010">CodePen</a>里面尝试一下</p>
<p>以上，这使得<code>&lt;input type="text"></code><code>&lt;textarea/></code><code>&li;select></code>全部都工作很相似，他们都接受一个<code>value</code>属性，你可以用它来实现一个控制组件。</p>
<h4>处理多个inputs</h4>
<p>当你需要处理多个被控制的<code>input</code>元素，你可以加入一个<code>name</code>属性给每个元素，并且让函数处理器来基于<code>event.target.name</code>来做一些事情。</p>
<pre><code className="language-javascript">{
`class EssayForm extends React.Component {
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
}`
}</code></pre>
<p>注意，我们是如何使用ES6的<a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Object_initializer#Computed_property_names">computed property name</a>语法来更新state的键值，并相应的给定输出名称：</p>
<pre><code className="language-javascript">{
`this.setState({
  [name]:value
})`
}</code></pre>
<p>same to es5 below</p>
<pre><code className="language-javascript">{
`var partiaState = {};
partiaState[name] = value;
this.setState(partiaState);`
}</code></pre>
<p>also,现在<code>setState()</code>自动的合并一部分state到当前state，我们只需要调用改变的部分。</p>
<h4>Controlled Component备胎</h4>
<p>有时候用控制组件很烦，因为你需要为数据更改来编写一个事件处理并且通过React组件管理全部的输入state。更烦的是，当你给react转换一个预存代码库给React,或者整合一个React应用通过一个没有React的library。这种情况下，你可能会想要试试uncontrolled components,一个输入表格的备用技术。</p>
      </Col>
    )
  }
}

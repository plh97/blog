import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { androidstudio } from "react-syntax-highlighter/dist/styles";
import { Row, Col } from 'antd';

export default class LivingStateUp extends React.Component {
  constructor() {
    super();
    this.state = {
      language: "",
      style: androidstudio,
      showLineNumbers: true
    };
  }
  render() {
    const showLineNumbers = this.state.showLineNumbers;
    const language = this.state.language;
    const style = this.state.style;
    return (
      <Col span={24}>
        <h3>state状态提升</h3>
        <p>经常，多个组件需要映射同一变化的数据，我们考虑提升共享状态，给他们最近的共同祖先，让我们看看这是如何工作的。</p>
        <p>在这一章节，我们将会创造一个温度计算器来计算在我们给定温度下，水是否会沸腾。</p>
        <p>我们将会通过一个组件<code>BoilingVerdict</code>开始.它接受<code>celsius</code>温度作为一个传递的参数，并且打印它是否足够让水沸腾。</p>
        <SyntaxHighlighter showLineNumbers={showLineNumbers} language={language} style={style}>{`function BoilingVerdict(props){
  if(props.celsius >= 100){
    return <p>The water would boil.&le;/p>
  }
  return <p>The water would not boil.&le;/p>
}
`}</SyntaxHighlighter>
<p>接下来，我们将会创造一个组件<code>BoilingVerdict</code>。它渲染一个<code>&lt;input/></code>让你输入温度，并且将值保存在<code>this.state.temperature</code>.</p>
<p>另外，它为当前输出值渲染<code>BoilingVerdict</code>.</p>
<SyntaxHighlighter showLineNumbers={showLineNumbers} language={language} style={style}>{`class Calculator extends React.Component{
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
<SyntaxHighlighter showLineNumbers={showLineNumbers} language={language} style={style}>{`const scaleName = {
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
<SyntaxHighlighter showLineNumbers={showLineNumbers} language={language} style={style}>{`class Calculator extends React.Component{
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
<SyntaxHighlighter showLineNumbers={showLineNumbers} language={language} style={style}>{`function toCelsius(fahrenheit){
  return (fahrenheit-32)*5/9;
}
function toFahrenheit(celsius){
  return (fahrenheit*9/5)+32;
}
`}</SyntaxHighlighter>
<p>这两个函数转换数字，我们将会写另一个函数，这个函数需要一个字符串<code>temperature</code>,并且转换一个函数当作一个内置对象<code>arguments</code>,并且返回一个字符串。我们将会用它来计算出一个input的值基于另一个input。</p>
<p>它返回一个空的字符串在一个无效的<code>temperature</code>,并且它保持输出小数后面三位数。</p>
<SyntaxHighlighter showLineNumbers={showLineNumbers} language={language} style={style}>{`function tryConvert (temperature,convert){
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
<SyntaxHighlighter showLineNumbers={showLineNumbers} language={language} style={style}>{`class TemperatureInput extends React.Component{
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
<SyntaxHighlighter showLineNumbers={showLineNumbers} language={language} style={style}>{`render(){
  //之前：const temperature = this.state.temperature;
  const temperature = this.props.temperature;
}
`}</SyntaxHighlighter>
<p>我们知道props只能读取。当<code>temperature</code>在本地状态的时候，他可以调用<code>this.setState()</code>来改变它。然而现在它作为props来自父组件，<code>Temperatures</code>没有他的控制权。</p>
<p>在react里面，这通常用<code>controlled component</code>来解决，就像DOM元素<code>&lt;input></code>接受同一个<code>value</code>和一个<code>onChange</code>props,所以，可以让<code>Temperatures</code>接受<code>Temperatures</code>和<code>TemperatureInput</code>的props来自于他们的父<code>Calculator</code>。</p>
<p>现在，当<code>TemperatureInput</code>想要更新温度，他会调用<code>this.props.onTemperatureChange</code>:</p>
<SyntaxHighlighter showLineNumbers={showLineNumbers} language={language} style={style}>{`handleChange(e){
  //this.setState({temperature:e.target.value})
  this.props.onTemperatureChange(e.target.value);
}
`}</SyntaxHighlighter>
<p>注意：<code>Temperature</code>或者<code>TemperatureInput</code>名字没有特殊含义，我们也可以给他们取其他名字。</p>
<p><code>onTemperatureChange</code>的prop将会被一起提供，<code>temperature</code>prop通过他们的父组件<code>Calculator</code>,这将会处理这个变化，他们自己的的本地状态修改的变化。因此重复渲染在他们的新值。我们将很快看到新的<code>Calculator</code>实现。在深入了解Calculator组件的变化之前，让我们回顾一下我们对<code>TemperatureInput</code>组件所做出的改变，我们已经把本地状态移除，替换了<code>this.state.temperature</code>,我们现在有的是<code>this.props.tempareture</code>,将<code>this.setState()</code>替换成<code>this.props.onTemperatureChange()</code>:</p>
<SyntaxHighlighter showLineNumbers={showLineNumbers} language={language} style={style}>{`class TemperatureInput extends React.Component{
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
      &le;/fieldset>
    )
  }
}
`}</SyntaxHighlighter>
<p>现在我们将注意力转到<code>Calculator</code>组件</p>
<p>我们将储存当前input的<code>temperature</code>，和scale在本地状态。这个state我们从inputs中提升上来的，被称作两者来源，这是为了呈现两个输入，我们需要知道的所有数据的最小表示。</p>
<p>例如，如果我们登入37在其中一个摄氏度input，calculatro组件状态如下：</p>
<SyntaxHighlighter showLineNumbers={showLineNumbers} language={language} style={style}>{`{
  temperature:37,
  scale:'c'
}
`}</SyntaxHighlighter>
<p>如果我们接下来我们稍后将华氏度编成212，calculator状态如下</p>
<SyntaxHighlighter showLineNumbers={showLineNumbers} language={language} style={style}>{`{
  temperature:212,
  scale:'f'
}
`}</SyntaxHighlighter>
<p>我们可以储存两个值，但事实证明这个是不必要的，储存当前改变的输出值，并且由scale来表现他，我们可以推断这个值，分别基于另一个值当前的<code>temperature</code>和<code>scale</code></p>
<p>这个输出可以保持同步，因为这个值是基于同一个state来计算的</p>
<SyntaxHighlighter showLineNumbers={showLineNumbers} language={language} style={style}>{`class Calculator extends React.Component{
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
      </Col>
    )
  }
}

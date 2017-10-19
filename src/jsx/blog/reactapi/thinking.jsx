import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { androidstudio } from "react-syntax-highlighter/dist/styles";
import { Row, Col } from 'antd';

export default class Thinking extends React.Component {
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
        <h3>思考React</h3>
<p>React是，在我们的观点中，第一方式要建立一个快大的webapp通过js来写，他在facebook和instagram中对我们影响非常大。</p>
<p>React的一个最伟大的部分就是是你考虑关于app正如你说建造的。在这篇文中，我们将会带你建立一个可搜索的产品数据。</p>
<h4>通过一个模仿开始</h4>
<p>想象我们已经有一个json api，和一个设计稿，样子如下。</p>
<img src="https://facebook.github.io/react/img/blog/thinking-in-react-mock.png" />
<p>我们的jsonapi输出一些数据，像下面这个样子。</p>
<SyntaxHighlighter showLineNumbers={showLineNumbers} language={language} style={style}>{`[
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
<img src="https://facebook.github.io/react/img/blog/thinking-in-react-components.png" />
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
<SyntaxHighlighter showLineNumbers={showLineNumbers} language={language} style={style}>{`class ProductCategoryRow extends React.Component{
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
      &le;/form>
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
<SyntaxHighlighter showLineNumbers={showLineNumbers} language={language} style={style}>{`class ProductCategoryRow extends React.Component{
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
      &le;/form>
    )
  }
}

class FilterableProductTable extends React.Component{
  render(){
    return(
      <div>
        <SearchBar filterText = {this.state.filterText} inStockOnly={this.state.inStockOnly />
        <Product products={this.props.products} filterText = {this.state.filterText} inStockOnly={this.state.inStockOnly />
      &le;/div>
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
<SyntaxHighlighter showLineNumbers={showLineNumbers} language={language} style={style}>{`class ProductCategoryRow extends React.Component {
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
      </Col>
    )
  }
}

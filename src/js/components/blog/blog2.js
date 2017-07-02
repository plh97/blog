import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { monokai,androidstudio } from 'react-syntax-highlighter/dist/styles';
export default class Blog2 extends React.Component{
  constructor(){
    super();
    this.state = {
      language:"",
      style:androidstudio,
      showLineNumbers: true,
    }
  }
  render(){
    return(
      <div>
        <div class="container-context container">
          <div class="col-sm-12">
            <h3>object</h3>
            <h4>no-new-object</h4>
            <SyntaxHighlighter showLineNumbers={this.state.showLineNumbers} language={this.state.language} style={this.state.style}>{`
//bad 
const item = new Object();

//god
const item = {};
            `}</SyntaxHighlighter>
            <h4>property names</h4>
            <SyntaxHighlighter showLineNumbers={this.state.showLineNumbers} language={this.state.language} style={this.state.style}>{`
function getKey(k){
  return 'a key named k';
}

//bad
const obj = {
  id : 5,
  name:"San francisco"
};
obj[getKey('enabled')] = true;

//good
const obj = {
  id:5,
  name:"san francisco",
  [getKey('enabled')]:true
};
            `}</SyntaxHighlighter>
            <h4>use boject method </h4>
            <SyntaxHighlighter showLineNumbers={this.state.showLineNumbers} language={this.state.language} style={this.state.style}>{`
//bad
const atom = {
  value:1,
  addValue: function(value){
    return atom.value + value;
  }
}
//good 
const atom = {
  value:1,
  addValue(value){
    return atom.value + value;
  }
}
            `}</SyntaxHighlighter>
            <h4>short to descript</h4>
            <SyntaxHighlighter showLineNumbers={this.state.showLineNumbers} language={this.state.language} style={this.state.style}>{`
const luckPerson = "luck person";

//bad
cosnt obj = {
  luckPerson:luckPerson
}

//good
const obj = {
  luckPerson
}
            `}</SyntaxHighlighter>
            <h4>shorthand properties first</h4>
            <SyntaxHighlighter showLineNumbers={this.state.showLineNumbers} language={this.state.language} style={this.state.style}>{`
const anakinSkywalker = 'Anakin Skywalker';
const lukeSkywalker = 'Luke Skywalker';

// bad
const obj = {
  episodeOne: 1,
  twoJediWalkIntoACantina: 2,
  lukeSkywalker,
  episodeThree: 3,
  mayTheFourth: 4,
  anakinSkywalker,
};

// good
const obj = {
  lukeSkywalker,
  anakinSkywalker,
  episodeOne: 1,
  twoJediWalkIntoACantina: 2,
  episodeThree: 3,
  mayTheFourth: 4,
};
            `}</SyntaxHighlighter>
            <SyntaxHighlighter showLineNumbers={this.state.showLineNumbers} language={this.state.language} style={this.state.style}>{`
// bad
const bad = {
  'foo': 3,
  'bar': 4,
  'data-blah': 5,
};

// good
const good = {
  foo: 3,
  bar: 4,
  'data-blah': 5,
};
            `}</SyntaxHighlighter>
            <SyntaxHighlighter showLineNumbers={this.state.showLineNumbers} language={this.state.language} style={this.state.style}>{`
//very bad
const ori = {a:1,b:2};
const copy = Object.assign(ori,{c:3});
delete copy.a;
//{ b: 2, c: 3}

//bad
const ori = {a:1,b:2};
const copy = Object.assign({},ori,{c:3});
//{a: 1, b: 2, c: 3}

//good
const ori = {a:1,b:2};
const copy = {...ori,c:3}//copy=>{a: 1, b: 2, c: 3}
const copy = {a,...noA} //noA=>{ b: 2, c: 3}

console.log(copy)
            `}</SyntaxHighlighter>
          </div>
          <div class="col-sm-12">
            <h3>The different between let var and const</h3>
            <p><a target="_blank" href="https://github.com/airbnb/javascript">ES5 (Deprecated)</a>ES5(javascript已经被弃用)，ES6已经更新，事实上呢，前端发展飞速，众多框架，react，angular，vue，前端自动化工具gulp，grunt，包管理工具bower，甚至webpack项目搭建工具，node服务器搭建，等等五花八门迅速膨胀。以前以为变化再多，万变不离其宗，HTML,CSS,JS,这三大基础是不变的，现在css4即将出来，javascript甚至连基本的Var也将要被弃用。javascript使用人数迅速增加，github已经有50k星了，javascript开启"use strict"模式</p>
            <h4>the bug of var</h4>
            <SyntaxHighlighter showLineNumbers={this.state.showLineNumbers} language={this.state.language} style={this.state.style}>{`
var a = "b";
var a = "a";//居然可以重复命名，c
console.log(a);//输出"a"

for(var i = 10 ; i>0; i--){
  var a = "a";
}
console.log(a);//输出:"a",,明明已经跳出循环了，居然还可以访问到里面的a变量，i=0，这不得不说是一个重大bug

for(var i = 10; i>10; i--){
  setTimeout(function(){
    console.log(i); //so intersting with what will i console ;
                    //it console tenth of zero;if it's var ,the next turn can change the one before var it;
                    //that a big bug;so many people say that javascript is a lazy computer language;
  },1000)
}
            `}</SyntaxHighlighter>
            <h4>let</h4>
            <p>Tip: 必须先声明"use strict"才能使用let变量进行声明，否则浏览器不会显示。</p>
            <p>首先声明，let和var很像，都是用来声明变量的，let声明的变量拥有块级作用域,let声明的全局变量不是全局对象的属性</p>
            <SyntaxHighlighter showLineNumbers={this.state.showLineNumbers} language={this.state.language} style={this.state.style}>{`
var abs = "123";
console.log(abs);//123

let abs = "123";
console.log(abs);//undefined
            `}</SyntaxHighlighter>
            <p>对于for循环这样的闭包函数，被一次循环let的变量虽然名字相同，但是是不同的变量名称。</p>
            <h4>const</h4>
            <p>const常量的命名，这没什么好说的。不能重复命名常量。</p>
            <p>both let and const are block-scoped</p>
            <SyntaxHighlighter showLineNumbers={this.state.showLineNumbers} language={this.state.language} style={this.state.style}>{`
{
  let a = 1;
  const b = 2;
}
console.log(a,b);//referenceError ,both are undefined
            `}</SyntaxHighlighter>
          </div>
          <div class="col-sm-12">
            <h3>关于javascript----基础知识篇;</h3>
            <h4>注释(Comments)</h4>
            <SyntaxHighlighter showLineNumbers={this.state.showLineNumbers} language={this.state.language} style={this.state.style}>{`
// 单行注释
/*这个是一个多行注释
 多行注释
*/
/*你不能，但是，/*嵌套注释*/语法错误*/
            `}</SyntaxHighlighter>
            <h4>声明(Declarations)</h4>
            <p>javascript有三种声名。</p>
            <p>var</p>
            <p>声明变量，可选初始化值。</p>
            <p>let</p>
            <p>声明块范围局部变量，可选初始化值。</p>
            <p>const</p>
            <p>声明一个只读命名常量。</p>
            <h4>变量</h4>
            <p>在应用程序中，一个标识符必须以字母、下划线(_)或者美元符号开头;后续字母可以含(0~9)。
            因为javascript语言是区分大小写的，这里所指的字母可以是大写英文字母也可以是小写的。</p>
            <p>var</p>
            <p>声明变量，可选初始化值。</p>
            <p>let</p>
            <p>声明块范围局部变量，可选初始化值。</p>
            <p>const</p>
            <p>声明一个只读命名常量。</p>
            <h4>声明变量</h4>
            <p>你可以用以下两种方式声明变量：</p>
            <SyntaxHighlighter showLineNumbers={this.state.showLineNumbers} language={this.state.language} style={this.state.style}>{`
使用关键词var。例如，var x = 42。这个语法可以同时声明局部和全局变量。
直接赋值。例如，x = 42。这样就声明了一个全局变量，并导致javascript编译时候产生一个严格警告。因而你应该避免使用这种非常规格式。
            `}</SyntaxHighlighter>
            <h4>对变量求值</h4>
            <p>用 var 或 let    声明时未赋初值的变量，值会被设定为undefined（即使未定义，本身也是一个值）。</p>
            <p>试图访问一个未初始化的变量会导致一个ReferenceError异常被抛出：</p>
            <SyntaxHighlighter showLineNumbers={this.state.showLineNumbers} language={this.state.language} style={this.state.style}>{`
var a;
console.log("The value of a is " + a); // logs"The value of a is undefined"
console.log("The value of b is " + b); // throw ReferenceError expection
            `}</SyntaxHighlighter>
          </div>
        </div>
      </div>
    )
  }
}


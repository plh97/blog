import React from 'react';
import PrismCode from '../../feature/Prism';

const sessionCookie = () => (
  <div>
    <h3>Array.prototype</h3>
    <h4>自定义 ES6 Map 函数</h4>
    <PrismCode lang="js">{`
      Array.prototype.myMap = function(callback) {  //此处必须使用function形式，不能使用 arrow function,其他地方随意。
        let result = []
        this.forEach((item, index, arr) => {
          result.push(callback(item, index, arr));
        })
        return result;
      }
      //above function ,we setting a Array prototype which named myMap,you can copy it into your browser console.
      let a = [1,2,3,4,5,6]
      //myMap if a pure function ,if only output but not change the input
      //out same resule
      console.log(a.myMap(i=>i+1))
      console.log(a.map(i=>i+1))
      //suggest to try it on your browser console
    `}
    </PrismCode>
    <h4>自定义 Es6 Filter 函数</h4>
    <PrismCode lang="js">{`
      Array.prototype.myFilter = function(callback) {
        let result = []
        this.forEach((item, index, arr) => {
          callback(item, index, arr) && result.push(item);
        })
        return result;
      }
      console.log(a.filter(i=> i===1 )) //output you can see it
    `}
    </PrismCode>
    <h4>pure func can be more readable</h4>
    <p>above example shows that pure eg: filter map</p>
    <PrismCode lang="js">{`
      //filter && change each list value
      a.fliter(i=> i>1 ).map(i => i+1)
    `}
    </PrismCode>
    <h4>Array.prototype</h4>
    <p>sometimes you forget how to improve array eg:arr.slice() arr.join() arr.pop()</p>
    <p>
      run <code className="language-js">Array.prototype</code> on your browser console
      you may got this
    </p>
    <PrismCode lang="js">{`
      concat : ƒ concat()
      constructor : ƒ Array()
      copyWithin : ƒ copyWithin()
      entries : ƒ entries()
      every : ƒ every()
      fill : ƒ fill()
      filter : ƒ filter()
      find : ƒ find()
      findIndex : ƒ findIndex()
      forEach : ƒ forEach()
      includes : ƒ includes()
      indexOf : ƒ indexOf()
      join : ƒ join()
      keys : ƒ keys()
      lastIndexOf : ƒ lastIndexOf()
      length : 0
      map : ƒ map()
      pop : ƒ pop()
      push : ƒ push()
      reduce : ƒ reduce()
      reduceRight : ƒ reduceRight()
      reverse : ƒ reverse()
      shift : ƒ shift()
      slice : ƒ slice()
      some : ƒ some()
      sort : ƒ sort()
      splice : ƒ splice()
      toLocaleString : ƒ toLocaleString()
      toString : ƒ toString()
      unshift : ƒ unshift()
      Symbol(Symbol.iterator) : ƒ values()
      Symbol(Symbol.unscopables) : {copyWithin: true,entries: true,fill: true,find: true,findIndex: true}
      __proto__ : Object
    `}
    </PrismCode>
    <p>all the prototype you can got above,this can be your list.</p>
    <p>
      the same as<code className="language-js">Function.prototype</code>
    </p>
  </div>
);
export default sessionCookie;

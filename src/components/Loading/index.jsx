import React, { Component } from 'react';
import './index.scss';



export default class Loading extends Component {
  constructor () {
    super();
    this.state = {text: ''};
  }

  shouldComponentUpdate(nextProps ,nextState){
    if(
      this.props.isShow === nextProps.isShow &&
      this.state.text === nextState.text
    ){
      return false
    }
    return true
    
  }
  
  changeTextFunc = (e) => {
    this.setState({text:e.target.value})
  }

  render() {
    const {isShow} = this.props;
    
    return (
      <div className={`Loading ${isShow?'':'hide'}`}>
        ...加载中
      </div>
    );
  }
};





import React, { Component } from 'react';
import './index.scss';



export default class Dialog extends Component {
  constructor () {
    super();
    this.state = {text: ''};
  }
  close = () => {
    this.setState({text: ''});
    this.props.toggleDialog({
      id: this.props.data.id,
      status: false
    })
  }
  add = () => {    
    this.props.addResource({
      text: this.state.text,
      id: this.props.data.id,
      data: this.props.data,
    })
    this.close()
  }
  
  enterKeyPress = (e) => {
    if(e.key==='Enter'){
      this.add();
    }
  }

  componentDidUpdate(){
    this.refs.input.focus()
  }

  shouldComponentUpdate(nextProps ,nextState){
    if(
      this.props.data.dialogOpenStatus === nextProps.data.dialogOpenStatus &&
      this.state.text === nextState.text
    ){
      return false
    }
    return true
    
  }
  
  changeTextFunc = (e) => {
    this.setState({text:e.target.value})
  }

  // static getDerivedStateFromProps(props,state){    
  //   return state;
  // }

  render() {
    const {dialogOpenStatus} = this.props.data;
    
    return (
      <div ref="dialog" className={`Dialog-container ${dialogOpenStatus?'':'hide'}`}>
        <i onClick={this.close} className="Dialog-close icon-medium icon-close"></i>
        <p className="Dialog-title">Separate multiple resource name with commas</p>
        <input 
          ref="input" 
          value={this.state.text} 
          className="Dialog-input"
          placeholder="input value" 
          onKeyPress={this.enterKeyPress} 
          onChange={this.changeTextFunc} 
        />
        <div className="Dialog-btns">
          <button onClick={this.add} className="Dialog-comfirm">Add Resource</button>
          <button onClick={this.close} className="Dialog-cancel">Cancel</button>
        </div>
      </div>
    );
  }
};





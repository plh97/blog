import React, { Component } from 'react';
import { connect } from 'react-redux';
import './index.scss';
import {
  SetFilterMode,
  FetchNewsTitle,
  ToggleDialog,
  AddAgent,
} from '../../actions/index';
// import { catchDom } from '../../utils';
import axios from 'axios'

class HomePage extends Component {
  componentDidMount() {
    axios({
      url: "http://localhost:3001/graphql", 
      method: "post",
      data: {
        css: `
          body:{
            color: red;
          }
        `
      }
    });
  }
  render() {
    return (
      <div className="HomePage-container">
        主页
      </div>
    );
  }
};





function mapDispatchToProps(
  dispatch,
  ownProps
) {
  return {
    setFilterMode: (mode) => {
      dispatch(
        SetFilterMode(mode.toLowerCase())
      )
    },
    fetchNewsTitle: () => {
      dispatch(
        FetchNewsTitle()
      )
    },
    toggleDialog: (arg) => {
      dispatch(ToggleDialog(arg))
    },
    addAgent: (arg) => {
      dispatch(AddAgent(arg))
    },
  }
}

const mapStateToProps = state => state;

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);

export default VisibleTodoList;

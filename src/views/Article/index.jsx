import React, { Component } from 'react';
import { connect } from 'react-redux';
import './index.scss';
import { 
  SetFilterMode,
  FetchNewsTitle,
  ToggleDialog,
  // AddAgent,
} from '../../actions/index';
// import {catchDom} from '../../utils';


class AgentPage extends Component {
  render() {
    return (
      <div onClick={this.globalPageEventProxy} className="ArticlePage-container">
        文章列表

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
  }
}

const mapStateToProps = state => state;

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(AgentPage);

export default VisibleTodoList;

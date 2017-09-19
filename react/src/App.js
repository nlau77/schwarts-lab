import React, { Component } from 'react';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';
import Research from './containers/Research'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      selectedLabel : "cheese"
    }
  }



  render () {
    let labelDisplay;
    if(this.state.selectedLabel === "cheese" ){
     let labelDisplay = `<Research />`
    }

    return (
      <div>
        <div className="lab-header">
          <div className="row text-center">
            <p className="lab-title">Schwarts Lab</p>
          </div>
          <div className="row">
            <p className="text-center">Place holder for scrolling images</p>
          </div>
          <div className="row labels-header">
            <p className="columns small-3 text-center">Research</p>
            <p className="columns small-3 text-center">Lab History</p>
            <p className="columns small-3 text-center">Methods</p>
            <p className="columns small-3 text-center">Context</p>
          </div>
        </div>
        <div>
          {labelDisplay}
        </div>
      </div>
    )
  }
}

export default App

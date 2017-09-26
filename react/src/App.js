import React, { Component } from 'react';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';
// import { BrowserRouter } from 'react-router-dom';

import Research from './containers/Research'
import Layout from './containers/Layout'

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
            <p className="lab-title">Schwartz Lab</p>
          </div>
          <div className="row">
            <img className="pictureSlide" src={assetHelper["purple.jpg"]}></img>
            <p className="text-center">Place holder for scrolling images</p>
          </div>
          <div className="row labels-header">
            <p className="columns small-3 text-center">Research</p>
            <p className="columns small-3 text-center">Lab History</p>
            <p className="columns small-3 text-center">Methods</p>
            <p className="columns small-3 text-center">Contacts</p>
          </div>
        </div>

        <div>
          <Research />
        </div>
      </div>
    )
  }
}

export default App

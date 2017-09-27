import React, { Component } from 'react';
// import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';
import { BrowserRouter as Router, Route } from 'react-router-dom';
console.log(Route)
import Research from './containers/Research'
import Methods from './containers/Methods'
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

        </div>
        <Router>
          <div>
          <div>
            <Layout />
          </div>
          <div>
            <Route exact path="/" component={Research} />
            <Route exact path="/methods" component={Methods} />
            <Route exact path="/history" component={Methods} />
            <Route exact path="/contact" component={Methods} />
          </div>
          </div>
        </Router>
        <div>
          <p>Place Holder for bottom</p>
        </div>
      </div>
    )
  }
}

export default App

import React, { Component } from 'react';

class Contacts extends Component {
  constructor(props){
    super(props);
    this.state = {

      }
  }

  render(){
    return (
      <div className="contacts-header">
        <div className="row">
          <h3>PI</h3>
          <div className="columns small-4 small-offset-1">
          <img className="" src={assetHelper["cat.jpg"]}></img>
          </div>
          <div className="columns small-6">
            <ul className="PI-info">
              <li>Title: Yale PI </li>
              <li>email: @</li>
              <li>phone: 555-555-5555</li>
              <li>address: Yale </li>
            </ul>
          </div>
        </div>
        <div className="rows">
          <h3>Members</h3>
        </div>
        <div className="rows">
          <h3>Past Members</h3>
        </div>
      </div>
    )
  }
}

export default Contacts;

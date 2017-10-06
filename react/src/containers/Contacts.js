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
          <h3 className="contact-title">PI</h3>
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
        <div className="row members-header">
          <h3 className="contact-title">Members</h3>
        </div>
        <div className="row past-member-header">
          <h3 className="contact-title">Past Members</h3>
        </div>
      </div>
    )
  }
}

export default Contacts;

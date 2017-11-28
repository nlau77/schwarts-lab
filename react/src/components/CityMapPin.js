import React, { Component } from 'react';

class CityMapPin extends Component {
  constructor(props){
    super(props)
    this.state= {
      toggleLayer : "false"
    }
    this.pinMouseHover = this.pinMouseHover.bind(this)
  }

  pinMouseHover(event){
    console.log("lalallala")
    this.setState({ toggleLayer : "true"})
    console.log(this.state.toggleLayer)
  }
  render(){

    let members = this.props.members.map(member =>{

      return (
      <li key={member}>{member}</li>
      )
    })
    return (
      <div>
        <div id="layer1" className="imglayer">
          <img className="pins" src={assetHelper["GooglePin.png"]}></img>
        </div>

        <div id="layer2" className="cityTopComponent" style={{height: '100x', width: '150px', color: "#19A7C7"}}>
          <h4>{this.props.city}</h4>
          <h4>{this.props.lab}</h4>
          <ul>
            {members}
          </ul>
        </div>
      </div>
    )
  }
}

export default CityMapPin

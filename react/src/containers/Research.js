import React, { Component } from 'react';

class Research extends Component {
  constructor(props){
    super(props)
    this.state ={}
  }
  render(){
    return(
      <div>
        <div className="row top-interest">
          <div className="small-4 columns">
            <h5 className="interest-content1 text-center">Mechanotransduction</h5>
            <img className="hoverImages" src={assetHelper["purple.jpg"]}></img>
            <span className="interest-content">
              <span className="interest-content2">
                <ul className="topic-lists">
                  <li>Classifying focal adhesions and their dynamics under varying mechanical strain and substrate stiffness.</li>
                </ul>
              </span>
            </span>
          </div>
          <div className="small-4 columns right-interest">
            <h5 className="interest-content1 text-center">Endothelial cell flow sensing</h5>
            <img className="hoverImages" src={assetHelper["purple.jpg"]}></img>
            <span className="interest-content"><span className="interest-content2">
              <ul className="topic-lists">
                <li>Understanding the pathways and mechanisms by which endothelial cells sense blood flow.</li>
              </ul>
            </span></span>
          </div>
          <div className="small-4 columns">
            <h5 className="interest-content1 text-center">Vascular disease models</h5>
            <img className="hoverImages" src={assetHelper["purple.jpg"]}></img>
            <span className="interest-content">
              <span className="interest-content2">
                <ul className="topic-lists">
                  <li>Investigating disturbed vascular homeostasis and its roles in inflammation, atherosclerosis, and matrix remodeling.</li>
                </ul>
              </span>
            </span>
          </div>
        </div>
        <div className="membrane-photo row">
          <div className="columns small-12 small-centered">
            <h3 className="text-center membrane-label">What do we want to study?</h3>
            <img src={assetHelper["cell_membrane.png"]}></img>
          </div>
        </div>
      </div>
    )
  }
}

export default Research;

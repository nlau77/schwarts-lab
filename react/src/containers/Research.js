import React, { Component } from 'react';

class Research extends Component {
  constructor(props){
    super(props)
    this.state ={
      selectedLink:"research-links",
      interests: [],
      interest_topic: ""
    }
    this.getInterestLinks=this.getInterestLinks.bind(this)
  }

  getInterestLinks(id, topic){
    // console.log(this.state.interests)
    fetch(`/api/v1/interests/${id}`)
    .then(response =>{
      if(response.ok){
        return response;
      }else {
        let errorMessage = `${response.status} (${response.statusText})`,
          error = new Error(errorMessage)
        throw(error);
      }
    })
    .then((response) => response.json())
    .then((responseData) => {
      this.setState({
        interests: responseData,
        interest_topic:topic
      })
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
    // console.log(this.state.interests)
    // debugger;

  }

  render(){
    let interestsLinks = this.state.interests.map(interest =>{
      // debugger;
      return (
        <a href={interest.link}><li>{interest.description}</li></a>
      )
    })
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
                  <li className="see-more-hover" onClick={this.getInterestLinks.bind(this, "1", "Mechanotransduction")}><u>see more</u></li>
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
                <li className="see-more-hover" onClick={this.getInterestLinks.bind(this, "2", "Endothelial cell flow sensing")}><u>see more</u></li>
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
                  <li className="see-more-hover" onClick={this.getInterestLinks.bind(this, "3", "Vascular disease models")}><u>see more</u></li>
                </ul>
              </span>
            </span>
          </div>
        </div>
        <div className="row interest-links">
          <h5>{this.state.interest_topic}</h5>
          <ol>
            {interestsLinks}
          </ol>
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

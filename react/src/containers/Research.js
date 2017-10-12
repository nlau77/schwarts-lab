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
        <div className="row research-links">
          <h5>Mechanotransduction</h5>
          <ol>
            <li><a href="https://doi.org/10.1038/nature09198">Grashoff, C., et al., Measuring mechanical tension across vinculin reveals regulation of focal adhesion dynamics. Nature, 2010. 466(7303): p. 263-6.</a></li>
            <li><a href = "https://dx.doi.org/10.1083%2Fjcb.201510012">Kumar, A., et al., Talin tension sensor measurements reveal novel features of focal adhesion force transmission and mechanosensitivity. J. Cell Biol., 2016. 213(3): p. 371–383</a></li>
            <li><a href = "https://doi.org/10.1016/j.ceb.2013.05.006">Ross, T.D., et al., Integrins in mechanotransduction. Curr. Opin. Cell Biol., 2013. 25(5): p. 613-618.</a></li>
            <li><a href = "https://dx.doi.org/10.1101%2Fcshperspect.a005066"> M.A. Schwartz, Integrins and Extracellular Matrix in Mechanotransduction. Cold. Spring Harb. Perspect. Biol., 2010. 2(12): a005066.</a></li>
            <li><a href = "https://doi.org/10.1038/nrm2957">Parsons J.T., et al., Cell adhesion: integrating cytoskeletal dynamics and cellular tension. Nat. Rev. Mol. Cell. Biol., 2010. 11(9): p. 633-643.</a></li>
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

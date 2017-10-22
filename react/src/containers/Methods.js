import React, { Component } from 'react';

class Methods extends Component {
  constructor(props){
    super(props)
    this.state ={}
  }

  // this.biologicalAssays
  render(){
    return(
      <div>
        <div className="row">
        </div>
        <div>
          <p>testing pdf download</p>
          <a href="/methods/biological/animalFacts.pdf" download>Animal facts</a>
        </div>
        <ul className="method-layer">
          <li className="method-headers method-headers-top">Biological Assays</li>
            <ol className="method-document-header">
              <li className="method-documents">document A</li>
              <li className="method-documents">document B</li>
              <li className="method-documents">document C</li>
            </ol>
          <li className="method-headers">Programming</li>
            <ol className="method-document-header">
              <li className="method-documents">document A</li>
              <li className="method-documents">document B</li>
              <li className="method-documents">document C</li>
            </ol>
          <li className="method-headers">Philosophy</li>
            <ol className="method-document-header">
              <li className="method-documents">document A</li>
              <li className="method-documents">document B</li>
              <li className="method-documents">document C</li>
            </ol>
        </ul>
      </div>
    )
  }
}

export default Methods;

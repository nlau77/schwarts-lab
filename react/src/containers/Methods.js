import React, { Component } from 'react';
import PdfLinks from '../components/PdfLinks'

class Methods extends Component {
  constructor(props){
    super(props)
    this.state ={
      selectedMethod: "",
      methodPdfs:[]
    }
    this.fetchMethodsPDF = this.fetchMethodsPDF.bind(this)
  }

  fetchMethodsPDF(method_type){
    console.log("button was clicked")
    fetch(`/api/v1/labmethods/${method_type}`)
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
        methodPdfs: responseData,
        selectedMethod:method_type
      })
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
    console.log(this.state.selectedMethod)
    console.log(this.state.methodPdfs)
    }


  render(){
    let pdf_list =  this.state.methodPdfs.map(pdf=>{
      return(
        <PdfLinks
        key={pdf.id}
        id={pdf.id}
        pdf_url={pdf.pdf_url}
        title={pdf.title}
        selectedMethod={this.state.selectedMethod}
        />
      )
    })
    return(
      <div>
        <div className="row">
        </div>
        <div>
          <p>testing pdf download</p>
          <a href="/methods/biological/animalFacts.pdf" download>Animal facts</a>
        </div>
        <ul className="method-layer">
          <li onClick={this.fetchMethodsPDF.bind(this,"biological")} className="method-headers method-headers-top">Biological Assays</li>
          <li className="method-headers">Programming</li>
          <li className="method-headers">Philosophy</li>
        </ul>
        {pdf_list}
      </div>
    )
  }
}

export default Methods;

import React from 'react';
import { Link } from 'react-router-dom';

const PdfLinks = (props) => {
  // <a href="/methods/biological/animalFacts.pdf" download>Animal facts</a>

  // debugger;
  let methodLink = "/methods/" + props.selectedMethod + "/" + props.pdf_url
  debugger
  return (
    <li>
      <a href={methodLink} download>{props.title}</a>
    </li>
  )
}

export default PdfLinks

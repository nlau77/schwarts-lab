import React from 'react';
import { Link } from 'react-router-dom';

const LinkTabs = (props) => {
  return (
    <Link to={props.link} className="labLinks">
      <div className={props.className}>
        {props.name}
      </div>
    </Link>
  )
}

export default LinkTabs

import React from 'react'
import { Link } from 'react-router-dom';

const Layout = (props) => {
  return (
    <div className="linksHeader text-center rows">
      <div className="columns small-2 small-offset-2">
        <Link to='/' className ="labLinks">Home</Link>
      </div>
      <div className="columns small-2">
        <Link to='/methods' className="labLinks">Methods</Link>
      </div>
      <div className="columns small-2">
        <Link to='/history' className="labLinks">Lab History</Link>
      </div>
      <div className="columns small-2">
        <Link to='/contacts' className="labLinks">Contacts</Link>
      </div>
      <div className="columns small-2">
      </div>
    </div>
  )
}

export default Layout

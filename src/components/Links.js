import React from 'react'
import { Link , NavLink} from 'react-router-dom'

export const Links = () => {
  return (
    <div>
        <Link to="/aboutus"> About Us</Link>
        <Link to="/contactus"> Contact Us</Link>
        <Link to="/login"> Login </Link>
        <Link to="/search/100"> Search </Link>
        <li className="nav-item">
          <NavLink className="nav-link" to="/login" style={({isActive})=>{return          {backgroundColor:isActive? 'green': 'red'}}}>News</NavLink>
        </li>

         </div>
    
 )
  }
  
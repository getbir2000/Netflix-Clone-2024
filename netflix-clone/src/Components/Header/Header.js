import React from 'react'
import "./header.css";
import NetflixLogo from "../../assets/images/NetflixLog.webp";
/* import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import ArrowDropDownCircleOutlinedIcon from '@material-ui/icons/ArrowDropDownCircleOutlined'; */
const Header = () => {
  return (
    <div className='headerouter_container'>
      <div className='header_container'>
      
<div className='header_left'> 
<ul>
 <li> <img src={NetflixLogo} alt="NetflixLogo" width="50" height="40"/> </li> 
<li> Home</li>
<li> TVShows</li>
<li> Movies</li>
<li> Latest</li>
<li> MyList </li>
<li> Browse by Language </li>
</ul>
</div>

<div className='header_right'>
<ul>
 <li> Search</li>
<li> Notif</li>
<li> Accou</li>
<li>Arrow </li> 
  
</ul>
</div>

      </div>
    </div>
  )
}

export default Header

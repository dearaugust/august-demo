import React from 'react';
import { NavLink } from 'react-router-dom';

import Icon from 'antd/lib/icon';

class Footer extends React.Component {
  render(){
    return(
      <footer>
        <NavLink exact activeStyle={{color:'#F44336'}} to='/'>
          <Icon type="home" style={{fontSize:'26px'}}/><br/>Home
        </NavLink>
        <NavLink activeStyle={{color:'#F44336'}} to='/blog'>
          <Icon type="notification" style={{fontSize:'26px'}}/><br/>Blog
        </NavLink>
        <NavLink activeStyle={{color:'#F44336'}} to='/work'>
          <Icon type="edit" style={{fontSize:'26px'}}/><br/>Work
        </NavLink>
        <NavLink activeStyle={{color:'#F44336'}} to='/about'>
          <Icon type="idcard" style={{fontSize:'26px'}}/><br/>About
        </NavLink>
      </footer>
    )
  }
}

export default Footer;

import React from 'react';
import { NavLink } from 'react-router-dom';

import Icon from 'antd/lib/icon';

class LeftNav extends React.Component {
  render(){
    return(
      <div className='left-nav'>
        <h1>DearAugust</h1>
        <NavLink exact activeStyle={{color:'#F44336'}} to='/'>
          <Icon type="home" style={{fontSize:'26px'}}/>Home
        </NavLink>
        <NavLink activeStyle={{color:'#F44336'}} to='/blog'>
          <Icon type="notification" style={{fontSize:'26px'}}/>Blog
        </NavLink>
        <NavLink activeStyle={{color:'#F44336'}} to='/work'>
          <Icon type="edit" style={{fontSize:'26px'}}/>Work
        </NavLink>
        <NavLink activeStyle={{color:'#F44336'}} to='/about'>
          <Icon type="idcard" style={{fontSize:'26px'}}/>About
        </NavLink>
      </div>
    )
  }
}

export default LeftNav;

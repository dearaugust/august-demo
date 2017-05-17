import React from 'react';
import Button from 'antd/lib/button';
import Icon from 'antd/lib/icon';

import {withRouter} from 'react-router-dom'

class Header extends React.Component {
  handleClick(){
    this.props.history.goBack()
  }
  render(){

    return(
      <header>
        <Button ghost icon="left" onClick={this.handleClick.bind(this)}>Back</Button>
        <h3>DearAugust@{}</h3>
        <Button ghost >Go<Icon type="right" /></Button>
      </header>
    )
  }
}

export default withRouter(Header);

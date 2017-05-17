import React from 'react';
import {Link} from 'react-router-dom';

import axios from 'axios';

import Card from 'antd/lib/card';
import Spin from 'antd/lib/spin';

class Blog extends React.Component {
  constructor(){
    super();
    this.state={
      data: [],
      wait: true
    }
  }
  componentDidMount(){
    axios.get('https://raw.githubusercontent.com/newming/demodata/master/duopingshidai.json')
      .then( res => this.setState({data: res.data, wait: false}) )
      .catch( err => alert(err) )
  }
  render(){
    return(
      <div>
        {
          this.state.wait ? <div className="example"><Spin size="large"/></div> :
          this.state.data.map(
            item => (
              <Card key={item.index} title={item.title} extra={<Link to={`/post/${item.url}`}>More</Link>} style={{marginBottom:'20px'}}>
                <p>{item.desc}</p>
              </Card>
            )
          )
        }
      </div>
    )
  }
}

export default Blog;

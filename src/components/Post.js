import React from 'react';

import axios from 'axios';

import Spin from 'antd/lib/spin';

import marked from 'marked';
import hljs from 'highlight.js'

class Post extends React.Component {
  constructor(){
    super();
    this.state={
      data: '',
      wait: true
    }
  }
  componentDidMount(){
    let name = this.props.match.params.title;
    axios.get(`https://raw.githubusercontent.com/newming/demodata/master/blog/${name}.md`)
      .then(res => this.setState({data: res.data, wait: false}))
      .catch(err => alert(err))

    marked.setOptions({
      highlight: function (code) {
        return hljs.highlightAuto(code).value;  //渲染语法高亮
      }
    });
  }

  render(){
    console.log(this.props);
    return(
      <div id='post' className='post-content' style={{width:'100%'}}>
        {
          this.state.wait ? <div className="example"><Spin size="large"/></div> :
          // marked(this.state.data)
          <div dangerouslySetInnerHTML={{__html: marked(this.state.data)}} />
        }
      </div>
    )
  }
}

export default Post;

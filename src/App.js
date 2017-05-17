import React from 'react';
import {HashRouter, Route} from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import LeftNav from './components/LeftNav.js'

import Home from './components/Home.js';
import Blog from './components/Blog.js';
import Work from './components/Work.js';
import About from './components/About.js';
import Post from './components/Post.js';

class App extends React.Component {
  constructor(){
    super();
    this.state={
      mobile: true
    }
  }
  setNav(){
    let winW = document.body.clientWidth;
    winW>700 ? this.setState({mobile:false}) :
    this.setState({mobile:true});
  }
  componentWillMount(){
    this.setNav()
    window.onresize = () => { this.setNav() }
  }
  render(){
    return(
      <HashRouter>
        <div className='my-wrap'>
          { this.state.mobile ? <Header /> : <LeftNav /> }

          <div className='main'>
            <Route exact path='/' component={Home} />
            <Route path='/blog' component={Blog} />
            <Route path='/work' component={Work} />
            <Route path='/about' component={About} />
            <Route path='/post/:title' component={Post}/>
          </div>

          { this.state.mobile ? <Footer /> : null }
        </div>
      </HashRouter>
    )
  }
}

export default App;

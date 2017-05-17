import React from 'react';
import Button from 'antd/lib/button';

class Home extends React.Component {
  render(){
    return(
      <div className='home-wrap'>
        <div>
          <h1>OH,SHIT! I'M</h1>
          <p>it's a home</p>
          <Button type='primary'><a href='https://github.com/dearaugust'>HIRE ME</a></Button>
        </div>
      </div>
    )
  }
}

export default Home;

import React, { Component } from 'react';
import Tasks from './views/Tasks';
import Auth from './components/Auth'


class App extends Component {
  render() {
    return (
      <div>
        <Auth />

          
      

        <Tasks />


      </div>
    );
  }
}

export default App;

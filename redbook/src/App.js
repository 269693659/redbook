import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router,Route,Redirect} from 'react-router-dom'


import Home from './pages/home/root/Index'
import Shops from './pages/shops/root/Index'
import Message from './pages/message/root/Index'
import Mine from './pages/mine/root/Index'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          {/* 重定向 */}
          <Route path='/' exact render={()=>{ 
            return <Redirect to="/home"/>
          }}/>
          {/* 路由 */}
          <Route path='/home' component={Home}/>
          <Route path='/shops' component={Shops}/>
          <Route path='/message' component={Message}/>
          <Route path='/mine' component={Mine}/>
        </div>
      </Router>
    );
  }
}

export default App;

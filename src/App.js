import React, { Component } from 'react';
import './App.css';
import RouteComponent from './routes/RouteComponent';
import {Provider} from 'react-redux';
import Store  from './store';

class App extends Component {
  
  render() {
    return (
      <Provider store={Store}>        
        <RouteComponent />
      </Provider>
    );
  }
}

export default App;

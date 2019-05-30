import React, {Component} from 'react';
import PropTypes from 'prop-types'; 
import './Global/css/App.css';
import Content from './Global/Content';
//import {Link} from 'react-router-dom';
import './Global/Utilidades';

class App extends Component{
  static propTypes = {
    children: PropTypes.object.isRequired
  };

  render(){
    const {children} = this.props;
    return (
      <div className="App">
        <Content body={children}/>
        
      </div>
    );

  }

}

export default App;

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './css/App.css';
import './css/Content.css';
import './Utilidades';



class Content extends Component{
  
  static propTypes = {
    body: PropTypes.object.isRequired
  };
  render(){
    const {body} = this.props;
    return (
      <div className="Content">
        {body}
        <button className="btn btn-success" id="login">Login</button>
      </div>
    );
  }
  
}

export default Content;

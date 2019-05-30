import React, {Component} from 'react';
//import PropTypes from 'prop-types'; 
import login from './login.png';
import './login.css';
import './Servicios.js';


class Login extends Component{
    render(){
        
        return(

           <div className="form">
                <div className="imgcontainer">        
                 <img src={login} className="logo" alt="logo" />
                </div> <br />
                <form>
                    <input className="lg" type="text" id="username" placeholder="Email" /> <br /><br />
                    <input className="lg" type="password" id="password" placeholder="Password" /> <br /><br />
                    <input type="button" className="btn btn-success lg" id="Ingresar" value="Login" /> <br /><br />
                    <input className="form-check-input lg" type="checkbox" value="" checked="" />
                    Keep Sig
                </form>
           </div>
  
        )
    }

    
}

export default Login;


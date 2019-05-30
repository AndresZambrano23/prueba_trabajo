import React, {Component} from 'react';
import './css/Header.css';
import {Link} from 'react-router-dom';



class Header extends Component{
  render(){
    return (
      <div className="Header">
        
          <ul className="nav">
            <li><Link to="">Inicio
                <ul>
                  <li><Link to="">Sub Menu 1</Link></li>
                  <li><Link to="">Sub Menu 2</Link></li>
                  <li><Link to="">Sub Menu 3
                    <ul>
                      <li><Link to="">Sub Menu 1</Link></li>
                      <li><Link to="">Sub Menu 2</Link ></li>
                      <li><Link to="">Sub Menu 3</Link ></li>
                    </ul>
                  </Link></li>
                </ul>
            </Link></li>
            <li><Link to="">Contacto
                <ul>
                  <li><Link to="">Sub Menu 1</Link></li>
                  <li><Link to="">Sub Menu 2</Link></li>
                  <li><Link to="">Sub Menu 3</Link></li>
                </ul>
            </Link></li>
            <li><Link to="">Ayuda</Link></li>
          </ul>      
        
      </div>
    );
  }
  
}

export default Header;

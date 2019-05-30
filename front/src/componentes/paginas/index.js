import React, {Component} from 'react';
import Header from '../Global/Header';
import Client from './Client/Clients';

class Menu extends Component{
    render(){
        return(
            <div>
                <Header />
                <Client />
            </div>
        );
    }
}

export default Menu;
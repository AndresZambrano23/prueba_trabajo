//dependencias
import React from 'react';
import {Route, Switch} from 'react-router-dom';

//Componentens
import App from './componentes/App';
import Login from './componentes/login';
import Paginas from './componentes/paginas';
import Client from './componentes/paginas/Client';



const AppRoutes = () =>
    <App>
        <Switch>
            <Route path="/Login" component={Login} />
            <Route path="/Paginas" component={Paginas} />
            <Route path="/Client" component={Client} />
            
        </Switch>
    </App>;

    export default AppRoutes;
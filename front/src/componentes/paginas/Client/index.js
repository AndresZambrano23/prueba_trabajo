import React, {Component} from 'react';
import Header from '../../Global/Header';
import '../../Global/css/Client.css'
import './Utilidad';

class Client extends Component{
    render(){
        return(
            <div className="Client">
                <Header />
                <div clasName="formc">
                    <form>
                        <input type="text" placeholder="Nombre" id="name" className="form-control fmc"/> <br />
                        <input type="text" placeholder="Email" id="email" className="form-control fmc"/> <br />
                        <input type="text" placeholder="Address" id="address" className="form-control fmc"/> <br />
                        
                        <select className="custom-select fop" id="sector_id">
                            <option selected="">Seleccione</option>
                        </select>  <br /> <br /> 
                        
                        <input type="button" className="btn btn-outline-success fop" id="contact" value="Add Contact" />
                    </form>
                </div> <br /><br /><br />

                <div className="formd">
                    <input type="text" placeholder="Nombre" id="nit" className="form-control fmd"/> <br />
                    <input type="text" placeholder="Cliente" className="form-control fmd"/> <br />
                    <input type="button" className="btn btn-outline-danger fop" id="delete" value="DELETE" />
                </div> <br /><br /><br />
                
                <input type="button" className="btn btn-outline-primary fop" id="update" value="SAVE CLIENT" /> <br /> <br />
                <input type="button" className="btn btn-outline-primary fop" id="atras" value="ATRAS" />
            </div>
        );
    }
}

export default Client;
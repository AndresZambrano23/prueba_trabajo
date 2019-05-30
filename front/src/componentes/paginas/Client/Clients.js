import React, {Component} from 'react';
import './Utilidad';

class Client extends Component{
    render(){
        return(
            <div className="Cliente">
                
                <button type="button" className="btn btn-info btn-lg" id="clientNew">NewClient</button> <br /><br /><br />

                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Sector</th>
                            <th scope="col">Full Time</th>
                            <th scope="col">Manager</th>
                        </tr>
                    </thead>
                    <tbody id="tcuerpo">

                    </tbody>
                </table>


            </div>
        );
    }
}

export default Client;
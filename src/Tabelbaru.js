import React , { Component } from "react";
import "./css/table.css";
import AddUserForm from './AddUserForm'
class Tabelbaru extends Component {
    render(){
        return(
            <div>
                <h1>Ini akan menjadi tabel baru</h1>
                <table id="customers">
                <tr>
                    <th>Company</th>
                    <th>Contact</th>
                    <th>Country</th>
                </tr>
                <tr>
                    <td>Alfreds Futterkiste</td>
                    <td>Maria Anders</td>
                    <td>Germany</td>
                </tr>
                </table>
                <div>
                <   AddUserForm />
                </div>
            </div>
        );
    }
}

export default Tabelbaru;
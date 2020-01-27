import React , { Component } from "react";
import "./css/table.css";
import axios from "axios";
import Editformbaru from './Editformbaru'
const API_URL = 'http://localhost/reactjs_ci/welcome';

class Tabelbaru extends Component {
    state = {
        persons : []
    }

    componentDidMount(){
        const url = `${API_URL}/getpromo/`;
        axios.get(url)
        .then(res => {
            //const persons = res.data;
            this.setState({persons : res.data});
            //console.log(this.state.persons)
        })
    }
    
    render(){
        return(
            <div>
                <h1>Ini akan menjadi tabel baru</h1>
                <table id="customers">
                <thead>
                <tr>
                    <th>Judul</th>
                    <th>Isi</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {
                    this.props.a.map(promo => 
                        <tr key={promo.id_promo}>
                            <td>{promo.judul}</td>
                            <td>{promo.isi}</td>
                            <td><button  className="button muted-button">Edit</button></td>
                         </tr>
                    )
                } 
                </tbody>
                
                </table>
                <div>
                </div>
            </div>
        );
    }
}

export default Tabelbaru;
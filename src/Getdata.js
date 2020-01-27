import React, { Component } from "react";
import axios from "axios";

const API_URL = 'http://localhost/reactjs_ci/welcome';

class Getdata extends Component {
    state = {
        persons : []
    }

    componentDidMount(){
        const url = `${API_URL}/getpromo/`;
        axios.get(url)
        .then(res => {
            //const persons = res.data;
            this.setState({persons : res.data.dataPromo});
            console.log(this.state.persons)
        })
    }
    
    render(){
        return(
            <div>
                <h1>OKE</h1>
                <ul>
                    {
                        this.state.persons.map(person => 
                        <li key={person.id_promo}>{person.judul} <button>delete</button></li>
                    )}
                </ul>
            </div>
        )
    }
}

export default Getdata;

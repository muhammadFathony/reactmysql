import React, {  useState, Component } from "react"

import "./css/primitive.css"
import UserTable from './Usertable_v2'
import axios from "axios"
import Formadd from './Formadd'
const API_URL = 'http://localhost/reactjs_ci/welcome';
const initialFormState = { id: null, name: '', username: '' }
class Tabelbaru extends Component{

    state = {
        promo : []
    }

    componentDidMount(){
        const url = `${API_URL}/getpromo/`;
        axios.get(url)
        .then(res => {
            //const persons = res.data;
            this.setState({promo : res.data});
            //console.log(this.state.promo)
        })
    }

    tambah = (e) =>{
        e.preventDefault();
    }

    render(){
        return(
            <div>
                <h1>Tabel Promo</h1>
                <UserTable a={this.state.promo} />
                <h1>Tambah Promo</h1>
                <Formadd a={this.state.promo} />
            </div>
        )
    }
}

export default Tabelbaru;
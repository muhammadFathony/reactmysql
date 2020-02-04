import React, { Component } from 'react'
import axios from "axios"
const API_URL = 'http://localhost/reactjs_ci/welcome';
class Formadd extends Component{

    constructor(props){
        super(props);
        this.onChangejudul = this.onChangejudul.bind(this);
        this.onChangeisi = this.onChangeisi.bind(this);

        this.state = {
            judul : '',
            isi : ''
        }
    }

    onChangejudul(e){
        this.setState({
            judul : e.target.value
        })
    }

    onChangeisi(e){
        this.setState({
            isi : e.target.value
        })
    }

    tambahpromo = (e) => {
        e.preventDefault();
        const obj = {
            judul : this.state.judul,
            isi : this.state.isi
        }

        console.log(obj)
        const url = `${API_URL}/insert_promobaru/`;
        var config = {
            headers: {'Access-Control-Allow-Origin': '*',
                     'Content-Type': 'application/json'
            }
        };
        // axios.post('http://localhost/reactjs_ci/welcome/insert_promobaru', obj, config)
        // .then(function (response) {
        // console.log(response);
        // })
        // axios.get('http://localhost/reactjs_ci/welcome/insert_promobaru?judul='+this.state.judul)
        // .then(function(response){
        //     console.log(response)
        // })
    }
    render(){
        return(
            <form ref="form_promo">
                <label>Judul</label>
                <input type="text" ref="judul" value={this.state.judul} onChange={this.onChangejudul} />
                <label>Isi</label>
                <input type="text" ref="isi" value={this.state.isi} onChange={this.onChangeisi} />
                <button onClick={this.tambahpromo}> Tambah Promo</button>
            </form>
        )
    }
}

export default Formadd
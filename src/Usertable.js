import React from 'react';
import axios from "axios";
//const state = { persons : []}
// const API_URL = 'http://localhost/reactjs_ci/welcome';
// const url = `${API_URL}/getpromo/`;
// axios.get(url)
// .then(function(response){
//    console.log(response.data)
// })

const Usertable = props => (
    
    <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Username</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            {props.users.length > 0 ? (
                props.users.map(user => (
                    <tr key={user.id}>
                        <td>{user.name}</td>
                        <td>{user.username}</td>
                        <td>
                        <button onClick={() => props.deleteUser(user.id)} className="button muted-button">
                        Delete
                        </button>
                        <button onClick={() => props.hapus(user.name)} className="btn btn-primary">Hapus</button>
                        <button onClick={() => { props.editRow(user) }} className="button muted-button">Edit</button>
                        </td>
                    </tr>
                ))
            ) : (
                <tr>
                    <td colSpan={3}>No User</td>
                </tr>
            )}
        
        </tbody>
    </table>
)
export default Usertable
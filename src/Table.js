import React, {  useState } from "react"

import "./css/primitive.css"
import UserTable from './Usertable'
import AddUserForm from './AddUserForm'
import EditUserForm from './EditUserForm'

const Table = () => {
    //data
    const usersData = [
        { id: 1, name: 'Tania', username: 'floppydiskette' },
        { id: 2, name: 'Craig', username: 'siliconeidolon' },
        { id: 3, name: 'Ben', username: 'benisphere' },
      ]
    
    const initialFormState = { id: null, name: '', username: '' }
    
    //setting state
    const [ users, setUsers ] = useState(usersData)
    const [ currentUser, setCurrentUser ] = useState(initialFormState)
    const [ editing, setEditing ] = useState(false)
    
    //CRUD
    const addUser = user => {
        user.id = users.length +1
        setUsers([...users, user])
    }

    const deleteUser = id => {
        setEditing(false)

		setUsers(users.filter(user => user.id !== id))
    }
    
    const hapus = name => {
        setUsers(users.filter(a => a.name !== name))
    }
   
    const updateUser = (id , updatedUser) => { 
        setEditing(false) 
        setUsers(users.map(user => (user.id === id ? updatedUser : user)))
    }

    const editRow = user => {
        setEditing(true)
      
        setCurrentUser({ id: user.id, name: user.name, username: user.username })
    }
        return (
            <div className="container">
                <h1>CRUD with Hooks</h1>
                <div className="flex-row">
                    <div className="flex-large">
                    {editing ? (
                        <div>
                            <h2>Edit User</h2>
                            <EditUserForm 
                                editing={editing}
                                setEditing={setEditing}
                                currentUser={currentUser}
                                updateUser={updateUser}
                                />
                        </div>
                    ):(
                        <div>
                            <h2>User Add</h2>
                            <AddUserForm addUser={addUser} />
                        </div>
                    )}
                        
                    </div>
                    <div className="flex-la">
                        <h2>View User</h2>
                        <UserTable users={users} editRow={editRow} deleteUser={deleteUser} hapus={hapus}/>
                    </div>
                </div>
            </div>
        )
    
}

export default Table
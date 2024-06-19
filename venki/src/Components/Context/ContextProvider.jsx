import React, { useState,useRef } from 'react'
import UserContext from './CreateContext'


const UserContextProvider = ({ children }) => {
    const inputRef = useRef(null);
    const [addForm, setAddForm] = useState(null);
    const [newField, setNewField] = useState({});
    const [options ,setOptions]=useState('')
    const [values ,setValues]=useState([{"label": "Select Location", "values": "Select Location"}])
    
    return (
        <UserContext.Provider value={{ addForm, setAddForm, newField, setNewField ,options ,setOptions,values ,setValues,inputRef}} >

            {children}

        </UserContext.Provider>

    )


}

export default UserContextProvider;
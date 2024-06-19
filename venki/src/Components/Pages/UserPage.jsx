import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Form from '../Form';
import Menu from '../Menu';
import {Link} from 'react-router-dom'

const UserPage = () => {
  const [menu, setMenu] = useState([]);
  const [selectedForm, setSelectedForm] = useState('');
  const navigate = useNavigate()
  useEffect(() => {
    formMenuApi()
  }, [])

  const formMenuApi = async () => {
    try {
      const formName = await fetch("http://localhost:3500/form/menu/", {
        method: 'GET',
        headers: {
          // 'Content-Type': 'application/json' ,
          'Accept': 'application/json'

        }

      });
      let formname = await formName.json();
      if (formName.ok) {
        setMenu(formname)

      }

      else {
        console.log("Something Went Wrong in Menu");
        alert('Something Went Wrong in Menu.');
      }
    }

    catch (error) {
      console.error('Error Menu :', error);
    }
  }

  const handleMenuItemClick = (formName) => {
    setSelectedForm(formName);
  };


  const handleChangeDropDwon = (e) => {
    const { name, value } = e.target;
    console.log(name);
    console.log(value);
    setSelectedForm(value);
};
console.log(menu);
  return (
    <div className='Container'>
      <h1>WELCOME USER</h1>
      <nav className="navbar">
      <div className="navbar-brand">
      {menu && (<Menu menu={menu} handleMenuItemClick={handleChangeDropDwon} />)}
      </div>
      <div className="navbar-links">
        <Link to="/admin">Admin</Link>
        
      </div>
    </nav>
      <div>
      {selectedForm && <Form formName={selectedForm} />}
      </div>
      
    </div>
  )
}

export default UserPage;


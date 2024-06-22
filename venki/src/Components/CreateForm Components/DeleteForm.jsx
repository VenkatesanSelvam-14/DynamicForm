import React, { useState, useEffect } from 'react'
import Menu from '../Menu';

const DeleteForm = () => {
  const [menu, setMenu] = useState([]);
  const [selectedForm, setSelectedForm] = useState(null);
  useEffect(() => {
    formMenuApi()
  }, [menu])

  useEffect(() => {
   
      if (selectedForm !== null) {
        FormDeleteApi()
      }
    
    
  }, [selectedForm])

  const formMenuApi = async () => {
    try {
      const formName = await fetch("http://localhost:3500/form/menu/", {
        method: 'GET',
        headers: {
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


  async function FormDeleteApi() {
    try {
      const formName = await fetch("http://localhost:3500/form/form/", {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({ formName: selectedForm })
      });
      let formname = await formName.json();
      if (formName.ok) {
        console.log(formname);
        alert('Form Deleted Successfully');
      }
      else {
        console.log("Something Went Wrong in Menu");
        alert('Something Went Wrong in Menu.');
      }
    }
    catch (error) {
      console.error('Error Form Delete :', error);
    }
  }
  const handleMenuItemClick = (e) => {
    const formName = e.target.value
    setSelectedForm(formName);
  };
  function handleSelectedForm(key){

 const userConfirmed = window.confirm("Are you sure you want to delete the form?");
        if (userConfirmed) {
            setSelectedForm(key);
        }
  }

  return (
    <div >
      <h1>Form Delete</h1>
      <div className='RemoveList'>
        {/* {menu && (<Menu menu={menu} handleMenuItemClick={handleMenuItemClick} />)} */}

        <ul className='ulList'>
          {menu.map((key) => (
            <li key={key.formName} className='innerList'>
              {key.formName + " "}
              <span><img width="30" height="30" src="https://img.icons8.com/sf-black-filled/64/FA5252/delete-forever.png" alt="delete-forever" onClick={() => handleSelectedForm(key)} /></span>
              {/* <button onClick={() => setSelectedForm(key)}>Remove</button> */}
            </li>
          ))}
        </ul>
      </div>

    </div>
  )
}

export default DeleteForm

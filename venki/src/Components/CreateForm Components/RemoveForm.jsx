import React, { useState, useEffect } from 'react'

const RemoveForm = ({ formName }) => {
  const [formKeys, setFormKeys] = useState([]);
  const [afterRemoved, setAfterRemoved] = useState(0)
  const [fieldName, setFieldName] = useState(null);
  console.log("fieldName :" + fieldName);
  useEffect(() => {
    api();
  }, [formName])
  useEffect(() => {
    if (afterRemoved > 0) {
      api();
    }
  }, [afterRemoved])
  useEffect(() => {
    if (fieldName !== null) {
      removeFieldApi()
    }
  }, [fieldName])

  async function api() {

    try {
      const msg = await fetch(`http://localhost:3500/form/formparam/?formName=${formName}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      });
      const result = await msg.json();
      if (msg.ok) {
        let arrKeys = Object.keys(result[0].form)
        console.log(arrKeys);
        setFormKeys(arrKeys);
        console.log("keys Arrived");
      }
    }
    catch (err) {
      console.log("error : " + err);
    }
  }

  async function removeFieldApi() {
    try {
      const msg = await fetch(`http://localhost:3500/form/removeField/`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({ formName: formName, fieldName: fieldName })
      });

      const parsedValue = await msg.json()

      if (msg.ok) {
        console.log(parsedValue);
        console.log("Removed Successfully");
        setAfterRemoved(afterRemoved + 1)
        alert('Field Removed Successfully');

      }
    }
    catch (err) {
      console.log("RemoveMenu error :" + err);
      alert('Something went wrong');
    }
  }

  function handleFieldName(key)
  {
    const userConfirmed = window.confirm("Are you sure you want to Remove the field?");
  if (userConfirmed) {
    setFieldName(key);
  }
  }

  
  return (
    <div className='RemoveList'>
      <ul className='ulList'>
        {formKeys.map((key) => (
          <li key={key} className='innerList'>
            {key + " "}
            <span><img width="30" height="30" src="https://img.icons8.com/sf-black-filled/64/FA5252/delete-forever.png" alt="delete-forever" onClick={() => handleFieldName(key)} /></span>
            {/* <button onClick={() => setFieldName(key)}>Remove</button> */}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default RemoveForm

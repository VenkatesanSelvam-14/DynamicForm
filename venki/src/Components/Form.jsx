import React, { useState, useEffect } from 'react'

import Design from './Design';

const Form = ({ formName }) => {
  const [form, setForm] = useState(null);
  useEffect(() => {
    api();
  },[formName])

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
        setForm(result);
      }
    }
    catch (err) {
      console.log("error : " + err);
    }
  }

  return (
    
    <div className='form'>
      
      {form && form.map((obj) => {
        return (
          <div key={formName}>
            <h1>Title: {formName}</h1>
            {form && (
              <Design form={obj.form} />
            )}
          </div>
        );
      })}
    </div>
  )
}

export default Form;

import React, { useState, useEffect } from 'react';
import FormField from './FormField';

const AdminCreate = () => {
    const [fields, setFields] = useState([]);
    const [formName, setFormName] = useState('');
    const [formjson,setFormjson] = useState(null)
    // const [name,setName] = useState(null)
//{ label: '', value: '' }

// console.log(fields);

useEffect(()=>{
if(formjson!==null){
postJsonApi()
}
},[formjson])

async function postJsonApi(){
    try{
        const msg = await fetch(`http://localhost:3500/form/form/`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            },
            body:JSON.stringify({formName:formName,formjson:formjson})
          });
          const result = await msg.json();
          if (msg.ok) {
            console.log(result);
          }
    }
    catch(err){
        console.log("error :"+err);
    }
}
    const handleAddField = (type) => {
  
        const newField = {
            uniqueId: Date.now(),
            type: type,
            name: '',
            value: type === 'checkbox' || type === 'radio' ? false : '',
            required: false,
            options: type === 'dropdown' || type === 'checkbox' || type === 'radio' ? [''] : undefined,
            accepts: type === 'file' ? '' : undefined,


            pattern: type ==='text'?"[A-Z][a-zA-Z]*":undefined,
            maxsize:  type === 'file' ?'':undefined,
            placeholder: type === 'text'||type === 'password'||type === 'email'||type === 'url'||type === 'tel'||type === 'textarea' ? '':undefined,
            rows: type === 'textarea' ?'' :undefined,
            cols: type === 'textarea' ?'' :undefined,
            minLength: type === 'text' || type === 'password' || type === 'tel'? '' :  undefined,
            maxLength:  type === 'text' || type === 'password' || type === 'tel'? '' :  undefined,
            min: type==='month'||type==='date'||type==='number'||type==='range'||type==='time'||type==='week'?'':undefined,
            max: type==='month'||type==='date'||type==='number'||type==='range'||type==='time'||type==='week'?'':undefined,
            step: type==='date'||type==='number'||type==='time'?'':undefined,
            pattern: (() => {
                switch (type) {
                    case 'email':
                        return "[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$";
                    case 'url':
                        return "https://.*";
                    case 'tel':
                        return  '' //name === 'Mobile Number'?"[789][0-9]{9}" : "[0-9]{3}-[0-9]{3}-[0-9]{4}"; // No pattern defined for telephone inputs
                    default:
                        return undefined; // Default to undefined if type doesn't match known patterns
                }
            })(),
            id:'',
            className:type,
            style:{}
            // aria-required:required,
            // aria-label:name
          };
        setFields([...fields, newField]);
    };

    const handleRemoveField = (id) => {
        setFields(fields.filter(field => field.uniqueId !== id));
    };

    const handleChangeField = (id, key, value) => {

        if(key ==='options'&& value.length!==0)
            {
                
                const obj=value.reduce((acc,val)=>{
                               return {label:val,value:val}
                },{})
                console.log(obj);
                const updatedFields = fields.map(field => {
                    if (field.uniqueId === id) {
                        return { ...field, [key]: value };
                    }
                    return field;
                });
                setFields(updatedFields);
            }
            else if(key === 'name')
                {
                    const updatedFields = fields.map(field => {
                        if (field.uniqueId === id) {
                            return {
                                ...field,
                                name: value,
                                id: value // Set id to the same value as name
                              };
                        }
                        return field;
                    });
                    setFields(updatedFields);
               }
               else if( key === 'name' && value === 'Mobile Number' )
                {
                    const updatedFields = fields.map(field => {
                        if (field.uniqueId === id) {
                            return {
                                ...field,
                                name: value,
                                id: value,
                                pattern: "[789][0-9]{9}",
                                minLength:10,
                                maxLength:10// Set id to the same value as name
                              };
                        }
                        return field;
                    });
                    setFields(updatedFields);
                }
                else if(  key === 'name' && value === 'Telephone Number')
                    {
                        const updatedFields = fields.map(field => {
                            if (field.uniqueId === id) {
                                return {
                                    ...field,
                                    name: value,
                                    id: value,
                                    pattern: "[0-9]{3}-[0-9]{3}-[0-9]{4}",
                                    minLength:10,
                                    maxLength:12
                                  };
                            }
                            return field;
                        });
                        setFields(updatedFields);
                    }
            else{
                const updatedFields = fields.map(field => {
                    if (field.uniqueId === id) {
                        return { ...field, [key]: value };
                    }
                    return field;
                });
                setFields(updatedFields);
           }
       
        
    };

    

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = fields.reduce((acc, field) => {
          acc[field.name] = { ...field };
          return acc;
        }, {});
        console.log('Form Data:', formData);
        setFormjson(formData)
       console.log(formjson);
      };

    return (
        <div className="Create">
            <h1>New Form Creation</h1>
            <div className='FormName'><label/> Form Name :  <input type='text' name='Form Name'  placeholder='Form Name' value={formName} onChange={(e) => { setFormName(e.target.value) }} required /> 
            </div>
            
  <div className='AddFieldMenu'>
  <label htmlFor="addFieldDropdown">Add Field:</label>
  <select id="addFieldDropdown" onChange={(e) => handleAddField(e.target.value)}>
  <option >Select Type</option>
    <option value="text">Text Field</option>
    <option value="number">Number Field</option>
    <option value="checkbox">Checkbox</option>
    <option value="radio">Radio</option>
    <option value="date">Date Field</option>
    <option value="file">File Field</option>
    <option value="dropdown">Dropdown Field</option>
    <option value="textarea">TextArea Field</option>
    <option value="time">Time Field</option>
    <option value="email">Email Field</option>
    <option value="password">Password Field</option>
    <option value="tel">Contact Number</option>
    <option value="range">Range Field</option>
    <option value="url">Url Field</option>
  </select>
</div>

            <form onSubmit={handleSubmit}>
                {fields.map(field => (
                    <FormField
                        key={field.uniqueId}
                        field={field}
                        handleChange={handleChangeField}
                        handleRemove={handleRemoveField}
                        
                    />
                ))}
                <button  type="submit" className='AddFieldSubmit'>Submit</button>
            </form>
  
        </div>
    );
};

export default AdminCreate;
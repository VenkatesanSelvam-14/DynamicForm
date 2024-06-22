import React,{useState,useEffect} from 'react'

import FormField from './FormField'

const UpdateFormValues = ({formName}) => {
    const [nav,setNav]=useState(false)
    const [fields, setFields] = useState([]);

    const [finalUpdatedform,setFinalUpdatedform]=useState(null)
    const [formJson,setFormJson]=useState(null)
    useEffect(()=>{
        if(formName!==null||formName.trim()!=='')
        getFormJson();
    },[formName])

    useEffect(()=>{
        if(typeof finalUpdatedform === 'object' && finalUpdatedform!== null )
            {
                
                addNewField()
            }

    },[finalUpdatedform])
    async function addNewField() {
        const body = { formName: formName, formjson: finalUpdatedform }

        try {
            const NewField = await fetch("http://localhost:3500/form/update/", {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(body)
            })
            const result = NewField.json()
            if (NewField.ok) {
                console.log(result);
                console.log("newfiled added");
                alert(' New Field Added Successfully');
            }
        }
        catch (err) {
            console.log("Error :" + err);
            alert(' Something went wrong');
        }
    }

    async function getFormJson() {

        try {
          const msg = await fetch(`http://localhost:3500/form/form/?formName=${formName}`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            }
          });
          const result = await msg.json();
          if (msg.ok) {
           
            // setFormJson(result[0].form)
            const reduceResult = result.reduce((acc,mainObj)=>{

                const valuesArray=Object.values(mainObj.form)
                console.log("caa"+valuesArray);
                acc.push(...valuesArray);
                
                 return acc;
            },[])
            console.log("reducce"+reduceResult);
            //setFields(Object.entries(result))
            setFields(reduceResult)
            // const arr = Object.values(result[0].form);
            // setFields(arr)
            console.log("fieldsf"+fields);
          }
        }
        catch (err) {
          console.log("error : " + err);
        }
      }

      const handleChangeFieldValue = (id, key, value) => {
     const keys=Object.keys(formJson)
    
    keys.map((formKey)=>{
        if(formJson[formKey].uniqueId===id)
            {

                const obj = {
                    [formKey]: {
                        ...formJson[formKey],
                        [key]: value
                    }
                };
                // const obj={formKey:{
                //     [key]: value
                // }}
                setFields(prev => Object.assign({}, prev, obj));
                
                // setFormJson(prev =>(Object.assign(...prev,obj)))
            }

    })
        
    };
    const handleAddField = (type) => {
        const newField = {
            uniqueId: Date.now(),
            type: type,
            name: '',
            value: type === 'checkbox' || type === 'radio' ? false : '',
            required: false,
            options: type === 'dropdown' || type === 'checkbox' || type === 'radio' ? [''] : undefined,
            accepts: type === 'file' ? '' : undefined,
            
            maxsize: type === 'file' ? '' : undefined,
            placeholder: type === 'text' || type === 'password' || type === 'email' || type === 'url' || type === 'tel' || type === 'textarea' ? '' : undefined,
            rows: type === 'textarea' ? '' : undefined,
            cols: type === 'textarea' ? '' : undefined,
            minLength: type === 'text' || type === 'password' || type === 'tel' ? '' : undefined,
            maxLength: type === 'text' || type === 'password' || type === 'tel' ? '' : undefined,
            min: type === 'month' || type === 'date' || type === 'number' || type === 'range' || type === 'time' || type === 'week' ? '' : undefined,
            max: type === 'month' || type === 'date' || type === 'number' || type === 'range' || type === 'time' || type === 'week' ? '' : undefined,
            step: type === 'date' || type === 'number' || type === 'time' ? '' : undefined,
            pattern: (() => {
                switch (type) {
                    case 'text':
                        return "[A-Z][a-zA-Z]*";
                    case 'email':
                        return "[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$";
                    case 'url':
                        return "https://.*";
                    case 'tel':
                        return ''; // Set specific patterns if needed
                    default:
                        return undefined;
                }
            })(),
            id: '',
            className: type,
            positionNo:''
        };
        setFields([...fields, newField]);
        // setFormJson(prev => ({
        //     ...prev,
        //     [newField.name]: newField
        // }));
    };


    const handleRemoveField = (id) => {
        setFields(fields.filter(field => field.uniqueId !== id));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
       
        const userConfirmed = window.confirm("Are you sure you want to Add the field?");
        if (!userConfirmed) {
            return;
        }
      
        const formData = fields.reduce((acc, field) => {
            acc[field.name] = { ...field };
            return acc;
        }, {});
        setFinalUpdatedform(formData);
        //setUpdateForm(formData);
    };
    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     const userConfirmed = window.confirm("Are you sure you want to submit the form?");
    // if (!userConfirmed) {
    //     // If the user clicks "Cancel", do not proceed with form submission
    //     return;
    // }
        
    //     setFinalUpdatedform(formJson);
        
    
    //     setNav(true);
       
        
    // };
    const handleChangeField = (id, key, value) => {
        const updatedFields = fields.map(field => {
            if (field.uniqueId === id) {
                return { ...field, [key]: value };
            }
            return field;
        });
        setFields(updatedFields);
    };

  return (
    <div>
        
        

<form onSubmit={handleSubmit}>

<div className='AddFieldMenu'>
                        <label htmlFor="addFieldDropdown">Add Field:</label>
                        <select id="addFieldDropdown" onChange={(e) => handleAddField(e.target.value)}>
                            <option>Select Type</option>
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
                <button type="submit" className='AddFieldSubmit' >Submit</button>
                {fields && fields.map((field, index) => {
    // const fieldName = Object.keys(field);  {formJson && Object.keys(formJson).map((field, index) => {
//formJson[field]
    return  (
        <FormField
            key={index +'-'} 
            field={field}
            handleChange={handleChangeField}
            handleRemove={handleRemoveField}
            handleChangeFieldValue={handleChangeField}
        />
    );
})}

            </form>
    </div>
  )
}

export default UpdateFormValues


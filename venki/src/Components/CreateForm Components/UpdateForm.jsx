import React, { useState, useEffect } from 'react';
import FormField from './FormField';
import Menu from '../Menu';
import RemoveForm from './RemoveForm';

const UpdateForm = () => {
    const [updateOrRemove,setUpdateOrRemove]=useState('')
    const [fields, setFields] = useState([]);
    const [formName, setFormName] = useState(null);
    const [menu, setMenu] = useState([])
    const [updateForm, setUpdateForm] = useState(null)

    useEffect(() => {
        formMenuApi()
    }, [])

   

    useEffect(() => {
        if (updateForm !== null) {
            addNewField()
        }
    }, [updateForm])

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

   

    async function addNewField() {
        const body = { formName: formName, formjson: updateForm }

        try {
            const NewField = await fetch("http://localhost:3500/form/form/", {
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
            }
        }
        catch (err) {
            console.log("Error :" + err);
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
            pattern: type === 'text' ? "[A-Z][a-zA-Z]*" : undefined,
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
        };
        setFields([...fields, newField]);
    };

    const handleRemoveField = (id) => {
        setFields(fields.filter(field => field.uniqueId !== id));
    };

    const handleChangeField = (id, key, value) => {
        const updatedFields = fields.map(field => {
            if (field.uniqueId === id) {
                return { ...field, [key]: value };
            }
            return field;
        });
        setFields(updatedFields);
    };

    const handleChangeDropDwon = (e) => {
        const { name, value } = e.target;
        console.log(name);
        console.log(value);
        setFormName(value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = fields.reduce((acc, field) => {
            acc[field.name] = { ...field };
            return acc;
        }, {});
        setUpdateForm(formData);
    };

    return (
        <div className="Create">

<nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a 
          
            className="nav-link"
            onClick={() => setUpdateOrRemove('Add')}
          >
            Add
          </a>
        </li>
        <li className="nav-item">
          <a 
           
            className="nav-link"
            onClick={() => setUpdateOrRemove('Remove')}
          >
            Remove
          </a>
        </li>
      </ul>
    </nav>
{updateOrRemove === 'Add' &&  (<div><h1>Update Form </h1>
            {menu && (<Menu menu={menu} handleMenuItemClick={handleChangeDropDwon} />)}
            {formName && (<div>  
               
             <h3>Form Name: <span>{formName}</span></h3>

            <div>
                <label htmlFor="addFieldDropdown">Add Field:</label>
                <select id="addFieldDropdown" onChange={(e) => handleAddField(e.target.value)}>
                    <option value="text">Select Type</option>
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
                <button type="submit">Submit</button>
            </form> </div>) }</div>)},
           
            {updateOrRemove === 'Remove' && (
    <>
    <h1>Remove Field</h1>
        {menu && <Menu menu={menu} handleMenuItemClick={handleChangeDropDwon} />}
        {formName && (
    <>
       
        <h3>Form Name: <span>{formName}</span></h3>
         
        <RemoveForm formName={formName} />
    </>
)}

    </>
)}
        </div>
    );
};

export default UpdateForm;

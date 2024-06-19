import React from 'react'

const ContactNum = ({ input, handleChange }) => {
    const { type, id, name, placeholder, values, pattern, minLength, maxLength, size, required } = input;
    return (
        <div>
            <label htmlFor={name}>{name ? name : "Contact Number"}</label>
            <input
                type={type}
                id={id ? id : "Contact Number"}
                name={name ? name : "Contact Number"}
                placeholder={placeholder ? placeholder : name === "Mobile Number" ? "9876543210" : "123-456-7890"}
                value={values ? values : null}
                pattern={pattern ? pattern : name === "Mobile Number" ? "[789][0-9]{9}" : "[0-9]{3}-[0-9]{3}-[0-9]{4}"}
                size={size ? size : 30}
                minLength={minLength ? minLength : 10}
                maxLength={maxLength ? maxLength : name === "Mobile Number" ? 10 : 12}
                onChange={handleChange}
                required={required}

            />
        </div>
    )
}

{/* <input
    type="tel"
    id={id ? id : "Contact Number"}
    name={name ? name : "Contact Number"}
    placeholder={
        placeholder ? placeholder : 
        name === "Mobile Number" ? "9876543210" : "123-456-7890"
    }
    value={values ? values : ""}
    pattern={
        pattern ? pattern : 
        name === "Mobile Number" ? "[789][0-9]{9}" : "[0-9]{3}-[0-9]{3}-[0-9]{4}"
    }
    size={size ? size : 30}
    minLength={minLength ? minLength : 10}
    maxLength={
        maxLength ? maxLength : 
        name === "Mobile Number" ? 10 : 12
    }
    onChange={handleChange}
    required={required}
    className={className}
    aria-required={required}
    aria-label={placeholder ? placeholder : "Contact Number"}
/> */}

export default ContactNum


// {
//     "type": "number",
//     "id":"Mobile Number",
//     "name": "Mobile Number",
//     "placeholder":"Mobile Number",
//     "values":null,
//     "pattern":"[0-9]{5}-[0-9]{5}",
//     "minLength": 10,
//     "maxLength":10,
//     "size":30,
//     "required": true
//   },
//   {
//     "type": "number",
//     "id":"Tele Number",
//     "name": "Tele Number",
//     "placeholder":"Tele Number",
//     "values":null,
//     "pattern":"[0-9]{4}-[0-9]{3}-[0-9]{3}",
//     "minLength": 10,
//     "maxLength":10,
//     "size":30,
//     "required": true
//   },
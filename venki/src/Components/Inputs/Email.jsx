import React from 'react'

const Email = ({ input, handleChange }) => {
    const { type, id, name, placeholder, value, size, required,pattern ,className} = input;
    return (
        <div className='form-row'>
            <label htmlFor={name}>{name ? name : "Email"}</label>
            <input
                type={type}
                id={id ? id : name}
                name={name ? name : type}
                placeholder={placeholder ? placeholder : type}
                pattern={pattern?pattern:undefined}
                value={value ? value : null}
                className={className?className:type}
                size={size ? size : 30}
                onChange={handleChange}
                required={required?required:true}

            />
        </div>
    )
}


{/* <input
    type="email"
    id={id ? id : type}
    name={name ? name : type}
    placeholder={placeholder ? placeholder : "Enter your email"}
    value={value ? value : ""}
    size={size ? size : 30}
    onChange={handleChange}
    required={required}
    pattern={pattern ? pattern : "[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$"} // Common email pattern
    className={className}
    aria-required={required}
    aria-label={placeholder ? placeholder : "Email"}
/> */}
export default Email

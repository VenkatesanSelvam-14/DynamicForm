import React from 'react'

const Password = ({ input, handleChange }) => {
    const { type, id, name, value, required, placeholder, minLength, size, maxLength,className } = input
    return (
        <div className='form-row'>
            <label htmlFor={name}>{name ? name : "Text"}</label>
            <input
                type={type}
                id={id ? id : name}
                name={name ? name : type}
                placeholder={placeholder ? placeholder : type}
                value={value ? value : null}
                minLength={minLength ? minLength : 8}
                size={size ? size : 30}
                maxLength={maxLength ? maxLength : null}
                className={className?className:type}
                onChange={handleChange}
                required={required?required:true}

            />
        </div>
    )
}

{/* <input
    type="password"
    id={id ? id : type}
    name={name ? name : type}
    placeholder={placeholder ? placeholder : type}
    value={value ? value : ""}
    minLength={minLength ? minLength : null}
    maxLength={maxLength ? maxLength : null}
    size={size ? size : 30}
    onChange={handleChange}
    required={required ? required : true}
    className={className}
    aria-required={required ? required : true}
    aria-label={ariaLabel ? ariaLabel : 'Password'}
/> */}
export default Password

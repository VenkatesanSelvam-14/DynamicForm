import React from 'react'

const Email = ({ input, handleChange }) => {
    const { type, id, name, placeholder, values, size, required } = input;
    return (
        <div>
            <label htmlFor={name}>{name ? name : "Email"}</label>
            <input
                type={type}
                id={id ? id : type}
                name={name ? name : type}
                placeholder={placeholder ? placeholder : type}
                value={values ? values : null}
                size={size ? size : 30}
                onChange={handleChange}
                required={required}

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

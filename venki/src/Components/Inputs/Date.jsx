import React from 'react'

const Date = ({ input, handleDate }) => {
    const { type, name, value, id, required, size, placeholder,min,max,step } = input
    return (
        <div>
            <label htmlFor={name} key={id ? id : name}>{name ? name : "DATE"}</label>
            <input
                type={type}
                id={id ? id : name}
                name={name ? name : "Date"}
                placeholder={placeholder ? placeholder : "Date"}
                value={value ? value : null}
                size={size ? size : 30}
                min={min?min:null}
                max={max?max:null}
                step={step?step:null}
                onChange={(e) => { handleDate(e) }}
                required={required}

            />

        </div>
    )
}


// <input
//     type="date"
//     id={id ? id : name}
//     name={name ? name : "Date"}
//     placeholder={placeholder ? placeholder : "Date"}
//     value={value ? value : ""}
//     size={size ? size : 30}
//     min={min ? min : null}
//     max={max ? max : null}
//     step={step ? step : null}
//     onChange={(e) => handleDate(e)}
//     required={required}
//     className={className}
//     aria-required={required}
//     aria-label={placeholder ? placeholder : "Date"}
// />
export default Date

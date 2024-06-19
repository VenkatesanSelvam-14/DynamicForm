import React from 'react'

const Range = ({input, handleChange}) => {
  const {type, id, name, min, max,required}=input
  return (
    <div>
      <label htmlFor={name}>{name ? name :"Range"}</label>
                            <input
                                type={type}
                                id={id?id:type}
                                name={name?name:type}
                                min={min?min:0}
                                max={max?max:100}
                                onChange={handleChange}
                                required={required?required:true}
                                
                            />
    </div>
  )
}


{/* <input
    type="range"
    id={id ? id : type}
    name={name ? name : type}
    min={min ? min : '0'}
    max={max ? max : '100'}
    onChange={handleChange}
    required={required ? required : true}
    className={className}
    aria-required={required ? required : true}
    aria-label={ariaLabel ? ariaLabel : 'Range input'}
/> */}
export default Range

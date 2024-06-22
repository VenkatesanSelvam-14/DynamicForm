import React from 'react'

const Month = ({input,handleChange}) => {
  const{type,id,name,value,min,max,required,className}=input
  return (
    <div className='form-row'>
      <label htmlFor={name}>{name ? name :"Month"}</label>
                            <input
                                type={type}
                                id={id?id:name}
                                name={name?name:type}
                                value={value?value:null}
                                className={className?className:type}
                                min={min?min:'1900-01'}
                                max={max?max:'2024-12'}
                                onChange={handleChange}
                                required={required?required:true}
                                
                            />
    </div>
  )
}

{/* <input
    type="month"
    id={id ? id : type}
    name={name ? name : type}
    value={value ? value : ""}
    min={min ? min : '1900-01'}
    max={max ? max : '2024-12'}
    onChange={handleChange}
    required={required ? required : true}
    className={className}
    aria-required={required ? required : true}
    aria-label={ariaLabel ? ariaLabel : 'Select month'}
/> */}
export default Month

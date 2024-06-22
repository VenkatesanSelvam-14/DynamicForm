import React from 'react'

const Week = ({input,handleChange}) => {
  const{type,id,name,value,min,max,required,className}=input
  return (
    <div className='form-row'>
          <label htmlFor={name}>{name ? name :"Week"}</label>
                            <input
                                type={type}
                                id={id?id:type}
                                name={name?name:type}
                                value={value?value:null}
                                min={min?min:'2024-w01'}
                                max={max?max:'2024-w52'}
                                className={className?className:type}
                                onChange={handleChange}
                                required={required?required:true}
                                
                            />
    </div>
  )
}

{/* <input
    type="week"
    id={id ? id : type}
    name={name ? name : type}
    value={value ? value : ""}
    min={min ? min : "2024-W01"}
    max={max ? max : "2024-W52"}
    onChange={handleChange}
    required={required ? required : true}
    className={className}
    aria-required={required ? required : true}
    aria-label={ariaLabel ? ariaLabel : 'Week input'}
/> */}
export default Week

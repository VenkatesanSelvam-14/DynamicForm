import React from 'react'

const Number = ({input,handleChange}) => {
  const{type,id,name,value,min,max,step,required}=input
  return (
    <div>
      <label htmlFor={name}>{name ? name :"Number"}</label>
                            <input
                                type={type}
                                id={type}
                                name={name?name:type}
                                value={value?value:null}
                                min={min?min:'0'}
                                max={max?max:"100"}
                                step={step?step:"1"}
                                onChange={handleChange}
                                required={required?required:true}
                                
                            />
    </div>
  )
}


{/* <input
    type="number"
    id={id ? id : type}
    name={name ? name : type}
    value={value ? value : ""}
    min={min ? min : '0'}
    max={max ? max : '100'}
    step={step ? step : '1'}
    onChange={handleChange}
    required={required ? required : true}
    className={className}
    aria-required={required ? required : true}
    aria-label={ariaLabel ? ariaLabel : 'Number input'}
/> */}
export default Number

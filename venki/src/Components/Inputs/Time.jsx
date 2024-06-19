import React from 'react'

const Time = ({input ,handleChange}) => {
  const{type,id,name,value,min,max,step,required}=input
  return (
    <div>
      <label htmlFor={name}>{name ? name :"Time"}</label>
                            <input
                                type={type}
                                id={id?id:type}
                                name={name?name:type}
                                value={value?value:null}
                                min={min?min:'09:00'}
                                max={max?max:"18:00"}
                                step={step?step:900}
                                onChange={handleChange}
                                required={required?required:true}
                                
                            />
    </div>
  )
}


{/* <input
    type="time"
    id={id ? id : type}
    name={name ? name : type}
    value={value ? value : ""}
    min={min ? min : "09:00"}
    max={max ? max : "18:00"}
    step={step ? step : 900}
    onChange={handleChange}
    required={required ? required : true}
    className={className}
    aria-required={required ? required : true}
    aria-label={ariaLabel ? ariaLabel : 'Time input'}
/> */}
export default Time

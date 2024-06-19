import React from 'react'
//id={id ? id : type} value={values ? values : null}  {values.map((item, index) => (  <option key={index} value={item.values ? item.values : null} >{item.label ? item.label : "Need Label Name"}</option>
const DropDown = ({ input, handleChangeDropDwon }) => {
    const { type, id, name, value,options } = input;
    return (
        <div >

            <label htmlFor={name ? name : type}>{name ? name : type + " : "}</label>
            <select name={name ? name : type}  onSelect={(e) => { handleChangeDropDwon(e) }}>
                {options.map((item, index) => (
                    <option key={item} value={item ? item : null} >{item ? item : "Need Label Name"}</option>
                ))}
            </select>

        </div>

    )
}

{/* <select 
    name={name ? name : type}  
    onChange={(e) => handleChangeDropDown(e)}
    value={selectedValue} // To control the component if it's a controlled component
    required={required}
    className={className}
    aria-required={required}
    aria-label={ariaLabel}
>
    {options.map((item, index) => (
        <option key={item} value={item ? item : ""}>
            {item ? item : "Need Label Name"}
        </option>
    ))}
</select> */}
export default DropDown

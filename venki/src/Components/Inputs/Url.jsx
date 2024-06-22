import React from 'react'

const Url = ({input,handleChange}) => {
  //<input type="url" id="website" name="website" placeholder="https://example.com" pattern="https://.*" title="Please enter a valid URL starting with https://" required>
const {type,id,name,placeholder,pattern,title,required,value,size,className}=input
  return (
    <div className='form-row'>
      <label htmlFor={name}>{name ? name :"Url"}</label>
                            <input
                                type={type}
                                id={id?id:type}
                                name={name?name:type}
                                placeholder={placeholder?placeholder:"https://example.com"}
                                value={value?value:null}
                                pattern={pattern?pattern:"https://.*"}
                                size={size?size:30}
                                className={className?className:type}
                                onChange={handleChange}
                                required={required?required:true}
                                
                            />
    </div>
  )
}

{/* <label htmlFor={name}>{name ? name : "Url"}</label>
<input
    type="url"
    id={id ? id : type}
    name={name ? name : type}
    placeholder={placeholder ? placeholder : "https://example.com"}
    value={value ? value : ""}
    pattern={pattern ? pattern : "https://.*"}
    size={size ? size : 30}
    onChange={handleChange}
    required={required ? required : true}
    className={className}
    aria-required={required ? required : true}
    aria-label={ariaLabel ? ariaLabel : 'URL input'}
/> */}
export default Url

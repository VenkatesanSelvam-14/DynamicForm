import React from 'react'

const Text = ({input,handleChange}) => {
    const {type,id,name,placeholder,values,size,maxLength,minLength,required}=input;
   

  return (
    <div>
        <label htmlFor={name}>{name ? name :"Text"}</label>
                            <input
                                type={type}
                                id={id?id:type}
                                name={name?name:type}
                                placeholder={placeholder?placeholder:type}
                                value={values?values:null}
                                minLength={minLength ? minLength : null}
                                size={size?size:30}
                                maxLength={maxLength ? maxLength : null}
                                onChange={handleChange}
                                required={required?required:true}
                                
                            />
                            <span className="error" id="TextnameError"></span><br/>
    </div>
  )
}


{/* <input
    type="text"
    id={id ? id : type}
    name={name ? name : type}
    placeholder={placeholder ? placeholder : type}
    value={values ? values : ""}
    minLength={minLength ? minLength : null}
    maxLength={maxLength ? maxLength : null}
    size={size ? size : 30}
    onChange={handleChange}
    required={required ? required : true}
    className={className}
    aria-required={required ? required : true}
    aria-label={ariaLabel ? ariaLabel : 'Text input'}
/> */}


{/* <textarea
    id={id ? id : type}
    name={name ? name : type}
    placeholder={placeholder ? placeholder : "Enter text here"}
    value={value ? value : ""}
    minLength={minLength ? minLength : null}
    maxLength={maxLength ? maxLength : null}
    rows={rows ? rows : 3}
    cols={cols ? cols : 40}
    onChange={handleChange}
    required={required ? required : true}
    className={className}
    aria-required={required ? required : true}
    aria-label={ariaLabel ? ariaLabel : 'Text area'}
/> */}
export default Text

import React from 'react'

const TextArea = ({input,handleChange}) => {
    const {type,id,name,placeholder,value,size,maxLength,minLength,required,className,pattern,rows,cols,style}=input;
   

  return (
    <div className='form-row'>
        <label htmlFor={name}>{name ? name :"TextArea"}</label>
                            <textarea
                               
                                id={id?id:name}
                                name={name?name:type}
                                placeholder={placeholder?placeholder:type}
                                value={value?value:null}
                                className={className?className:type}
                                minLength={minLength ? minLength : undefined}
                                size={size?size:30}
                                maxLength={maxLength ? maxLength : undefined}
                                pattern={pattern?pattern:undefined}
                                rows={rows?rows:5}
                                cols={cols?cols:7}
                                onChange={handleChange}
                                required={required?required:true}
                                
                            />
                            <span className="error" id="TextnameError"></span><br/>
    </div>
  )
}





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
export default TextArea

import React from 'react'

const File = ({input,handleChange}) => {
  const {type,id,name,placeholder,value,size,maxsize,accept,required}=input;
  return (
    <div>
      <label htmlFor={name}>{name ? name :"File"}</label>
                            <input
                                type={type}
                                id={id?id:type}
                                name={name?name:type}
                                placeholder={placeholder?placeholder:type}
                                value={value?value:null}
                                accept={accept?accept:"application/pdf, application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document,image/*"}
                                size={size?size:30}
                                maxsize={maxsize ? maxsize : 10}
                                onChange={handleChange}
                                required={required?required:true}
                                
                            />
    </div>
  )
}


{/* <input
    type="file"
    id={id ? id : type}
    name={name ? name : type}
    placeholder={placeholder ? placeholder : type}
    value={value ? value : ""}
    accept={accept ? accept : "application/pdf, application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document, image/*"}
    size={size ? size : 30}
    onChange={handleChange}
    required={required ? required : true}
    className={className}
    aria-required={required ? required : true}
    aria-label={placeholder ? placeholder : "File"}
/> */}
export default File

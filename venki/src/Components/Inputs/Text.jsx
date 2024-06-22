import React,{useState} from 'react'


const Text = ({input,handleChange}) => {
    const {type,id,name,placeholder,value,size,maxLength,minLength,required,className,pattern,style}=input;
    const [error, setError] = useState('');

    const handleValidation = (e) => {
        const { value } = e.target;
        let errorMsg = '';

        if (required && !value) {
            errorMsg = 'This field is required';
        } 
        else if (minLength && value.length < minLength) {
            errorMsg = `Minimum length is ${minLength}`;
        } else if (maxLength && value.length > maxLength) {
            errorMsg = `Maximum length is ${maxLength}`;
        } else if (pattern && !new RegExp(pattern).test(value)) {
            errorMsg = 'Invalid format';
        }

        setError(errorMsg);
        handleChange(e); // Call the original handleChange
    };


  return (
    <div className='form-row'>
        <label htmlFor={name}>{name ? name :"Text"}</label>
                            <input
                                type={type}
                                id={id?id:name}
                                name={name?name:type}
                                placeholder={placeholder?placeholder:type}
                                value={value?value:null}
                                className={className?className:type}
                                minLength={minLength ? minLength : undefined}
                                size={size?size:30}
                                maxLength={maxLength ? maxLength : undefined}
                                pattern={pattern?pattern:undefined}
                                onChange={handleValidation}
                                required={required?required:true}
                                
                            />
                            {/* <span className="error" id="TextnameError"></span><br/> */}
                            {error && <span className="error" id={`${name}Error`}>{error}</span>}
                            <br />
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

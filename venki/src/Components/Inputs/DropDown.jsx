import React ,{useState}from 'react'
//id={id ? id : type} value={values ? values : null}  {values.map((item, index) => (  <option key={index} value={item.values ? item.values : null} >{item.label ? item.label : "Need Label Name"}</option>
const DropDown = ({ input, handleChangeDropDwon,handleMultipleChangeDropDwon }) => {
    const { type, id, name, value,options,className,MultipleChoise } = input;
    const [mult,setMult]=useState([])
    function handleMultChoice(e) {
        const { value } = e.target;
    
        if (mult.length > 0 && mult.includes(value)) {
            const newMult = mult.filter((it) => it !== value);
            setMult(newMult);
            handleMultipleChangeDropDwon(e, newMult);
        } else {
            if (value !== 'Select') {
                const newMult = [...mult, value];
                setMult(newMult);
                handleMultipleChangeDropDwon(e, newMult);
            }
        }
    }
    

    return (
        <div className='form-row'>

            <label htmlFor={name ? name : type}>{name ? name : type + " : "}</label>
            <select name={name ? name : type} id={id?id:name} className={className?className:type}  onChange={(e) => {
    if (MultipleChoise === 'true') {
        handleMultChoice(e);
    } else {
        handleChangeDropDwon(e);
    }
}}>
            <option >Select</option>
                {options.map((item, index) => (
                    <option key={item} value={item ? item : null} >{item ? item : "Need Label Name"}</option>
                ))}
            </select>
            {mult.length>0 && mult.map((it,index)=>{
                return(
                    <div>



                        
                        <p>{index +" : "+it+" , "}</p>
                        </div>
                )
            })}

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

import React from 'react'

const Radio = ({ input, handleRadioChange }) => {
  const { type, id,name, options, required,className } = input;

  //key={item.id}  id={id?id:"Gender"}  name={name ? name : "Gender"}  value={item.values= ? item.values : null}  {item.label}
  return ( 
    <div className='form-row'>
    
      <p>{name + " :"}</p>
      {options.map((item,index) => (
        <div key={item} className='Multiple-Choice'>
          <label>
            <input
              type={type}
              id={id?id:name}
              name={name ? name : type}
              value={item ? item: null}
              className={className?className:type}
              onChange={(e) => handleRadioChange(e)}
              required={required?required:true}
            />
            {item}
          </label>
        </div>
      ))}
<span className="error" id="TextnameError"></span><br/>
    </div>
  )
}


// {options.map((item, index) => (
//   <div key={item}>
//       <label>
//           <input
//               type="radio"
//               id={id ? `${id}-${index}` : `radio-${index}`}
//               name={name ? name : "radio-group"}
//               value={item}
//               onChange={handleRadioChange}
//               required={required ? true : false}
//           />
//           {item}
//       </label>
//   </div>
// ))}
export default Radio

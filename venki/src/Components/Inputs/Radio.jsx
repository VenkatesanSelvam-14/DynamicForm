import React from 'react'

const Radio = ({ input, handleRadioChange }) => {
  const { type, id,name, options, required } = input;

  //key={item.id}  id={id?id:"Gender"}  name={name ? name : "Gender"}  value={item.values= ? item.values : null}  {item.label}
  return ( 
    <div>
    
      <p>{name + " :"}</p>
      {options.map((item,index) => (
        <div key={item}>
          <label>
            <input
              type={type}
              id={id?id:type}
              name={name ? name : type}
              value={item ? item: null}
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

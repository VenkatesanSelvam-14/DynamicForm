import React from 'react'

const CheckBox = ({ jsonData, handleCheckboxChange }) => {
    //item.id,name,item.values
    const { type, id, name, checked, options, required } = jsonData;
    let count = 0;

    // <label>
    //                     <input
    //                         type={type}
                           
    //                         id={id ? id : type}
    //                         value={item.values ? item.values : null}
    //                         name={item.lable ? item.lable : type}
                           
    //                         onChange={(e) => handleCheckboxChange(e)}
    //                     />
    //                     {item.label ? item.label : "Label"}
    //                 </label>

    return (
        <div>
            <p>{name ? name : "CheckBox" + " :"}</p>
            {options.map((item,index) => (
                <div key={item ? item: count + 1}>
                    <label>
                        <input
                            type={type}
                           
                            id={id ? id : type}
                            value={item ? item : null}
                            name={item ? item : type}
                           
                            onChange={(e) => handleCheckboxChange(e)}
                        />
                        {item ? item : "Label"}
                    </label>

                </div>
            ))}

        </div>
    );
};


{/* <input
    type="checkbox"
    id={id ? id : type}
    value={item ? item : null}
    name={item ? item : type}
    onChange={(e) => handleCheckboxChange(e)}
    checked={checked} // Ensure this is managed by state
    disabled={disabled} // Ensure this is managed by state
    required={required} // Ensure this is managed by state
    className={className} // Ensure this is managed by state or props
    aria-checked={ariaChecked} // Ensure this is managed by state
    aria-labelledby={ariaLabelledby} // Ensure this is set appropriately
    aria-describedby={ariaDescribedby} // Ensure this is set appropriately
/> */}
export default CheckBox

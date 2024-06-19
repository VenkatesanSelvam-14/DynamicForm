import React,{useState,useEffect} from 'react'


const FormCreation = () => {
    const [fieldObj,setFieldObj] = useState({})
    const [question, setQuestion] = useState(null);
    const [selectedType, setSelectedType] = useState(null);
    const [required,setRequired]=useState(false)
    const[count,setCount]=useState(0)
    const [choice,setChoice]=useState(['Short answer','Paragraph','Multiple choice','CheckBox','Drop-Down','Date','Time','File Upload'])

    
    function handleQuestion(e){
        const {name,value}=e.target;
        console.log(value);
        setQuestion(value)
        setFieldObj(prev => ({ ...prev, [name]: question }));
        console.log(fieldObj);

    }
    function handleTypeSelection(e){
        const{name,value}=e.target
        setFieldObj(prev => ({ ...prev, [name]: value }));
        console.log(fieldObj);
    }
   
    function handleCheckChange(e){
        const{name,value,checked}=e.target
        console.log(checked);
        setRequired(checked);
        if(required)
            {
              
                    setFieldObj(prev => ({ ...prev, [name]: value }));
            }
console.log(fieldObj);

    }
    function handleAddNewField(e){
        e.preventDefault();
        setCount(count+1)
        
    }
    function handleRemoveField(e){
        e.preventDefault();
    }
  return (
<div>

        <div>
      <input 
        type='text' 
        id='Question'
        name='name'
        placeholder='Question ?' 
        value={question || ''} 
        onChange={(e)=>handleQuestion(e)}
      />

      <select 
        name='type' 
        value={selectedType || ''} 
        onChange={(e)=>handleTypeSelection(e)}
      >
        {choice.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </select>

      <label>
        <input
          type='checkbox'
          id='Required'
          name='required'
         checked={required}
          onChange={(e)=>handleCheckChange(e)}
        />
        Required
      </label>

      <button onClick={handleAddNewField}>+</button>
      <button onClick={handleRemoveField}>-</button>
    
        </div>
        </div>
  )
}


export default FormCreation

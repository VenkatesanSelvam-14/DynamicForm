import React ,{useState,useEffect}from 'react'

const RemoveForm = ({formName}) => {
    const [formKeys, setFormKeys] = useState([]);
    const [fieldName, setFieldName] = useState(null);
    console.log("fieldName :"+fieldName);
  useEffect(() => {
    api();
  },[formName])
  useEffect(() => {
    if (fieldName !== null) {
        removeFieldApi()
    }
}, [fieldName])

  async function api() {

    try {
      const msg = await fetch(`http://localhost:3500/form/formparam/?formName=${formName}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      });
      const result = await msg.json();
      if (msg.ok) {
        let arrKeys = Object.keys(result[0].form)
        console.log(arrKeys);
        setFormKeys(arrKeys);
        console.log("keys Arrived");
      }
    }
    catch (err) {
      console.log("error : " + err);
    }
  }

    async function removeFieldApi() {
        try {
            const msg = await fetch(`http://localhost:3500/form/removeField/`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({ formName: formName, fieldName: fieldName })
            });

            const parsedValue = await msg.json()

            if (msg.ok) {
                console.log(parsedValue);
                console.log("Removed Successfully");
                console.log(parsedValue);
              
            }
        }
        catch (err) {
            console.log("RemoveMenu error :" + err);
        }
    }
  
  return (
    <div>
      <ul>
            {formKeys.map((key) => (
                <li key={key}>
                    {key} 
                    <button onClick={() => setFieldName(key)}>Remove</button>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default RemoveForm

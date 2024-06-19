
import React ,{useState}from 'react';

const FormField = ({ field, handleChange, handleRemove }) => {

  const [selectedTypes, setSelectedTypes] = useState([]);

  const handleCheckboxAndSubmit = (e) => {
    const { value, checked } = e.target;

    if (checked) {
      setSelectedTypes(prevSelected => [...prevSelected, value]);
    } else {
      setSelectedTypes(prevSelected => prevSelected.filter(type => type !== value));
    }

    const selectedTypesString = selectedTypes.join(',');
    handleChange(field.uniqueId,'accepts',selectedTypesString);
  };

  const handleOptionChange = (index, value) => {
    const newOptions = [...field.options];
    newOptions[index] = value;
    handleChange(field.uniqueId, 'options', newOptions);
  };

  const addOption = () => {
    handleChange(field.uniqueId, 'options', [...field.options, '']);
  };

  const removeOption = (index) => {
    const newOptions = field.options.filter((_, i) => i !== index);
    handleChange(field.uniqueId, 'options', newOptions);
  };

  return (

<div className="form-field">
  <h4>{field.type}</h4>
  <input
    type="text"
    placeholder="Label"
    value={field.name || ''}
    onChange={(e) => {
      handleChange(field.uniqueId, 'name', e.target.value);
    }}
  />

  {field.type === 'text' || field.type === 'number' || field.type === 'date' || field.type === 'email' ? (
    <input
      type={field.type}
      placeholder="Input Value"
      value={field.value || ''}
      onChange={(e) => handleChange(field.uniqueId, 'value', e.target.value)}
    />
  ) : null}

  {field.type === 'text' || field.type === 'password' ? (
    <div>
      <input
        type="text"
        placeholder="Minimum Length"
        value={field.minLength || ''}
        onChange={(e) => handleChange(field.uniqueId, 'minLength', e.target.value)}
      />
      <input
        type="text"
        placeholder="Maximum Length"
        value={field.maxLength || ''}
        onChange={(e) => handleChange(field.uniqueId, 'maxLength', e.target.value)}
      />
    </div>
  ) : null}

  {field.type === 'text' || field.type === 'textarea' || field.type === 'password' || field.type === 'email' || field.type === 'url' || field.type === 'tel' ? (
    <input
      type="text"
      placeholder="Input Placeholder"
      value={field.placeholder || ''}
      onChange={(e) => handleChange(field.uniqueId, 'placeholder', e.target.value)}
    />
  ) : null}

  {field.type === 'month' || field.type === 'date' || field.type === 'number' || field.type === 'range' || field.type === 'time' || field.type === 'week' ? (
    <div>
      <input
        type="text"
        placeholder="Min"
        value={field.min || ''}
        onChange={(e) => handleChange(field.uniqueId, 'min', e.target.value)}
      />
      <input
        type="text"
        placeholder="Max"
        value={field.max || ''}
        onChange={(e) => handleChange(field.uniqueId, 'max', e.target.value)}
      />
    </div>
  ) : null}

  {field.type === 'date' || field.type === 'number' || field.type === 'time' ? (
    <input
      type="text"
      placeholder="Step"
      value={field.step || ''}
      onChange={(e) => handleChange(field.uniqueId, 'step', e.target.value)}
    />
  ) : null}

  {field.type === 'textarea' ? (
    <div>
      <input
        type="text"
        placeholder="No of Rows"
        value={field.rows || ''}
        onChange={(e) => handleChange(field.uniqueId, 'rows', e.target.value)}
      />
      <input
        type="text"
        placeholder="No of Columns"
        value={field.cols || ''}
        onChange={(e) => handleChange(field.uniqueId, 'cols', e.target.value)}
      />
    </div>
  ) : null}

  {Array.isArray(field.options) && (field.type === 'dropdown' || field.type === 'checkbox' || field.type === 'radio') ? (
    <div className="multipleChoice">
      {field.options.map((option, index) => (
        <div key={index}>
          <input
            type="text"
            placeholder="Option Value"
            value={option || ''}
            onChange={(e) => handleOptionChange(index, e.target.value)}
          />
          <button type="button" onClick={() => removeOption(index)}>Remove Option</button>
        </div>
      ))}
      <button type="button" onClick={addOption}>Add Option</button>
    </div>
  ) : null}

  {field.type === 'file' ? (
    <div>
      <input
        type="text"
        placeholder="Accepts"
        value={field.accepts || ''}
        onChange={(e) => handleChange(field.uniqueId, 'accepts', e.target.value)}
      />
      <div className="fileChoice">
        <div>
          <input type="checkbox" id="pdf" name="documentType" value="application/pdf" onChange={(e) => handleCheckboxAndSubmit(e)} />
          <label htmlFor="pdf">PDF</label><br />
          <input type="checkbox" id="msword" name="documentType" value="application/msword" onChange={(e) => handleCheckboxAndSubmit(e)} />
          <label htmlFor="msword">MS Word (.doc)</label><br />
          <input type="checkbox" id="docx" name="documentType" value="application/vnd.openxmlformats-officedocument.wordprocessingml.document" onChange={(e) => handleCheckboxAndSubmit(e)} />
          <label htmlFor="docx">Word (.docx)</label><br />
          <input type="checkbox" id="image" name="documentType" value="image/*" onChange={(e) => handleCheckboxAndSubmit(e)} />
          <label htmlFor="image">Image</label><br />
        </div>
        <div>
          <input type="checkbox" id="video" name="documentType" value="video/*" onChange={(e) => handleCheckboxAndSubmit(e)} />
          <label htmlFor="video">Video</label><br />
          <input type="checkbox" id="audio" name="documentType" value="audio/*" onChange={(e) => handleCheckboxAndSubmit(e)} />
          <label htmlFor="audio">Audio</label><br />
          <input type="checkbox" id="drawing" name="documentType" value=".svg, .ai" onChange={(e) => handleCheckboxAndSubmit(e)} />
          <label htmlFor="drawing">Drawing</label><br />
          <input type="checkbox" id="spreadsheet" name="documentType" value=".xlsx, .csv" onChange={(e) => handleCheckboxAndSubmit(e)} />
          <label htmlFor="spreadsheet">Spreadsheet</label><br />
          <input type="checkbox" id="presentation" name="documentType" value=".pptx" onChange={(e) => handleCheckboxAndSubmit(e)} />
          <label htmlFor="presentation">Presentation</label><br />
        </div>
      </div>
    </div>
  ) : null}

  {field.type === 'file' ? (
    <div>
      <label htmlFor="fileSize">File Size:</label>
      <select id="fileSize" onChange={(e) => handleChange(field.uniqueId, 'maxsize', e.target.value)}>
        <option value="">Select</option>
        <option value="1 MB">1 MB</option>
        <option value="10 MB">10 MB</option>
        <option value="100 MB">100 MB</option>
        <option value="1 GB">1 GB</option>
        <option value="10 GB">10 GB</option>
      </select>
    </div>
  ) : null}

  {field.type === 'tel' ? (
    <div>
      <label htmlFor="contactType">Contact Type:</label>
      <select id="contactType" onChange={(e) => handleChange(field.uniqueId, 'name', e.target.value)}>
        <option value="">Select</option>
        <option value="Mobile Number">Mobile Number</option>
        <option value="Telephone Number">Telephone Number</option>
      </select>
    </div>
  ) : null}

  <label>
    Required:
    <input
      type="checkbox"
      checked={field.required || false}
      onChange={(e) => handleChange(field.uniqueId, 'required', e.target.checked)}
    />
  </label>

  <button type="button" className="remove" onClick={() => handleRemove(field.uniqueId)}>Remove</button>
</div>

);
};




export default FormField;


import React, { useState, useEffect } from 'react'

const DropdownSelect = ({ }) => {

  const [argValue, setArgValue] = useState([{
    argumentName: '',
    argumentValue: false
  }])

  const handleChagne = (e, index) => {
    const { value } = e.target
    const temp = [...argValue]
    temp[index] = { argumentName: value, argumentValue: false }
    setArgValue(temp);
  }

  const handleSelect = (e, index) => {
    const { value } = e.target
    const temp = [...argValue]
    temp[index] = { ...temp[index], argumentValue: Boolean(value) }
    setArgValue(temp);
  }

  const handleSubmit = () => {
    setArgValue([...argValue, { argumentName: "", argumentValue: false }])
  }

  const options = [
    {value: 'Select...'},
    {value: 'constant'},
    {value: 'my arguments'},
    {value: 'and'},
    {value: 'or'},
  ]

  const [dropdownOptions, setdropdownOptions] = useState(options)
  
  const [dropdown, setdropdown] = useState({optionName: 'Select...', value:null});
  const [result, setResult] = useState("");

  const handleSelectDropdown = (e) => {
    setdropdown({optionName:e.target.value})
  }

  useEffect(() => {
    if(dropdown.optionName === 'my arguments'){
      const tempOptions = argValue.map((items) => ({value:items.argumentName}))
      setdropdownOptions(tempOptions);
    } else {
      const obj = argValue.find(o => o.argumentName === dropdown.optionName);
      setResult(obj?.argumentValue)
      }    
  }, [dropdown.optionName])

  console.log("result==",result)
  
  const Fields = (agrName, agrValue, index) => {
    return (
      <div>
        <input type='text' onChange={(e) => handleChagne(e, index)} placeholder='new argument' value={agrName} />
        <select value={agrValue} onChange={(e) => handleSelect(e, index)}>
          <option value={false}>False</option>
          <option value={true}>True</option>
        </select>
      </div>
    )
  }

  return (
    <>
      {argValue?.map(((item, index) => {
        return Fields(item.argumentName, item.argumentValue, index)
      }))}
      <button onClick={handleSubmit}>Add New Fields</button>
      <div>
        <select value={dropdown.optionName} onChange={(e) => {handleSelectDropdown(e)}}>
         {dropdownOptions.map((opt) => {
          return <option value={opt.value}>{opt.value}</option>
         })}
          
        </select>
      </div>
      <div>
        <h1>Result : {result!== undefined? String(result) : ''}</h1>
      </div>
    </>

  )
}

export default DropdownSelect
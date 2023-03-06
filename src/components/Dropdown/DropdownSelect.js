import React, {useState} from 'react'

const DropdownSelect = ({}) => {

  const [argValue, setArgValue] = useState([{
    argumentName: '',
    argumentValue: false
  }])

  const handleChagne = (e,index) => {
   const {value} = e.target 
   const temp = [...argValue]
   temp[index] = {argumentName:value, argumentValue:false}
   setArgValue(temp);
  }

  const handleSelect = (e,index) => {
    const {value} = e.target 
    const temp = [...argValue]
    temp[index] = {...temp[index], argumentValue: Boolean( value)}
    setArgValue(temp);
   }
  
  const handleSubmit = () => {
    setArgValue([...argValue,{argumentName:"",argumentValue:false}])
  }

    const Fields = (agrName, agrValue,index) => {
    return (
      <div>
          <input type='text' onChange={(e)=>handleChagne(e,index)}  placeholder='new argument' value={agrName}/>
          <select value={agrValue} onChange={(e) =>handleSelect(e, index)}>
              <option value={false}>False</option>
              <option value={true}>True</option>
          </select>
      </div>
    )
  }

  return (
    <>
      {argValue?.map(((item,index) => {
        return Fields(item.argumentName,item.argumentValue,index)
      }))}
      <button onClick={handleSubmit}>Add New Fields</button>
    </>
    
  )
}

export default DropdownSelect
import React from 'react'

const Fields = () => {
  return (
    <div>
        <input type='text' placeholder='new argument' />
        <select>
            <option value='false'>False</option>
            <option value='true'>True</option>
        </select>
    </div>
  )
}

export default Fields
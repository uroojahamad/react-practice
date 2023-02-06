import React from 'react'
import Button from './Button'

const Buttons = () => {
  return (
    <>
        <Button type="primary"/>
        <Button type="rounded"/>
        <Button type="outline"/>
        <Button type="transparent"/>
        <Button type="danger"/>
        <Button isDisabled= {true}/>
    </>
  )
}

export default Buttons
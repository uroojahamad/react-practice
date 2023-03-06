import React, { useState } from 'react'
import { jsonData } from './testdata'

const UpdateJsonData = () => {

    const [data, setData] = useState(jsonData);
    const updateUsername = (e,index) =>{


    setData((prevData) => {
        console.log(e.target.id, prevData[index].id)
        const temp = data
        temp[index] = prevData[index].id === Number(e.target.id) ? {...prevData[index] ,name : e.target.value }: prevData 
        console.log("temp==",temp)
        return temp
    })

    }

    return (
        data.map((items,index) => {
            return (
                <div>
                    <label>User Name : </label>
                    <input type='text' value={items.username} id={items.id} onChange={(e) => updateUsername(e,index)}/>
                    <input type='text' value={items.name} id={items.id}/>
                </div>
            )
        })

    )
}

export default UpdateJsonData
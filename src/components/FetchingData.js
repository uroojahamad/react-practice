import React, {useState, useEffect} from 'react'

const FetchingData = () => {
    const [fetchData, setFetchData] = useState([])

    
    useEffect(() => {
      async function getData(){
        try{

          const response = await fetch('https://jsonplaceholder.typicode.com/posts/1/comments');
          const data = await response.json();
          setFetchData(data);
        }
        catch(error){
          console.log(error);
        }
    }
    getData();
    }, [fetchData]);
    
  return (
    <div>
        <table>
          
            {
                fetchData.map((item) =>{
                    return ( <>
                    
                      <tr>
                        <td>${item.postID}</td>
                        <td>${item.id}</td>
                        <td>${item.name}</td>
                        <td>${item.email}</td>
                        <td>${item.body}</td>
                      </tr>
                    </>
                    )
                })
            }
        </table>
    </div>
  )
}

export default FetchingData;
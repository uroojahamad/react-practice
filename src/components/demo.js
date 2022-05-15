import React from 'react';

const Demo = () =>{
    const name = ['Urooj', 'Minhaj', 'Shad','Suresh'];

    const getName = (e, names) => {
        console.log("Runnn ho gayay ");

    };

    return (
        <h2>{name.map((names) => {
            console.log(names);
                return  <div>
                    {names}
                    <button onClick={getName}>Get Name </button>
                    {/* <button onClick={(e) => getName(e, names)}>Get Name </button> */}
                </div>;
            })}
        </h2>

        
    )

}

export default Demo;
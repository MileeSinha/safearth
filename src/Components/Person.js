import React from 'react';

const person= (argum) => {
    return(
        <div className="Person"> 
            <p onClick={argum.click}>i am {argum.name} component and i am {argum.age}  years old</p>
            <p>{argum.children}</p>
            <input type="text" onChange={argum.changed} value={argum.name}></input>
            <p>stop</p>
        </div>
        )
}

export default person;
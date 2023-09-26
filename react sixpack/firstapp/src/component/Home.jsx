import React, { useState, useEffect} from 'react';
import './Home.css';

const Home = () => {

    const [inputValue, setInputValue]=useState(0);

 

    const increment=()=>{
        setInputValue(inputValue+1);
    };

    const decrement=()=>{
        setInputValue(inputValue-1);
    };

    useEffect(()=>{

        console.log("run");

    },[]);

  return (
    <div style={{padding:20}}>


        <input type="number"
        placeholder="Enter Value"
        onChange={(e)=>{
            setInputValue(e.target.value);
        }}
        value={inputValue}
        readOnly
        
        />

        <button style={{margin:5,padding:5}} onClick={increment}>+</button>
        <button style={{margin:5,padding:5}} onClick={decrement}>-</button>
        <p>{inputValue}</p>
    </div>
  )
}

export default Home
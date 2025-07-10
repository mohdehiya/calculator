import React from 'react'
import { useState } from 'react'

const App = () => {

   const [num1 , setNum1] = useState('');
   const [num2, setNum2] = useState('');
   const [result , setResult ] = useState(null);

   const handleAdd = (e) =>{
    e.preventDefault();
    setResult(Number(num1) + Number(num2))
   };
   const handleSub = (e) =>{
    e.preventDefault();
    setResult(Number(num1) - Number(num2))
   };
   const handleMul = (e) =>{
    e.preventDefault();
    setResult(Number(num1) * Number(num2))
   };
   const handleDiv = (e) =>{
    e.preventDefault();
    setResult(Number(num1) / Number(num2))
   };
  return (
    <>
    
       <div className='outer'>
        <div className='inner'>
           <form action="">

          <input type="number" placeholder='enter the number' value={num1}onChange={(e)=> {setNum1(e.target.value)}}/>
          <input type="number" placeholder='enter the number' value={num2} onChange={(e)=>{setNum2(e.target.value)}}/>
          <button onClick={handleAdd}>ADDITION</button>
          <button onClick={handleSub}>SUBSTRACTION</button>
          <button onClick={handleMul}>MULTIPLY</button>
          <button onClick={handleDiv}>DIVISION</button>
        </form>
         <h1>Result : {result}</h1>
        </div>
       </div>
    </>
  )
}

export default App
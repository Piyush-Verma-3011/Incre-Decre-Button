import React ,{useState} from 'react'
import './App.css'


const App = () => {

   const[initial,setInitial]=useState(0);

const incre=()=>{
  return setInitial(initial+1);
}
const decre=()=>{
  if(initial===0){
    alert("0 limit reached!");
  }
  else{
  return setInitial(initial-1);
}}
  return (
    <> 
    
    <h2>Increment and Decrement</h2>
      <div className='main_div'>
        <div className='center_div'>
        <h1>{initial}</h1>
           <div className='btn_div'>
        
            <button onClick={incre}>
            incr
            </button>
            <button onClick={decre}>decr</button>
           </div>
        </div>
      </div>
    </>
  )
}

export default App
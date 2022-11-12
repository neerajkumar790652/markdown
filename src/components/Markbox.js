import {useState} from 'react';
 import React from 'react'
 
 const Markbox = ({getValue}) => {
    const [passdata ,setPassdata] = useState("");
    const value = e =>{
        const value = e.target.value;
        setPassdata(value);
        getValue(passdata);
    }
   return (
  
        <div className = "input for">
            <br/>
            <textarea className='inputbox_textarea textarea' onKeyUp={value}>{passdata}</textarea>
        </div>
       
   
   )
 }
 
 export default Markbox
 
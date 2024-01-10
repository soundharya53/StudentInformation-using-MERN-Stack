import React from "react";
import {useNavigate } from "react-router-dom";
import { useState} from "react";
import Back from "./Back";
import axios from 'axios';
import Spinner from "./Spinner";
const Create=()=>{
    const [name,setName]=useState('');
    const [fathername,setFathername]=useState('');
    const [birth,setBirth]=useState('');
    const [address,setAddress]=useState('');
    const [phonenum,setPhonenum]=useState('');
    const [loading,setLoading]=useState(false);
    const navigate=useNavigate();
   const handleSave=()=>{
    const data={
        name,fathername,birth,address,phonenum,
    };
    setLoading(true);
    axios.post('http://localhost:5555/regs',data)
    .then(()=>{
        setLoading(false);
        navigate('/');  
      })
      .catch ((error)=>{
          console.error('Error fetching books:', error);
          setLoading(false);
      })
   }

    return(
        <div>
        <Back/>
        <h1 className='text-3xl my-4'>CreateBook</h1>
        {
            loading ? (<Spinner/>):''
        }
       <div className='flex flex-col border-2 border-sky-400 item-center rounded-xxl w-fit p-4'>
        <div className='my-4'>
            <label className='text-xl mr-4 text-gray-500'>Name</label>
             <input  type='text'
                value={name}
                onChange={(e)=>setName(e.target.value)}
                className='border-2 border-gray-500'></input>
               
        </div>
      
        <div className='my-4'>
            <label className='text-xl mr-4 text-gray-500'>FatherName</label>
             <input  type='text'
                value={fathername}
                onChange={(e)=>setFathername(e.target.value)}
                className='border-2 border-gray-500'></input>         

        </div>
       
        <div className='my-4'>
            <label className='text-xl mr-4 text-gray-500'>DOB</label>
             <input  type='text'
                value={birth}
                onChange={(e)=>setBirth(e.target.value)}
                className='border-2 border-gray-500'></input>       
        </div> 
        <div className='my-4'>
            <label className='text-xl mr-4 text-gray-500'>Address</label>
             <input  type='text'
                value={address}
                onChange={(e)=>setAddress(e.target.value)}
                className='border-2 border-gray-500'></input>       
        </div> 
        <div className='my-4'>
            <label className='text-xl mr-4 text-gray-500'>Phonenum</label>
             <input  type='text'
                value={phonenum}
                onChange={(e)=>setPhonenum(e.target.value)}
                className='border-2 border-gray-500'></input>       
        </div>  
        <button className='p-2 bg-sky-300 m-8' onClick={handleSave}>
            Save
        </button>
        </div>
        </div>
    )
}

export default Create;
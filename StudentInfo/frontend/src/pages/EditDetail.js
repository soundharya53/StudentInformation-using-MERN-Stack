import React, { useEffect, useState } from "react";
import axios  from 'axios';
import { useParams } from "react-router-dom";
import Back from "./Back";
import { useNavigate } from "react-router-dom";

const EditDetail=()=>{
    const [name,setName]=useState('');
    const [fathername,setFathername]=useState('');
    const [birth,setBirth]=useState('');
    const [address,setAddress]=useState('');
    const [phonenum,setPhonenum]=useState('');
    const [loading,setLoading]=useState(false);
    const navigate=useNavigate();
    const {id}=useParams();
    useEffect(()=>{
        setLoading(true);
        axios.get(`http://localhost:5555/regs/${id}`)
        .then((res)=>{
            setName(res.data.name);
            setFathername(res.data.fathername);
            setBirth(res.data.birth);
            setAddress(res.data.address);
            setPhonenum(res.data.phonenum);
            setLoading(false);
        })
        .catch((error)=>{
            console.log(error.message);
            setLoading(false);

        })
    },[]);
    const handleEditBook=()=>{
        const data={
            name,
            fathername,
            birth,
            address,
            phonenum,
        };
        setLoading(true);
       axios.put(`http://localhost:5555/regs/${id}`,data)
      
        .then(()=>{
          setLoading(false);
          navigate('/');  
        })
        .catch ((error)=>{
            console.error('Error fetching books:', error);
            setLoading(false);
        }
    )};

    return(
       <div>
        <Back></Back> 
        <h1 className='text-3xl my-4'>Editdetails</h1>
       
        <div>
            
        <div className='flex flex-col border-2 border-sky-400 rounded-xxl w-fit p-4'>
        <div className='my-4'>
        <label className='text-xl mr-4 text-black-500'>Name</label>
            <input className="text-xl text-gray-500" type='text' value={name} 
            onChange={(e)=>setName(e.target.value)}></input>
            </div>
            <div className='my-4'>
            <label className='text-xl mr-4 text-black-500'>FatherName</label>
            <input className="text-xl text-gray-500 " type='text' value={fathername}
            onChange={(e)=>setFathername(e.target.value)}/>
            </div>
            <div className='my-4'>
            <label className='text-xl mr-4 text-black-500'>DOB</label>
            <input className="text-xl text-gray-500 " type='text' value={birth} 
            onChange={(e)=>setBirth(e.target.value)}/>
            </div>
            <div className='my-4'>
            <label className='text-xl mr-4 text-black-500'>Address</label>
            <input className="text-xl text-gray-500 " type='text' value={address} 
            onChange={(e)=>setAddress(e.target.value)}/>
            </div>
            <div className='my-4'>
            <label className='text-xl mr-4 text-black-500'>Phonenum</label>
            <input className="text-xl text-gray-500 " type='text' value={phonenum} 
            onChange={(e)=>setPhonenum(e.target.value)}/>
            </div>
            <button onClick={handleEditBook}>Save</button>
        </div>
        </div>
       </div> 
    )
}
export default EditDetail;
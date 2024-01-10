import React from 'react';
import { Link, useParams } from 'react-router-dom';
import {AiOutlineEdit} from 'react-icons/ai';
import { useSearchParams } from "react-router-dom";
import {BsInfoCircle} from 'react-icons/bs';
import {MdOutlineDelete,MdOutlineAddBox,MdSearch} from 'react-icons/md';
import { useState,useEffect } from "react";
import Spinner from './Spinner';
import "./Home.css";
const Home=()=>{
    const [regs,setRegs]=useState([]);
   // const [searchParams,setSearchParams]=useSearchParams({num:"sfdsg12dafefs"});
    const [loading,setLoading]=useState(false);
    //const num=searchParams.get("num");
    const {id}=useParams();
    useEffect(()=>{
       
        setLoading(true);
        const fetchdata=async()=>{
            try{
            const response=await fetch('http://localhost:5555/regs');
            if(!response.ok)
                console.log("http error");

                const data=await response.json();
                setRegs(data);
                setLoading(false);
        }
        catch(error){
            console.log(error.message);
            setLoading(false);
        }
    }
     
    fetchdata();
    },[]);

return(
    
    <div>
        <div className='flex justify-between items-center'>

        <h1 className='text-3xl my-8 justify-between items-center'>Personal information</h1>
        <Link to='/regs/create'>
    <MdOutlineAddBox className='text-sky-800 text-4xl' />

        </Link>
        
        <Link to={`/regs/search/${id}`}>
    <MdSearch className='text-sky-800 text-4xl' />

        </Link>

        </div>
   {loading ?(<Spinner></Spinner>):
   (
        <table className='w-full border-separate border-spacing-2'>
        <thead>
        <tr>
            <th className='border border-slate-600 rounded-md'>No</th>
            <th className='border border-slate-600 rounded-md'>ID</th>
            <th className='border border-slate-600 rounded-md'>Name</th>
            <th className='border border-slate-600 rounded-md max-md:hidden'>FatherName</th>
            <th className='border border-slate-600 rounded-md max-md:hidden'>DOB</th>
            <th className='border border-slate-600 rounded-md max-md:hidden'>Address</th>
            <th className='border border-slate-600 rounded-md max-md:hidden'>Phonenum</th>
            <th className='border border-slate-600 rounded-md'>Operations
            </th>
            
        </tr>
        </thead>  
       
        <tbody>
       
        {regs.map((reg,index)=>(
               
                    <tr key={reg._id} className='h-8'>
                    <td className='border border-slate-700 rounded-md text-center'>{index + 1}</td>
                    <td className='border border-slate-700 rounded-md text-center'>{reg._id}</td>
                    <td className='border border-slate-700 rounded-md text-center'>{reg.name}</td>
                    <td className='border border-slate-700 rounded-md text-center max-md:hidden'>{reg.fathername}</td>
                    <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
                        {reg.birth}
                    </td>
                    <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
                        {reg.address}
                    </td>
                    <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
                        {reg.phonenum}
                    </td>
                    
                    <td className='border border-slate-700 rounded-md text-center'>
                     <div className='flex justify-enter gap-x-4'>
                       <Link to={`/regs/show/${reg._id}`}>
                       <BsInfoCircle className='text-2xl text-green-800'/>   
                        </Link>
                        <Link to={`/regs/edit/${reg._id}`}>
                        <AiOutlineEdit className='text-2xl text-green-600'/>   
                        </Link>
                        <Link to={`/regs/delete/${reg._id}`}>
                        <MdOutlineDelete className='text-2xl text-green-600'/>   
                        </Link>
                        </div>
                    </td>
                    </tr>
            ))}
        </tbody> 
                  
        </table>
   )}
        </div>
    )}
    
export default Home;
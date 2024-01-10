import React from "react";
import Back from "./Back";
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
const SearchDetail=()=>{
    const [regs, setRegs] = useState({});

    const {id}=useParams();
  
   const [searchParams,setSearchParams]=useSearchParams({num:"65585a70102eac8226a809e1"});
  
  const num=searchParams.get("num");
    useEffect(() => {
        
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:5555/regs/${num}`);
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data = await response.json();
                setRegs(data);
                
            } catch(error) {
                console.error('Error fetching books:', error);
               
            };
            
        }
        fetchData();
    },);
    if (regs === null || Object.keys(regs).length === 0) {
        return (
            <div className='p-4'>
                <div className='flex flex-col justify-between border-2 border-red-400 rounded-xxl w-fit p-4 text-center'>
                    <h1>('Warning: regs is null. Please check and handle this situation.')</h1>
                    {/* You can also return or render a warning message here if needed */}
                    <div>Please check whether reg num is correct </div>
                </div>
                <div><Back></Back>  </div>
            </div>
        );
    }
    return (
        <div className='p-4'> 
        <div>
                    <input type="text" value={num} onChange={e=>setSearchParams({num:e.target.value})}/>
                </div> 
       <div><Back></Back>  </div>
                
               <div className='flex flex-col border-2 border-sky-400 rounded-xxl w-fit p-4'>
               
                                         <div className='my-4'>
                                         
                        <span className='text-xl mr-4 text-gray-500'>id</span>
                        <span>{regs._id}</span>
                    </div>
                    <div className='my-4'>
                        <span className='text-xl mr-4 text-gray-500'>title</span>
                        <span>{regs.name}</span>
                    </div>
                    <div className='my-4'>
                        <span className='text-xl mr-4 text-gray-500'>author</span>
                        <span>{regs.fathername}</span>
                    </div>
                    <div className='my-4'>
                        <span className='text-xl mr-4 text-gray-500'>year</span>
                        <span>{regs.phonenum}</span>
                    </div>
                 </div>

       </div>

    )
}

export default SearchDetail;
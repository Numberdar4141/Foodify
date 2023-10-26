import React,{useState} from "react";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';



const Counter =()=>{
     let [count,setCount] =  useState(0)

    
    return(
        <>
        
        <div className="">
            
            
            <div className="    my-2">
                <h1 className="text-black font-bold"> Qty-{count}</h1>
                <button  onClick={()=>{
                    if(count>0){
                        setCount(count-1)
                    }
                }} className="   m-2">< RemoveIcon className="mr-[1px] mb-[7px]"/></button>
                <button  onClick={()=>setCount(0)} className=" m-2"><DeleteIcon className="mr-[1px] mb-[7px]"/></button>
                <button onClick={()=>setCount(count+1)} className="   m-2 "><AddIcon className="mr-[1px] mb-[7px]"/></button>
            </div>
            
        </div>
       
          </>
        
    )
}
export default Counter


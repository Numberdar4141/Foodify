import React from "react";
import Navbar from './Navbar';
import Back from "../Assests/error-404.png"
import {Link } from "react-router-dom";


const Error = (() => {
    return (
        <div>
           
            
     
        <div  style={{ backgroundImage:`url(${Back})`,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover" , width:"100%",height:"700px" 
    }} className=" place-content-top  w-[100vw]    h-screen grid place-content-center   ">
        <h1 className="text-gray-500 text-9xl font-bold">Page not found </h1>

        <Link to="/"><button className="  m-3  w-30 p-1  text-[40px] ml-[400px]  bg-slate-300 hover:text-gray-800 hover:rounded-lg  text-black   rounded-xl font-medium" >Reload</button> </Link>
    </div>

          </div>
    )
})

export default Error;
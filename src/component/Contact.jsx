import React from "react";
import Navbar from "./Navbar";
import Watch from "../Assests/Watch.jpg"

import {Link } from "react-router-dom";
import Weather from "./Weather";

const Contact =() =>{
    return(
        <>
        <Navbar/>
        <div  style={{ backgroundImage:`url(${Watch})`,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover", 
     }} className=" place-content-top  w-[100vw]    h-screen grid place-content-start   ">
        <div>

        <div className=" flex w-[200px]  p-4 m-8 ">
            <Link to = "/Counter">
                
                <h1 className=" text-white text-[40px]">Powered by the all‑new S9 SiP.</h1>
                <h3 className="text-white text-[20px]">Custom Apple silicon makes Apple Watch Ultra 2 more capable, easier to use and faster. The new dual-core CPU has 5.6 billion transistors — 60% more than the previous generation. There’s never been anything quite like it in a smartwatch, and it enables advanced new features like on-device Siri, Precision Finding for iPhone and a magical new way to control your Apple Watch using a simple double tap gesture.</h3>
                 <button className="  p-1  text-[20px] w-[300px] bg-orange-500 rounded-xl  hover:bg-white  hover:text-black  text-white ">Buy Now </button></Link>

            </div>
            <div>
            
            </div>

        </div>

        </div>
        </>

    )

}
export default Contact
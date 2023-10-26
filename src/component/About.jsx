import React from "react";
import Navbar from "./Navbar";
import IpadPro from "../Assests/ipad pro.jpg"
import Ipad from "../Assests/ipad.mp4"
import { Link } from "react-router-dom";
const About =()=>{
    return(
        <>
            <Navbar/>
            <div className="bg-black h-screen justify-between">
                <div className="flex justify-around ">
                
                    <video src={Ipad} autoPlay loop muted  className=" w-[800px] h-[400px] place-content-center " />
                    <div className=" flex w-[800px]  p-4 m-8 ">
            <Link to = "/Counter">
                
                <img className=" h-[300px] w-[700px]" src={IpadPro} alt="" srcset="" />
                <h3 className="text-white text-[20px] place-content-center grid ">ipad Pro</h3>
                

                 <button className="  p-1  grid place-content-center  text-[30px]  w-[165px]  bg-orange-500 rounded-xl  hover:bg-white  hover:text-black  text-white ">Buy Now </button></Link>

                
            </div>
                    
            
                </div>
                <div>
                    <h1 className="text-[30px] text-white font-serif m-4 ">Astonishing performance. Incredibly advanced displays. Superfast wireless connectivity. Next-level Apple Pencil capabilities. Powerful new features in iPadOS 16. The ultimate iPad experience</h1>
                </div>
               
      
        
            </div>
          </>
        
    )
}
export default About
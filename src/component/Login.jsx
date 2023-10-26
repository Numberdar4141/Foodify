import React from "react";
import Navbar from "./Navbar";
import Imc from "../Assests/ocean.jpg"
import {Link } from "react-router-dom";

const Login = ()=>{
    return(
    <>
     <Navbar/>
     <div style={{ backgroundImage:`url(${Imc})`,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover", 
     }} className=" place-content-top  w-[100vw]    h-screen grid place-content-center   ">

        <div className="grid place-content-center   w-[100vw]   h-screen">    
           <div className="  p-4 rounded-xl backdrop-blur-md bg-white/30 ...">
 
  

           <div className=" text-center text-black font-serif font-extrabold  text-[30px] mb-5 ">  <big>Sign In</big> </div>
            <div className=" text-center font-serif text-[25px]  mb-[20px]">  Enter your Details</div>
            <div className="mb-10"> 
                <label className="m-5 text-[20px] font-medium"> Email address  </label> <br />
                
                <input className="border-2  p-1 rounded-xl pl-2 w-[350px] ml-5 border-slate-500" placeholder="Enter your Email" type="text">
                    </input>
            </div>
            <div className=" mb-10">
                <label className="m-5 text-[19px] font-medium"> Enter Password </label> <br />
                <input className="border-2 p-1 rounded-xl pl-2 w-[350px] border-slate-500 ml-5" placeholder=  "*********" type="password">
            </input>
            <div className="flex  justify-between">
                <div className="flex  place-content-center  ">

                <input className="ml-5" type="checkbox" ></input>
                <label className="font-medium">Remember me</label>
                </div>
                <div className="flex  justify-end">
                <Link to="/Login"><button className="  text-blue-900   w-30  font-medium  " >Forgot Password?</button> </Link>
                </div>
            </div>
            </div>
           <div className="flex justify-center">
           <button className=" p-2 ml-5  w-[350px] bg-slate-600 rounded-xl  hover:bg-cyan-300  hover:text-black  font-medium text-white ">Submit</button>
           </div>
           <div>
           <Link to="/Signup"><button className="  text-blue-900 m-3  w-30 p-1 font-medium  " >Dont have an account? Register now!</button> </Link>
           </div>
           </div>
     </div>

            </div>
    </>
    )
}

export default Login
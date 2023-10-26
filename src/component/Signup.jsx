import React from 'react';
import Navbar from './Navbar';
import Sig2 from '../Assests/Sig4.jpg'
import {Link } from "react-router-dom";

const SignupPage = () => {
  return (
    <>
    <nav>
        <Navbar/>
    </nav>
    <div className="bg-cover  h-screen flex items-center opacity-90 justify-center"  >
      <div className="bg-white  border-2 w-[1000px] rounded-2xl shadow-lg flex items-center">
        <div className="w-[500px] h-[500px] mr-4">
          <img src={Sig2} alt="User Avatar" className="w-full h-full  rounded-l-2xl object-cover " />
        </div>
        <div className="  ml-[40px]  bg-white">
 
  

 <div className=" text-center text-black font-serif font-extrabold  text-[30px] mb-5">  <big>Create Account</big> </div>
  
  <div className="flex ">

  <div className="mb-5">
      <label className="m-5 text-[20px] font-medium"> Enter first Name  </label> <br />
      <input className="border-2  p-1 rounded-xl pl-2 w-[150px] ml-5  border-slate-500" placeholder="Enter first name" type="text">
          </input>
  </div>
  <div className="mb-5">
      <label className="m-5 text-[20px] font-medium"> Enter last Name  </label> <br />
      <input className="border-2  p-1 rounded-xl pl-2 w-[160px] ml-5 border-slate-500" placeholder="Enter last Name" type="text">
          </input>
  </div>
  </div>

  <div className="mb-6">
  <div className="mb-10">
      <label className="m-5 text-[20px] font-medium"> Enter email address  </label> <br />
      <input className="border-2  p-1 rounded-xl pl-2 w-[350px] ml-5 border-slate-500" placeholder="Enter your Email" type="text">
          </input>
  </div>
    
  <div className=" mt-10 ">
      <label className="m-5 text-[19px] font-medium "> Create Password</label> <br />
      <input className="border-2 p-1 rounded-xl pl-2 w-[350px] border-slate-500 ml-5" placeholder=  "*********" type="password">
  </input>
  </div>
  <div className="flex  justify-between">
      <div className="flex  place-content-center  ">

      <input className="ml-5 mt-[10px]" type="checkbox" ></input>
      <label className=" text-[13px]  mt-[10px] font-medium">I agree to Refoodify's Terms of service and privacy policy.</label>
      </div>
      <div className="flex  justify-end">
      
      
      </div>
  </div>
  </div>
 <div className="flex justify-center">
 <button className=" p-2 ml-[20px] w-[350px] bg-blue-700 rounded-xl  hover:bg-white  hover:text-blue-700 border-2 hover:border-blue-700  text-white font-medium ">Submit</button>
 </div>
 <div>
 <Link to="/Login"><button className="  text-blue-700 m-3  w-30 p-1 font-medium  " >Already have an account? Login!</button> </Link>
 </div>
 </div>
      </div>
    </div>
    </>
  );
};

export default SignupPage;

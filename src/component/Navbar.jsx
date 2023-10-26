import React from "react";
import {Link } from "react-router-dom";
import logo from '../Assests/mylogo.png'
import HomeIcon from '@mui/icons-material/Home';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import LoginIcon from '@mui/icons-material/Login';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';





const Navbar =() =>{
    return(
     <main> 
        
        

        <div  className=" flex   bg-black justify-between ">
        <div style={{ backgroundImage:`url(${logo})`,backgroundRepeat:"no-repeat",backgroundPosition:"fixed",backgroundSize:"cover ", width:"80px",height:"50px", left:"10px"
          }} className=" place-content-top  w-[100vw]   m-1  h-screen grid place-content-center  ">
           <Link to="/Home"></Link> <button className="  "></button><Link/>
            
        </div>

            <div className=" flex place-content-center    ">
            
            <Link to="/"><button className=" text-gray-300 m-3  w-20 p-1    hover:scale-105 hover:text-white  rounded font-medium " > <HomeIcon className="mr-[1px] mb-[7px]"/>Home</button> </Link>
            
            <Link to="/Food"><button className=" text-gray-300 m-3  w-25 p-1   hover:text-white  rounded font-medium " ><FastfoodIcon className="mr-[1px] mb-[7px]"/>FOOD</button> </Link>
            <Link to="/About"><button className=" text-gray-300 m-3  w-30 p-1    hover:text-white  rounded font-medium " >FOOD Donor </button> </Link>
            <Link to="/Payment"><button className="  text-gray-300 m-3  w-30 p-1    hover:text-white  rounded  font-medium" > About us </button> </Link>
            <Link to="/Nidhi"><button className="  text-gray-300 m-3  w-30 p-1    hover:text-white  rounded  font-medium" >Contact us</button> </Link>
            <Link to="/Mycart"><button className="  text-gray-300 m-3  w-30 p-1    hover:text-white  rounded font-medium " ><ShoppingCartIcon className="mr-[1px] mb-[7px]"/> My Cart</button> </Link>
            
            </div>

            <div className="  flex justify-end  ">
                <Link to="/Login"><button className=" text-gray-300 m-3  w-30 p-1  hover:text-white  rounded  font-medium" > <LoginIcon className="mr-[1px] mb-[7px]"/>My Order</button> </Link><h1 className="pt-4 text-white">|</h1>
                <Link to="/Signup"><button className=" text-gray-300 m-3  w-30 p-1   hover:text-white  rounded  font-medium" > <PersonOutlineIcon className="mr-[1px] mb-[7px]"/>My Account</button> </Link>
            </div>
  
        </div>
        
     </main>
    )
}
export default Navbar
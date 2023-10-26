import React from "react";
import Navbar from "./Navbar";
import {Link } from "react-router-dom";
import Iphone1 from "../Assests/iphone15.jpeg"
import Counter from "../component/Counter"
import IPhonepng from "../Assests/iphonepng.png"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


const Buy =() =>{
    return(
        <>
            <Navbar/>
        <div className=" flex justify-between  ">
          
               <div className=" flex w-[800px]    p-4 m-8 rounded-xl ">  
                   <img className="h-[500px]  w-[400px]" src={Iphone1} alt="" srcset="" />
                
                <div>
                    <h1 className=" font-serif text-[25px] ml-[60px]">Apple iPhone 15 Pro Max (1 TB) - Deep Black</h1>
                    <h1 className=" ml-[60px] text-red-600 text-[40px]"> Price- 1,89,900 <br />
                    </h1>
                    <div className="ml-[50px]">
           <Link to="/Service"><button className="  text-blue-600 m-3  w-30 p-1   " >Visit Iphone Store</button> </Link>
           </div>
           <div className="ml-[60px]">
            <h1>Inclusive of all taxes
                 <h1>
               EMI starts at ₹9,208.
                 </h1>
                No Cost EMI available EMI</h1> <br />

                    <h1 className="font-bold  ">

                    FREE delivery Tue, 19 Sept <br />
                    Or fastest delivery Tomorrow, 18 Sept
                    </h1>
                    <div className="">
                        <Counter/>
                        <button className="  p-1  mb-[20px] w-[165px] bg-black rounded-xl  hover:bg-white  hover:text-black  text-white "> <ShoppingCartIcon className="mr-[1px] mb-[7px]"/>Add to Cart </button> <br /> 
                        <button className="  p-1   w-[165px] bg-black rounded-xl  hover:bg-white  hover:text-black  text-white "> Buy Now </button>
                    </div>
           </div>
                </div>
                </div>
   
   <div className="mr-[20px] mt-[30px]">
   <img className="h-[500px]  w-[400px]" src={IPhonepng} alt="" srcset="" />
   </div>
        </div>
        </>

    )

}
export default Buy
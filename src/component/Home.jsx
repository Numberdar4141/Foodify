import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { motion, useAnimation } from "framer-motion"
import Autoslider from '../component/Autoslider'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchBox from "./Search";
import Home1 from "../Assests/Home1.jpg"
import Rslider from './Rslider'
import image2 from '../Assests/S2.webp'
import Map from './Map'
import { Link } from "react-router-dom";
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

import logo from '../Assests/mylogo.png'
import RoomIcon from '@material-ui/icons/Room';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import EmailIcon from '@material-ui/icons/Email';
import Veg from './Veg'


const Home = () => {
    const handleSearch = (query) => {
        // Implement your search logic here using the query parameter
        console.log('Search query:', query);

        // Perform actions like fetching data from an API based on the query
    };
    const controls = useAnimation();

    const handleScroll = () => {
        const scrollY = window.scrollY;
        controls.start({ opacity: 0 + scrollY / 1000 }); // Adjust the value as needed
    };
    React.useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);



    return (
        < >
            <nav className=" ">
                <Navbar />

            </nav>

            <div className="bg-grey-50 ">
                <div className=" h-screen">
                    <div style={{
                        backgroundImage: `url(${Home1})`, backgroundRepeat: "no-repeat", backgroundPosition: "fixed", backgroundSize: "cover ", width: "100vw", height: "100vh", left: "10px"
                    }} className="flex">

                        <div className=" text-[15px] ml-[150px] mt-[70px] font-medium ">


                            <div>
                                Hungry? you're in the right place....
                            </div>
                            <div className="home bg-gray-300 rounded-3xl w-[370px] ">

                                <SearchBox onSearch={handleSearch} />
                            </div>
                            <motion.div className=""
                                animate={{
                                    x: 50,
                                    opacity: 1,

                                }}
                                initial={{
                                    x: -150,
                                    opacity: 0.8


                                }}
                                transition={{
                                    type: "spring",
                                    duration: 1,
                                    stiffness: 60

                                }}
                            >
                                <div className="text-[28px] text-white p-[30px]">
                                    <h1>Best Foods From </h1>
                                    <h1>The Comfort of</h1>
                                    <h1>Your Home.</h1>
                                </div>

                            </motion.div>

                        </div>
                        <div className="flex justify-between  p-[30px]">



                        </div>
                        <div className="flex justify-between  p-[30px]">


                            <motion.div className="border-2 mr-[500px]   rounded-3xl  hover:scale-105 duration-300  hover:-translate-y-3 shadow-lg hover:shadow-xl  hover:border-slate-300    justify-items-start bg-white w-[300px] h-[300px]"
                                animate={{
                                    x: 400,
                                    opacity: 1,

                                }}
                                initial={{
                                    x: 0,
                                    opacity: 0.5


                                }}
                                transition={{
                                    type: "spring",
                                    duration: 1,
                                    stiffness: 30

                                }}
                            >
                                <motion.div className=" "



                                >
                                    <motion.img src={Home1} alt="" className=" h-[300px] rounded-3xl"

                                    />



                                </motion.div>
                            </motion.div>
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-between">

                            <div className="ml-[40px] w-[150px] mt-5 text-[25px]  font-semibold">
                                All vegitarian items
                            </div>
                            <div>
                                <div>
                                    <button className="btn border-2 rounded-3xl w-[100px] mt-5 bg-gray-300 ml-[800px]   ">
                                        Sort By <KeyboardArrowDownIcon className="mr-[1px] text-[50px] mb-[7px]" />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="  h-screen mt-[150px] w-screen" >
                            <motion.div className=""
                                animate={{
                                    y: -100
                                }}

                                variants={{
                                    hidden: { opacity: 0.4, y: 75 },
                                    visible: { opacity: 1, y: 0 },
                                }}



                                transition={{
                                    type: "spring",
                                    duration: 1,
                                    stiffness: 60

                                }}
                            >

                                <Veg/>

                            </motion.div>

                            <div>

                                <motion.div className=""
                                    initial={{ opacity: 0 }}
                                    animate={controls}
                                    transition={{

                                        duration: 0.5,
                                        

                                    }}
                                >
                                    <div className="ml-[40px] text-[25px]  font-semibold">
                                        All non-Vegitarian items
                                    </div>

                                    <Autoslider/>

                                </motion.div>

                            </div>

                        </div>
                    </div>


                    <div>

                        <div className=" bg-gray-50 h-[500px] w-screen">

                            <div>

                                <motion.div className=""
                                    initial={{ opacity: -0.5 }}
                                    animate={controls}

                                    transition={{

                                        duration: 1,
                                        stiffness: 60

                                    }}
                                >
                                    <div className="mt-[200px] ml-[40px]">
                                        <h3>TESTIMONIAL</h3>
                                        <h1 className="text-[30px]  font-medium " >Our Satisfied Customers</h1>

                                    </div>

                                    <Rslider />

                                </motion.div>

                            </div>



                        </div>

                    </div>
                    <div className=" w-[900px] hover:z-50 rounded-t-3xl  shadow-2xl  ml-[220px] grid place-content-center h-[70px] bg-gray-800">
                        <h1 className="  text-white text-[20px] font-medium grid mt-[60px] place-content-center">Our Success thought or</h1>
                        <h1 className="grid text-white text-[20px] font-medium place-content-center">brief introduction about project.</h1>

                    </div>


                    <footer className="h-[400px] bg-black w-screen">


                        <div className=" w-[900px]  shadow-2xl rounded-b-3xl  ml-[220px] grid place-content-center h-[70px] bg-gray-800">


                        </div>
                        <div className="text-white grid font-semibold place-content-center">
                            <h1 className="text-[28px] font-normal">Opening Hours : Sun-Fri (9am-7pm)</h1>
                        </div><br />
                        <div className="h-[250px] w-auto flex justify-between bg-black  p-2">
                            <div className=" ml-[20px] h-[200px] w-[600px] text-[22px] text-white p-4">
                               <div>
                            <RoomIcon  sx={{fontSize:59}}   className="mr-[20px] text-yellow-400 " />
                                 World College of Technology and Management,s
                                 <div className="ml-[45px]">
                                    WCTM Campus,
                                Farukh Nagar, Gurgaon, Delhi - NCR
                                    </div> 
                                </div>
                                <div className="mt-[20px]">
                            <WhatsAppIcon  sx={{fontSize:59}}   className="mr-[20px] text-green-600 " />
                            +91-8607788739, +91-8607788740
                                 
                                </div>
                                <div className="mt-[20px]">
                            <EmailIcon  sx={{fontSize:59}}   className="mr-[20px]  text-red-400 " />
                            admin@wctmgurgaon.com, 
                            <div className="ml-[45px]">
                            chairman@wctmgurgaon.com

                            </div>
                                 
                                </div>



                               
                            </div>
                            <div className="bg-white h-[200px] w-[3px]">

                            </div>


                            <div className="bg-black  mr-[20px] h-[200px] w-[600px]">
                                <div className="   ">
                                    <h1 className="text-[30px] text-white ml-[150px]  mb-[20px] font-bold">Connect with US </h1>
                                    <div className="flex justify-evenly">

<div className="bg-gray-600  hover:bg-gray-800 rounded-full w-[60px] h-[60px]">

                                    <InstagramIcon sx={{fontSize:49}} className=" ml-[5px]  mt-1 text-pink-400 " />
</div>
<div className="bg-gray-600  hover:bg-gray-800 rounded-full w-[60px] h-[60px]">

                                    <YouTubeIcon sx={{fontSize:49}} className=" ml-[5px]  mt-1 text-red-500    " />
</div>
<div className="bg-gray-600  hover:bg-gray-800 rounded-full w-[60px] h-[60px]">

                                    <FacebookIcon sx={{fontSize:49}} className=" ml-[5px]  mt-1 text-blue-600 " />
</div>
<div className="bg-gray-600  hover:bg-gray-800 rounded-full w-[60px] h-[60px]">

                                    <TwitterIcon sx={{fontSize:49}} className=" ml-[5px]  mt-1 text-blue-300 " />
</div>
<div className="bg-gray-600  hover:bg-gray-800 rounded-full w-[60px] h-[60px]">

                                    <LinkedInIcon sx={{fontSize:49}} className=" ml-[5px]  mt-1 text-blue-500 " />
</div>

                                    

                                    </div>

                                </div>

                            </div>
                        </div>
                        <div className="bg-black">
                        <div className=" flex place-content-center bg-black text-white   ">
            
            <Link to="/"><button className=" text-gray-300 m-3  w-20 p-1    hover:scale-105 hover:text-white  rounded font-medium " > About</button> </Link>
            
            <Link to="/Map"><button className=" text-gray-300 m-3  w-25 p-1   hover:text-white  rounded font-medium " >Blog</button> </Link>
            <Link to="/About"><button className=" text-gray-300 m-3  w-30 p-1    hover:text-white  rounded font-medium " >FAQ </button> </Link>
            <Link to="/Weather"><button className="  text-gray-300 m-3  w-30 p-1    hover:text-white  rounded  font-medium" >Carrer </button> </Link>
            <Link to="/Contact"><button className="  text-gray-300 m-3  w-30 p-1    hover:text-white  rounded  font-medium" >Contact us</button> </Link>
            <Link to="/Buy"><button className="  text-gray-300 m-3  w-30 p-1    hover:text-white  rounded font-medium " > Privacy and Security</button> </Link>
            
            </div>
          
                        </div> 
                        <div className="text-white mt-[1px] h-[50px] w-[100%] bg-black">
                <h1  className=" grid place-content-center" >Copyrights  2023 - Refoodify </h1>
            </div>

                    </footer>
                </div>
            </div>
        </>

    )

}
export default Home
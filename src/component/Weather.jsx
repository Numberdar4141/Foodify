import React, { useEffect, useState} from 'react'
import Navbar from './Navbar'

import axios from 'axios';
import Earth from "../Assests/Earth.mp4"

const Weather =()=>{
    const [weatherData, setWeatherData] = useState({});
    const [city, setCity] = useState('Mumbai');
    const [apiKey] = useState('cc4d7cd1632e9d793fd7f40967b105dc');
    const [currtxt, setCurrText] = useState('');

    const fetchdetails=()=>{
        if(city && apiKey) { 
        axios
        .get( `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
        .then((Response) => {
            console.log(Response.data)
            setWeatherData(Response.data)    
        })
        .catch((error) => {
            console.log(error);
             });
        }
    }
useEffect(()=> {
     fetchdetails()
    console.log("Welcome")
},[city])
return(
 <>
    <Navbar/>
    <div>
        <div className='grid h-screen w-screen fixed '>

             <video src={Earth} autoPlay loop muted  className="  w-screen fixed  h-screen bg-black  " /> 
        </div>
        <div className='z-10 fixed grid place-content-center'>

        <div  className="  w-[300px] place-content-center grid  p-4 rounsded-xl   ml-[500px] mt-[290px]  rounded-xl backdrop-blur-md bg-white/30 ..." >
         <div  className=" place-content-top      grid place-content-center  "> 
          <h1 className='text-black text-[30px]  grid place-content-top'> <b>Weather App  </b></h1>
            <div>
                <input className='border-2 border-black rounded-lg m-21 p-1' type='search' onChange={(event) => { setCurrText(event.target.value)}}/>
                <button onClick={()=>{setCity(currtxt);}} className='border-2 m-1 p-1  bg-orange-500 rounded-xl  hover:bg-white  hover:text-black  text-white'> Search </button>                        
            </div>


         </div>
            <div>

                {weatherData.main && (
                    <div>
                        <h2>{weatherData.name}, {weatherData.sys.country}</h2>
                        <p>Temperature: {(weatherData.main.temp-273).toFixed(2)} °C </p>
                        <p>Weather: {weatherData.weather[0].description}</p>
                    </div>
                )}
            </div>
                </div>
            </div>
        </div>
    </>
)
} 

export default Weather
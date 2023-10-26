import React, { useEffect, useState} from 'react'
import Widget1 from "../Assests/widget1.jpg"
import axios from 'axios';

const Widget =()=>{
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
return (

    <div className='grid place-content-end justify-end'>
        <div style={{ backgroundImage:`url(${Widget1})`,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover", 
     }} className=" rounded-xl backdrop-blur-md bg-black/30 ...   p-4 rounsded-xl grid place-content-end" >
          <h1 className='text-black text-[30px]  grid place-content-center'> <b>Weather   </b></h1>
            <div>
                <input className='border-2 border-black rounded-lg m-21 p-1' type='search' onChange={(event) => { setCurrText(event.target.value)}}/>
                <button onClick={()=>{setCity(currtxt);}} className='border-2 m-1 p-1  bg-orange-500 rounded-xl  hover:bg-white  hover:text-black  text-white'> Search </button>                        
            </div>


            <div>

                {weatherData.main && (
                    <div className='text-white font-semibold'>
                        <h2>{weatherData.name}, {weatherData.sys.country}</h2>
                        <p>Temperature: {(weatherData.main.temp-273).toFixed(2)} °C </p>
                        <p>Weather: {weatherData.weather[0].description}</p>
                    </div>
                )}
            </div>
            </div>
       </div>     
        
                )
}
export default Widget
import React, { useState } from 'react';
import image1 from '../Assests/n1.jpg'
import image2 from '../Assests/n2.jpg'
import image3 from '../Assests/n3.jpg'
import image4 from '../Assests/n4.jpg'
import image5 from '../Assests/n5.jpg'
import image6 from '../Assests/n6.jpg'
import image7 from '../Assests/n7.jpg'
import image8 from '../Assests/n8.jpg'
import image9 from '../Assests/n9.jpg'
import image10 from '../Assests/n10.jpg'
import image11 from '../Assests/n11.jpg'
import image12 from '../Assests/n12.jpg'
import image13 from '../Assests/n13.jpg'
import image14 from '../Assests/n14.jpg'
import image15 from '../Assests/n15.jpg'
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import StarRateIcon from '@mui/icons-material/StarRate';
import StarHalfIcon from '@mui/icons-material/StarHalf';

const images = [
  image1,
  
  
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
  image11,
  image12,
  image13,
  image14,
  image15,

 
];

const descriptions = [
 
  'Pizza',
  'Burger',
  'PanCake',
  'Sandwich',
  'Description 6',
  'Description 7',
  'Description 8',
  'Description 9',
  'Description 10',
  'Description 11',
  'Description 12',
  'Description 13',
  'Description 14',
  'Description 15',
];

const Carousel = () => {
  const totalBoxes = images.length;
  const boxesPerPage = 5;
  const totalPages = Math.ceil(totalBoxes / boxesPerPage);
  const [currentPage, setCurrentPage] = useState(0);

  const goToPreviousSlide = () => {
    setCurrentPage((prevPage) => (prevPage - 1 + totalPages) % totalPages);
  };

  const goToNextSlide = () => {
    setCurrentPage((prevPage) => (prevPage + 1) % totalPages);
  };

  const startIndex = currentPage * boxesPerPage;
  const endIndex = Math.min(startIndex + boxesPerPage, totalBoxes);

 // const ratings = [4.5, 3.8, 5.0, 4.2, 3.7, 4.9, 4.0, 4.7, 3.5, 4.8, 3.9, 4.3, 4.6, 4.1, 4.4];
  const ratings1 = ['99/-', '49/-', '59/-', '99/-', 3.7, 4.9, 4.0, 4.7, 3.5, 4.8, 3.9, 4.3, 4.6, 4.1, 4.4];

  return (
    <div className="flex flex-col items-center mt-8">
     
      <div className="flex">
        
        {images.slice(startIndex, endIndex).map((image, index) => (
          <div
            key={startIndex + index}
            className={`box w-[250px] h-[300px]  duration-300  hover:-translate-y-3 shadow-lg hover:shadow-xl rounded-3xl hover:rounded-lg hover:border-slate-300 hover:scale-105 flex flex-col items-center justify-center mx-2 border border-gray-300 ${
              index === 0 ? 'border-blue-500' : ''
            } cursor-pointer`}
            onClick={() => setCurrentPage(currentPage)}
          >
            <img
              src={process.env.PUBLIC_URL + image}
              alt={`Box ${startIndex + index + 1}`}
              className="w-full rounded-t-lg h-[170px] object-cover"
            />
            <div className="bg-white w-full h-1/2 p-2 flex flex-col items-center justify-between">
            <p className="text-center text-[20px] font-medium mt-2">{descriptions[startIndex + index]}</p>
            <div className="flex items-center">
                <span className="text-red-500 mr-2">Price:</span>
                <span>{ratings1[startIndex + index]}</span>
              </div>
              <div className="flex items-center mb-2">
                <button className="btn border-2 hover:rounded-lg  bg-gray-300 hover:bg-gray-400 hover:font-medium rounded-3xl w-[120px] btn-secondary mr-2">{`Items Details`}</button>
                <button className="btn border-2 hover:rounded-lg  bg-gray-300 hover:bg-gray-400 hover:font-medium rounded-3xl w-[100px] btn-secondary">{`Order Now`}</button>
              </div>
              <div className="flex items-center">
                <span className="text-gray-600 mr-2">Rating:
                
<StarRateIcon  className=' text-yellow-500 '/>
<StarRateIcon  className=' text-yellow-500 '/>
<StarRateIcon  className=' text-yellow-500 '/>
<StarRateIcon  className=' text-yellow-500 '/>
<StarHalfIcon  className=' text-yellow-500 '/>
                </span>
                
              </div>
             
            </div>
          </div>
        ))}
      </div>
      
      <div className="flex justify-center mt-5">
        <button
          onClick={goToPreviousSlide}
          className="btn bg-gray-700 hover:bg-black rounded-full text-white w-[35px] pt-[5px] btn-primary mr-5"
          disabled={currentPage === 0}
        >
          <KeyboardDoubleArrowLeftIcon className="mr-[1px] text-[50px] mb-[7px]"/>
        </button>
        
        <button
          onClick={goToNextSlide}
          className="btn rounded-full  bg-gray-700 hover:bg-black text-white w-[35px] pt-[5px] btn-primary"
          disabled={currentPage === totalPages - 1}
        >
           <KeyboardDoubleArrowRightIcon className="mr-[1px]  text-[50px] mb-[7px]"/>
        </button>
      </div>
    </div>
  );
};

export default Carousel;

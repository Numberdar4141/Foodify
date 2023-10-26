import React, { useState } from 'react';
import image1 from '../Assests/R1.jpeg'
import image2 from '../Assests/H2.jpg'
import image3 from '../Assests/H14.jpg'
import image4 from '../Assests/H4.jpg'
import image5 from '../Assests/H5.jpg'
import image6 from '../Assests/H6.jpg'
import image7 from '../Assests/H7.jpg'
import image8 from '../Assests/H4.jpg'
import image9 from '../Assests/H2.jpg'
import image10 from '../Assests/H10.jpg'
import image11 from '../Assests/H15.jpg'
import image12 from '../Assests/H2.jpg'
import image13 from '../Assests/H4.jpg'
import image14 from '../Assests/H14.jpg'
import image15 from '../Assests/H15.jpg'
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
 
  'Maria',
  'Maria',
  'Maria',
  'Maria',
  'Maria',
  'Maria',
  'Maria',
  'Maria',
  'Maria',
  'Maria',
  'Maria',
  'Maria',
  'Maria',
  'Maria',
  'Maria',  

  
];
const descriptions1 = [
 
    '10/07/2022',
    '10/07/2022',
    '10/07/2022',
    '10/07/2022',
    '10/07/2022',
    '10/07/2022',
    '10/07/2022',
    '10/07/2022',
    '10/07/2022',
    '10/07/2022',
    '10/07/2022',
    '10/07/2022',
    '10/07/2022',
    '10/07/2022',
    '10/07/2022',
   
  ];

const Carousel = () => {
  const totalBoxes = images.length;
  const boxesPerPage = 2;
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



  return (
    <div className="flex flex-col items-center mt-8">
     
      <div className="flex">
        <div>

        </div>
        
        {images.slice(startIndex, endIndex).map((image, index) => (
          <div
            key={startIndex + index}
            className={`box w-[550px] h-[300px]  duration-300  hover:-translate-y-3 shadow-lg hover:shadow-xl rounded-lg hover:border-slate-300 hover:scale-105 flex flex-col items-center justify-center mx-2 border border-gray-300 ${
              index === 0 ? 'border-blue-500' : ''
            } cursor-pointer`}
            onClick={() => setCurrentPage(currentPage)}
          >
            <img
              src={process.env.PUBLIC_URL + image}
              alt={`Box ${startIndex + index + 1}`}
              className="w-[80px]   shadow-gray-500 mb-2 shadow-lg rounded-full h-[80px] object-cover"
            />
            <div>
                <div>
<StarRateIcon  className=' text-yellow-500 '/>
<StarRateIcon  className=' text-yellow-500 '/>
<StarRateIcon  className=' text-yellow-500 '/>
<StarRateIcon  className=' text-yellow-500 '/>
<StarHalfIcon  className=' text-yellow-500 '/>
                </div>
            </div>
            <div>
                <h1 className='text-[20px]'>{descriptions[startIndex + index]}</h1>
            </div>
            <div className="bg-white   p-2   items-center">
            <p className="text-center text-[12px]  place-content-center  w-[400px] h-[120px] font-medium ">{descriptions[startIndex + index]} Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus vitae placeat istnihil blanditiis sapiente quibusdam? Vero, quam. A ratione, consequuntur libero perspiciatis praesentium sequi deleniti ea, voluptates dicta nemo non nihil rerum sit ipsa corrupti accusantium sunt consequatur veniam quos provident? Rerum possimus unde, facere illo sint repudiandae nisi voluptatum eum ad in?
            </p>   
            
            </div>
            <div>

            </div>
            <p className='mb-5'>
            {descriptions1[startIndex + index]} 
            </p>
            
            
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

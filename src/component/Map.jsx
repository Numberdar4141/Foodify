// ScrollAnimation.js
import React from 'react';
import { motion, useAnimation } from 'framer-motion';

const ScrollAnimation = () => {
  const controls = useAnimation();

  const handleScroll = () => {
    const scrollY = window.scrollY;
    controls.start({ opacity: 0 +scrollY / 600 }); // Adjust the value as needed
  };

  // Attach the scroll event listener when the component mounts
  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div style={{ height: '200vh' }}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={controls}
        style={{
          width: 200,
          height: 200,
          backgroundColor: 'blue',
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      />
    </div>
  );
};

export default ScrollAnimation;

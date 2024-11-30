import React, { useState, useEffect } from 'react';

const BackgroundChanger = () => {
  // Array of background images
  const backgrounds = [
    'bg-humanoidRobot',
    'bg-coderRobot',
    'bg-teachingRobot', // Replace with your actual class names for images
    
  ];

  // State to track the current background index and opacity
  const [currentIndex, setCurrentIndex] = useState(0);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    // Function to change the background image
    const changeBackground = () => {
      setOpacity(0.5); // Start fading out
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
        setOpacity(1); // Fade in the new background
      }, 500); // Match this duration with the CSS transition duration
    };

    // Change background every 20 seconds
    const interval = setInterval(changeBackground, 10000); // 20000 milliseconds = 20 seconds

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, [backgrounds.length]);

  return (
    <div 
      className={`relative ${backgrounds[currentIndex]} bg-contain bg-no-repeat bg-center h-full transition-opacity duration-500`} 
      style={{ opacity }}
    >
    </div>
  );
};

export default BackgroundChanger;

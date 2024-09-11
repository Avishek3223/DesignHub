"use client"; // Add this line at the top

import Image from 'next/image';
import { motion, useAnimation } from 'framer-motion';
import { useEffect, useRef } from 'react';
import block from '../utils/blockchain.jpg';
import datascience from '../utils/datascience.jpg';
import python from '../utils/python.jpg';
import react from '../utils/reactNative.jpg';
import web from '../utils/web-dev.jpg'; // Corrected file name

const Page = () => {
  const images = [
    { id: 1, src: block, alt: 'Blockchain' },
    { id: 2, src: datascience, alt: 'Data Science' },
    { id: 3, src: python, alt: 'Python' },
    { id: 4, src: react, alt: 'React' },
    { id: 5, src: web, alt: 'Web Development' },
  ];

  const imagesLoop = [...images, ...images]; // Duplicate the images array

  const controls = useAnimation();
  const containerRef = useRef(null);

  useEffect(() => {
    const totalDuration = 20; 

    controls.start({
      x: [0, -containerRef.current.scrollWidth / 2], // Calculate full width animation
      transition: {
        ease: 'linear',
        duration: totalDuration,
        repeat: Infinity,
        repeatType: 'loop',
      },
    });
    return () => controls.stop();
  }, [controls]);

  return (
    <div className="overflow-hidden relative" ref={containerRef}>
      <motion.div
        className="flex gap-6"
        animate={controls}
        style={{ minWidth: '100%', display: 'flex' }} // Ensure full width and correct alignment
      >
        {imagesLoop.map((image, idx) => (
          <motion.div
            key={idx}
            whileHover={{ opacity: 0.8, scale: 1.05 }}
            style={{ flex: '0 0 auto', width: 300 }} // Fixed width to ensure alignment
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={300}
              height={200}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Page;

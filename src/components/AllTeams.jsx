import React, { useState, useEffect, useCallback } from 'react';
import instagram from '../assets/Instagram.png';
import twitter from "../assets/Twitter.png";
import youtube from "../assets/Youtube.png"

const importAll = (r) => r.keys().map(r);
const images = importAll(require.context('../assets/AllCc', false, /\.(png|jpe?g|svg)$/));

const Gallery = () => {
  // Sample data - replace with your actual data
  const [peopleData] = useState(
    images.map((img, i) => ({
      id: i + 1,
      alt: `Person ${i + 1}`,
      image: img,
      social: {
        twitter: `https://twitter.com/user${i}`,
        facebook: `https://facebook.com/user${i}`,
        youtube: `https://youtube.com/user${i}`,
      },
    }))
  );
  

  const [containerSize, setContainerSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const [portraits, setPortraits] = useState([]);

  // SVG icons for social media
  const socialIcons = {
    twitter: (
        <img src={instagram} className='icon-svg' alt="" />
    ),
    facebook: (
      <img src={twitter} className='icon-svg' alt="" />
    ),
    youtube: (
        <img src={youtube} className='icon-svg' alt="" />
    ),
  };

  const handleResize = useCallback(() => {
    setContainerSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }, []);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [handleResize]);

  useEffect(() => {
    createNonOverlappingGallery();
  }, [containerSize]);

  const createNonOverlappingGallery = () => {
    const { width: containerWidth, height: containerHeight } = containerSize;
    const minDimension = Math.min(containerWidth, containerHeight);
    const bubbleSizes = [];
    const positions = [];

    // Create varied sizes for bubbles
    peopleData.forEach((person, index) => {
      let size;

      // Create a few larger focal bubbles
      if (index < 5) {
        size = minDimension * (0.20 + Math.random() * 0.07); // 15-22% of screen size
      }
      // Medium bubbles
      else if (index < 15) {
        size = minDimension * (0.18 + Math.random() * 0.05); // 9-14% of screen size
      }
      // Smaller bubbles
      else {
        size = minDimension * (0.10 + Math.random() * 0.04); // 5-9% of screen size
      }

      bubbleSizes.push(size);

      // Initial random position
      positions.push({
        x: containerWidth * (0.2 + Math.random() * 0.6),
        y: containerHeight * (0.2 + Math.random() * 0.6),
        vx: 0,
        vy: 0,
        radius: size / 2,
      });
    });

    // Run force-directed layout to separate bubbles
    const iterations = 100; // Number of iterations for force-directed layout
    for (let i = 0; i < iterations; i++) {
      // Force-directed algorithm to prevent overlaps
      for (let j = 0; j < positions.length; j++) {
        const bubble1 = positions[j];

        // Repulsion from other bubbles
        for (let k = 0; k < positions.length; k++) {
          if (j === k) continue;

          const bubble2 = positions[k];
          const dx = bubble1.x - bubble2.x;
          const dy = bubble1.y - bubble2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const minDistance = (bubble1.radius + bubble2.radius) * 1.05; // 5% buffer to ensure no overlap

          if (distance < minDistance) {
            // Calculate repulsion force
            const force = (minDistance - distance) / distance * 0.1;
            bubble1.vx += dx * force;
            bubble1.vy += dy * force;
          }
        }

        // Attraction to center
        const centerX = containerWidth / 2;
        const centerY = containerHeight / 2;
        const dcx = bubble1.x - centerX;
        const dcy = bubble1.y - centerY;
        const centerDistance = Math.sqrt(dcx * dcx + dcy * dcy);

        // Keep bubbles in container bounds with center attraction
        bubble1.vx -= dcx * 0.001;
        bubble1.vy -= dcy * 0.001;

        // Strong repulsion from container edges
        const edgeForce = 0.1;
        if (bubble1.x < bubble1.radius) {
          bubble1.vx += edgeForce;
        }
        if (bubble1.x > containerWidth - bubble1.radius) {
          bubble1.vx -= edgeForce;
        }
        if (bubble1.y < bubble1.radius) {
          bubble1.vy += edgeForce;
        }
        if (bubble1.y > containerHeight - bubble1.radius) {
          bubble1.vy -= edgeForce;
        }

        // Apply velocity
        bubble1.x += bubble1.vx;
        bubble1.y += bubble1.vy;

        // Damping
        bubble1.vx *= 0.9;
        bubble1.vy *= 0.9;
      }
    }

    // Create portrait elements with final positions
    const newPortraits = positions.map((position, index) => {
      const person = peopleData[index];
      const size = bubbleSizes[index];

      return (
        
        <div
          key={person.id}
          className="portrait"
          style={{
            width: `${size}px`,
            height: `${size}px`,
            left: `${position.x - size / 2}px`,
            top: `${position.y - size / 2}px`,
            zIndex: Math.floor(size * 5), // Larger portraits higher z-index
          }}
        >
          <img src={person.image} alt={person.alt} />
          <div className="social-overlay">
            <div
              className="social-icon twitter"
              onClick={() => window.open(person.social.twitter, '_blank')}
            >
              {socialIcons.twitter}
            </div>
            <div
              className="social-icon facebook"
              onClick={() => window.open(person.social.facebook, '_blank')}
            >
              {socialIcons.facebook}
            </div>
            <div
              className="social-icon youtube"
              onClick={() => window.open(person.social.youtube, '_blank')}
            >
              {socialIcons.youtube}
            </div>
          </div>
        </div>
      );
    });

    setPortraits(newPortraits);
  };

  return (
    <>
    <div className="teambody">
      <div className="gallery-container">{portraits}</div>
      <div className="vignette" />
      </div>
    </>
  );
};

export default Gallery;
import React from 'react';
import { useSpring, animated } from 'react-spring';
import catImage from '../images/cat_no_bg.png'; // Import the image

function HeroSection() {
  const styles = useSpring({
    // from: { opacity: 0, transform: 'scale(0.5)' },
    // to: { opacity: 1, transform: 'scale(1)' },
    // config: { tension: 300, friction: 20 },

    // from: { opacity: 0, transform: 'translateX(-50%) rotate(-10deg)' },
    // to: { opacity: 1, transform: 'translateX(50%) rotate(10deg)' },
    // config: { tension: 100, friction: 20 },
    // loop: { reverse: true }, // Enable looping with reverse animation


    from: { opacity: 0, transform: 'translateX(-10%) rotate(-40deg)' },
    to: { opacity: 1, transform: 'translateX(50%) rotate(10deg)' },
    config: { tension: 1000, friction: 50},
    loop: { reverse: true }, // Enable looping with reverse animation
  });

  return (
    <div className="hero-section">
      <animated.img
        style={styles}
        src={catImage} // Use the imported image
        alt="Cat Image"
        className="hero-image"
        width="200px"
        height="auto"
      />
    </div>
  );
}

export default HeroSection;





// import React from 'react';

// const HeroSection = () => {
//   return (
//     <div className="hero">
//       <h1>Welcome to our Website!</h1>
//       <p>This is the hero section of our website.</p>
//     </div>
//   );
// };

// export default HeroSection;
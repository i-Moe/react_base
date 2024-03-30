import Atropos from 'atropos/react';
import React, { useEffect } from 'react';
import { Box } from '@chakra-ui/react';
import atroposBg from '../images/atropos-bg.svg';
import atroposMountains from '../images/atropos-mountains.svg';
import atroposForestBack from '../images/atropos-forest-back.svg';
import atroposForestMid from '../images/atropos-forest-mid.svg';
import atroposForestFront from '../images/atropos-forest-front.svg';
import atroposLogo from '../images/atropos-logo-en.svg';
import "./Atropos.css";

const AtroposComponent = () => {
//   useEffect(() => {
//     const atropos = new Atropos({
//       // Atropos configuration options
//     });
//     // Initialize Atropos
//     atropos.init();
//   }, []);

  return (
<div className="atropos-container">
    <Atropos
      className="atropos-banner"
      highlight={false}
      onEnter={() => console.log("enter")}
    >
      <img
        className="atropos-banner-spacer"
        src={atroposBg}
        alt=""
      />
      <img
        data-atropos-offset="-4.5"
        src={atroposBg}
        alt=""
      />
      <img
        data-atropos-offset="-2.5"
        src={atroposMountains}
        alt=""
      />
      <img
        data-atropos-offset="0"
        src={atroposForestBack}
        alt=""
      />
      <img
        data-atropos-offset="2"
        src={atroposForestMid}
        alt=""
      />
      <img
        data-atropos-offset="4"
        src={atroposForestFront}
        alt=""
      />
      <img
        data-atropos-offset="5"
        src={atroposLogo}
        alt=""
      />
    </Atropos>
  </div>
    
    // <Box bgGradient="linear(to-b, primary, primary-dark)" borderB="2" borderColor="primary">
    //   <Box maxW="screen-lg" mx="auto" pt="32" pb="16" px={{ base: 4, md: 8, lg: 16 }}>
    //     <div className="atropos atropos-header w-full atropos-rotate-touch-scroll-y atropos-active atropos-rotate-touch">
    //       <span className="atropos-scale">
    //         <span className="atropos-rotate">
    //           <span className="atropos-inner">
    //             <img className="atropos-header-spacer" src={atroposBg} alt="stars" />
    //             <img src={atroposBg} alt="stars" style={{ transitionDuration: '300ms', transform: 'translate3d(-0.938111%, 0.310075%, 0px)', transitionTimingFunction: 'ease-out' }} />
    //             <img data-atropos-offset="-2.5" src={atroposMountains} alt="mountains" style={{ transitionDuration: '300ms', transform: 'translate3d(-0.521173%, 0.172264%, 0px)', transitionTimingFunction: 'ease-out' }} />
    //             <img data-atropos-offset="0" src={atroposForestBack} alt="forest" style={{ transitionDuration: '300ms', transform: 'translate3d(0%, 0%, 0px)', transitionTimingFunction: 'ease-out' }} />
    //             <img data-atropos-offset="2" src={atroposForestMid} alt="forest" style={{ transitionDuration: '300ms', transform: 'translate3d(0.416938%, -0.137811%, 0px)', transitionTimingFunction: 'ease-out' }} />
    //             <img data-atropos-offset="4" src={atroposForestFront} alt="forest" style={{ transitionDuration: '300ms', transform: 'translate3d(0.833876%, -0.275622%, 0px)', transitionTimingFunction: 'ease-out' }} />
    //             <img data-atropos-offset="5" src={atroposLogo} alt="atropos logo" style={{ transitionDuration: '300ms', transform: 'translate3d(1.04235%, -0.344528%, 0px)', transitionTimingFunction: 'ease-out' }} />
    //             <div data-atropos-offset="6" className="atropos-header-button-wrap" style={{ transitionDuration: '300ms', transform: 'translate3d(1.25081%, -0.413433%, 0px)', transitionTimingFunction: 'ease-out' }}>
    //               <a className="bg-primary text-white rounded-full px-4 py-2 md:px-8 md:py-4 font-bold md:text-xl inline-flex hover:bg-opacity-70 duration-200 translate-y-full" href="/docs">Get Started</a>
    //             </div>
    //           </span>
    //           <span className="atropos-shadow" style={{ transform: 'translate3d(0px, 0px, -50px) scale(1)', transitionDuration: '300ms', transitionTimingFunction: 'ease-out' }}></span>
    //         </span>
    //       </span>
    //     </div>
    //   </Box>
    // </Box>
  );
};

export default AtroposComponent;

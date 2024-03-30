import Atropos from 'atropos/react';
import atroCat from '../images/cat_no_bg.png';
import atroCatBg from '../images/manyCats_orangeBg.png';
import "./Atrocat.css";

const AtroCat = () => {

  return (
<div className="atrocat-container">
    <Atropos
      className="atrocat-banner"
      highlight={false}
      onEnter={() => console.log("enter")}
    >
      <img
        className="atrocat-banner-spacer"
        src={atroCatBg}
        alt=""
      />
      <img
        data-atropos-offset="-4.5"
        src={atroCatBg}
        alt=""
      />
      <img
        data-atropos-offset="5"
        src={atroCat}
        alt=""
      />
    </Atropos>
  </div>
    
  );
};

export default AtroCat;